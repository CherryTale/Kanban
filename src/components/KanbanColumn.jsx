import React, {useState} from 'react';
import { css } from '@emotion/react';
import KanbanCard from './KanbanCard';
import KanbanNewCard from './KanbanNewCard';

const KanbanColumnStyles = css`
  display:flex;
  flex-direction:column;
  flex:1 1;
  border:1px solid gray;
  border-radius:1rem;

  &>h2{
    margin: 0.6rem 1rem;
    padding-bottom:0.6rem;
    border-bottom:1px solid gray;

    &>button{
      float: right;
      margin-top: 0.2rem;
      padding: 0.2rem 0.5rem;
      border: 0;
      border-radius: 1rem;
      height: 1.8rem;
      line-height: 1rem;
      font-size: 1rem;
    }
  }

  &>ul{
    flex:1;
    flex-basis:0;
    margin:1rem;
    padding:0;
    overflow:auto;
  }
`;

export default function KanbanColumn({
  bgColor,
  title,
  setIsDragSource,
  setIsDragTarget,
  onDrop,
  onRemove,
  cardList=[],
  setDraggedItem,
  canAddNew=false,
  onAdd
}) {
  const[showAdd,setShowAdd]=useState(false);
  const handleAdd=(evt)=>{
    setShowAdd(true);
  };
  const handleSubmit=(newCard)=>{
    onAdd&&onAdd(newCard);
    setShowAdd(false);
  };
  return (
    <section
      onDragStart={() => setIsDragSource(true)}
      onDragOver={(evt) => {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'move';
        setIsDragTarget(true);
      } }
      onDragLeave={(evt) => {
        evt.preventDefault();
        evt.dataTransfer.dropEffect = 'none';
        setIsDragTarget(false);
      } }
      onDrop={(evt) => {
        evt.preventDefault();
        onDrop && onDrop(evt);
      } }
      onDragEnd={(evt) => {
        evt.preventDefault();
        setIsDragSource(false);
        setIsDragTarget(false);
      } }
      css={css`
        ${KanbanColumnStyles} 
        background-color:${bgColor};
      `}
    >
      <h2>
        {title}
        {canAddNew&&<button onClick={handleAdd} disabled={showAdd}>&#8853; 添加新卡片</button>}
      </h2>
      <ul>
        {canAddNew&&showAdd&&<KanbanNewCard onSubmit={handleSubmit}/>}
        {cardList.map(
          props=><KanbanCard onRemove={onRemove} key={props.title} onDragStart={()=>setDraggedItem(props)} {...props}/>
        )}
      </ul>
    </section>
  );
}
