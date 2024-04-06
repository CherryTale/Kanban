import React, { useContext, useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { Button, Modal } from 'antd';
import AdminContext from '../context/AdminContexts';

export const kanbanCardStyles = css`
  margin-bottom: 1rem;
  padding: 0.6rem 1rem;
  border: 1px solid gray;
  border-radius: 1rem;
  list-style: none;
  background-color: rgba(255, 255, 255, 0.4);
  text-align: left;

  &:hover{
    box-shadow: 0 0.2rem 0.2rem rgba(0,0,0,0.2), inset 0 1px #fff;
  }
`;
export const kanbanCardTitleStyles = css`
  font-size:1rem;
  font-weight:bold;
`;
const timeStyles = css`
  text-align: right;
  font-size: 0.6rem;
  color: #333;
`;
const DescribeStyles = css`
  font-size:0.8rem;
  
`;
export default function KanbanCard({
  title, createTime, onDragStart, onRemove, deadline, describe,
}) {
  const [displayTime, setDisplayTime] = useState(createTime);
  const [showDetail, setShowDetail] = useState(false);
  const isAdmin = useContext(AdminContext);

  useEffect(
    () => {
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

  return (
    <li css={kanbanCardStyles} draggable onDragStart={handleDragStart} onClick={() => { setShowDetail(true); }}>
      <div css={kanbanCardTitleStyles}>{title}</div>
      <div css={DescribeStyles}>{describe}</div>
      <div css={timeStyles} title={createTime}>
        {`${displayTime}创建`}
      </div>
      <div css={timeStyles} title={deadline}>
        {deadline && `${deadline}截止`}
        {isAdmin && onRemove && <Button danger onClick={() => onRemove({ title })} shape="circle" size="small">X</Button>}
      </div>
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
          {}
        </div>
      </Modal>
    </li>
  );
}
