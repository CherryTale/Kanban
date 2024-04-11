/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom'
import { act, fireEvent, getByText, render, screen, waitFor } from '@testing-library/react';
import KanbanCard from '../../src/components/KanbanCard';

window.matchMedia = jest.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // 在较新的浏览器中使用 addListener
  removeListener: jest.fn(), // 在较新的浏览器中使用 removeListener
}));

describe('KanbanCard', () => {
  it('测试卡片', async () => {
    // Arrange 准备
    const onAdd = jest.fn();
    // Act 动作
    render(
      <KanbanCard title={"测试卡片"} createTime={ "2024-04-05 09:30"}/>
    );

  });
});