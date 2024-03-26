import React, { useState } from 'react';
import { css } from '@emotion/react';
import KanbanColumn from './KanbanColumn';

const KanbanBoardStyles = css`
    flex:10;
    display:flex;
    flex-direction:row;
    gap:1rem;
    margin:0 1rem 1rem;
  `;

const COLUMN_BG_COLORS = {
  loading: '#E3E3E3',
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
        <KanbanColumn title="读取中..." bgColor={COLUMN_BG_COLORS.loading} />
      ) : (
        <>
          <KanbanColumn
            bgColor={COLUMN_BG_COLORS.todo}
            title="待处理"
            setIsDragSource={(isSrc) => setDragSource(isSrc ? COLUMN_KEY_TODO : null)}
            setIsDragTarget={(isTgt) => setDragTarget(isTgt ? COLUMN_KEY_TODO : null)}
            onDrop={handleDrop}
            cardList={todoList}
            setDraggedItem={setDraggedItem}
            canAddNew
            onAdd={onAdd.bind(null, COLUMN_KEY_TODO)}
          />
          <KanbanColumn
            bgColor={COLUMN_BG_COLORS.ongoing}
            title="进行中"
            setIsDragSource={(isSrc) => setDragSource(isSrc ? COLUMN_KEY_ONGOING : null)}
            setIsDragTarget={(isTgt) => setDragTarget(isTgt ? COLUMN_KEY_ONGOING : null)}
            onDrop={handleDrop}
            cardList={ongoingList}
            setDraggedItem={setDraggedItem}
          />
          <KanbanColumn
            bgColor={COLUMN_BG_COLORS.done}
            title="已完成"
            setIsDragSource={(isSrc) => setDragSource(isSrc ? COLUMN_KEY_DONE : null)}
            setIsDragTarget={(isTgt) => setDragTarget(isTgt ? COLUMN_KEY_DONE : null)}
            onDrop={handleDrop}
            onRemove={onRemove.bind(null, COLUMN_KEY_DONE)}
            cardList={doneList}
            setDraggedItem={setDraggedItem}
          />
        </>
      )}
    </main>
  );
}
