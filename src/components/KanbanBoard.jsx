import React, { useState } from 'react';
import { css } from '@emotion/react';
import { Spin } from 'antd';
import KanbanColumn from './KanbanColumn';

const KanbanBoardStyles = css`
    display:flex;
    flex-direction:row;
    height:100%;
    width:100%;
    gap:0.5rem;
    margin:0.5rem;
  `;

const COLUMN_BG_COLORS = {
  todo: '#C9AF97',
  ongoing: '#FFE799',
  done: '#C0E8BA',
};
export const COLUMN_KEY_TODO = 'todo';
export const COLUMN_KEY_ONGOING = 'ongoing';
export const COLUMN_KEY_DONE = 'done';

export default function KanbanBoard({
  isLoading = true,
  todoList,
  ongoingList,
  doneList,
  staffList,
  onAdd,
  onRemove,
}) {
  const [draggedItem, setDraggedItem] = useState(null);
  const [dragSource, setDragSource] = useState(null);
  const [dragTarget, setDragTarget] = useState(null);
  const handleDrop = (evt) => {
    if (!draggedItem || !dragSource || !dragTarget || dragSource === dragTarget) {
      return;
    }
    onRemove(dragSource, draggedItem);
    onAdd(dragTarget, draggedItem);
  };

  return (
    <main css={KanbanBoardStyles}>
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <>
          <KanbanColumn
            bgColor={COLUMN_BG_COLORS.todo}
            title="待处理"
            setIsDragSource={(isSrc) => setDragSource(isSrc ? COLUMN_KEY_TODO : null)}
            setIsDragTarget={(isTgt) => setDragTarget(isTgt ? COLUMN_KEY_TODO : null)}
            onDrop={handleDrop}
            cardList={todoList}
            staffList={staffList}
            setDraggedItem={setDraggedItem}
            onAdd={onAdd.bind(null, COLUMN_KEY_TODO)}
            onRemove={onRemove.bind(null, COLUMN_KEY_TODO)}
          />
          <KanbanColumn
            bgColor={COLUMN_BG_COLORS.ongoing}
            title="进行中"
            setIsDragSource={(isSrc) => setDragSource(isSrc ? COLUMN_KEY_ONGOING : null)}
            setIsDragTarget={(isTgt) => setDragTarget(isTgt ? COLUMN_KEY_ONGOING : null)}
            onDrop={handleDrop}
            cardList={ongoingList}
            staffList={staffList}
            setDraggedItem={setDraggedItem}
            onAdd={onAdd.bind(null, COLUMN_KEY_ONGOING)}
            onRemove={onRemove.bind(null, COLUMN_KEY_ONGOING)}
          />
          <KanbanColumn
            bgColor={COLUMN_BG_COLORS.done}
            title="已完成"
            setIsDragSource={(isSrc) => setDragSource(isSrc ? COLUMN_KEY_DONE : null)}
            setIsDragTarget={(isTgt) => setDragTarget(isTgt ? COLUMN_KEY_DONE : null)}
            onDrop={handleDrop}
            cardList={doneList}
            staffList={staffList}
            setDraggedItem={setDraggedItem}
            onAdd={onAdd.bind(null, COLUMN_KEY_DONE)}
            onRemove={onRemove.bind(null, COLUMN_KEY_DONE)}
          />
        </>
      )}
    </main>
  );
}
