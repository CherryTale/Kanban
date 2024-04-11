/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom'
import { act, fireEvent, getByText, render, screen, waitFor } from '@testing-library/react';
import KanbanColumn from '../../src/components/KanbanColumn';

window.matchMedia = jest.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // 在较新的浏览器中使用 addListener
  removeListener: jest.fn(), // 在较新的浏览器中使用 removeListener
}));

describe('KanbanColumn', () => {
  it('添加新卡片', async () => {
    // Arrange 准备
    const onAdd = jest.fn();
    // Act 动作
    render(
      <KanbanColumn onAdd={onAdd} staffList={[]} tagList={[]} />
    );

    // Assert 断言
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(screen.getByText('标题')).toBeInTheDocument();
    //const input = screen.getByRole('textbox', { name: /title/i });
    //expect(input).toBeInTheDocument();
    //const titleElem = await findByText('添加新卡片');
    //expect(titleElem).toBeInTheDocument();

    //const inputElem = await findByRole('textbox');
    //expect(inputElem).toBeInTheDocument();

    //// Act 动作
    //act(() => {
      //fireEvent.change(inputElem, { target: { value: '单元测试新卡片-1' } });
      //fireEvent.keyDown(inputElem, { key: 'Enter' });
    //});

    //// Assert 断言
    //expect(onSubmit).toHaveBeenCalledTimes(1);
    //expect(onSubmit.mock.lastCall[0]).toHaveProperty('title', '单元测试新卡片-1');
  });
});