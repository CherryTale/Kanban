/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom'
import { act, fireEvent, getByText, render, screen, waitFor } from '@testing-library/react';
import KanbanBoard from '../../src/components/KanbanBoard';

window.matchMedia = jest.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // 在较新的浏览器中使用 addListener
  removeListener: jest.fn(), // 在较新的浏览器中使用 removeListener
}));

describe('KanbanBoard', () => {
  it('项目面板', async () => {
    // Act 动作
    render(
      <KanbanBoard todoList={[]} ongoingList={[]} doneList={[]} staffList={[]} tagList={[]}/>
    );

  });
});