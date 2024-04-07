import React, { useContext, useEffect, useState,useRef } from 'react';
import { css } from '@emotion/react';
import { Button, Modal } from 'antd';
import AdminContext from '../context/AdminContexts';

const kanbanCardStyles = css`
  margin-bottom: 1rem;
  padding: 0.6rem 1rem;
  border: 1px solid gray;
  border-radius: 1rem;
  list-style: none;
  background-color: rgba(255, 255, 255, 0.4);
  text-align: left;
  position: relative;

  &:hover{
    box-shadow: 0 0.2rem 0.2rem rgba(0,0,0,0.2), inset 0 1px #fff;
  }
`;
const kanbanCardTitleStyles = css`
  display:inline;
  font-size:1rem;
  font-weight:bold;
  max-width:12vw;
  overflow:hidden;
  text-overflow:ellipsis;
`;
const timeStyles = css`
  text-align: right;
  font-size: 0.6rem;
  color: #333;
`;
const DescribeStyles = css`
  font-size:0.8rem;
`;
const headerStyles=css`
  display:flex;
  justify-content:space-between;
`
const staffStyles=css`
  font-size:0.8rem;
  display:flex;
  align-items:center;
  &>img{
    height:1.5rem;
    margin-right:4px;
  }
`
const timeContainer=css`
  min-width:5rem;
`
const tagContainer=css`
  width:100%;
`
const footerStyles=css`
  margin-top:0.6rem;
  display:flex;
  justify-content:space-between;
  align-items:center;
`
const tagStyles=css`
  font-size:0.8rem;
  white-space:nowrap;
  margin:1px 2px;
  padding:1px 4px;
  border-radius:0.8rem;
`

export default function KanbanCard({
  title, createTime, onDragStart, onRemove, deadline, describe, staff, staffList,tag, tagList
}) {
  const [displayTime, setDisplayTime] = useState(createTime);
  const [showDetail, setShowDetail] = useState(false);
  const isAdmin = useContext(AdminContext);
  const imgRef=useRef(null);

  useEffect(
    () => {
      if(staff){
        imgRef.current.src=staffList.filter((item)=>{
          return item.name===staff;
        })[0].avatar
      }
      
      const MINUTE = 60 * 1000;
      const HOUR = 60 * MINUTE;
      const DAY = 24 * HOUR;
      const UPDATE_INTERVAL = MINUTE;

      const updateDisplayTime = () => {
        const timePassed = new Date() - new Date(createTime);
        let relativeTime = '刚刚';
        if (MINUTE <= timePassed && timePassed < HOUR) {
          relativeTime = `${Math.ceil(timePassed / MINUTE)} 分钟前`;
        } else if (HOUR <= timePassed && timePassed < DAY) {
          relativeTime = `${Math.ceil(timePassed / HOUR)} 小时前`;
        } else if (DAY <= timePassed) {
          relativeTime = `${Math.ceil(timePassed / DAY)} 天前`;
        }
        setDisplayTime(relativeTime);
      };

      const intervalId = setInterval(updateDisplayTime, UPDATE_INTERVAL);
      updateDisplayTime();
      return () => {
        clearInterval(intervalId);
      };
    },
    [],
  );

  const handleDragStart = (evt) => {
    evt.dataTransfer.effectAllowed = 'move';
    evt.dataTransfer.setData('text/plain', title);
    onDragStart && onDragStart(evt);
  };

  let filtedList=[];
  if(tag){
    const map={};
    for (const obj of tagList){
      map[obj.name]=obj;
    }
    filtedList=tag.map(item=>map[item]);
  }

  return (
    <li css={kanbanCardStyles} draggable onDragStart={handleDragStart} onClick={() => { setShowDetail(true); }}>

      <div css={headerStyles}>
        <div style={{whiteSpace:"nowrap"}} css={kanbanCardTitleStyles}>{title}</div>
        {staff&&
          <div css={staffStyles}>
            <img ref={imgRef}/>
            <span>{staff}</span>
          </div>
        }
      </div>

      {describe&&<div css={DescribeStyles}>{describe}</div>}

      <div css={footerStyles}>
        <div css={tagContainer}>
          {filtedList.map((item)=>{return (
            <span
              key={item.name}
              css={tagStyles}
              style={{backgroundColor:item.color}}
              title={item.describe}
            >
              {item.name}
            </span>
          )})}
        </div>
        <div css={timeContainer}>
          <div css={timeStyles} title={createTime}>
            {`${displayTime}创建`}
          </div>
          {deadline&&
            <div css={timeStyles} title={deadline}>
              {deadline && `${deadline}截止`}
            </div>
          }
        </div>
      </div>
      {isAdmin && onRemove && <Button style={{position:"absolute",bottom:"0.6rem",right:"1rem"}} danger onClick={() => onRemove({ title })} shape="circle" size="small">X</Button>}
      <Modal
        open={showDetail}
        destroyOnClose
        centered
        footer={null}
        title="任务详情"
        onCancel={(evt) => { setShowDetail(false); evt.stopPropagation(); }}
      >
        <div>
          标题：
          {title}
        </div>
        <div>
          描述：
          {describe}
        </div>
        <div>
          截止日期：
          {deadline}
        </div>
        <div>
          负责人：
          {staff}
        </div>
        <div>
          标签：
          {tag&&tag.join("，")}
        </div>
      </Modal>
    </li>
  );
}
