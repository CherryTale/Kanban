/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom'
import { act, fireEvent, getByText, render, screen, waitFor } from '@testing-library/react';
import StaffBoard from '../../src/components/StaffBoard';

window.matchMedia = jest.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // 在较新的浏览器中使用 addListener
  removeListener: jest.fn(), // 在较新的浏览器中使用 removeListener
}));

describe('StaffBoard', () => {
  it('员工面板', async () => {
    // Act 动作
    render(
      <StaffBoard list={[
      { name: '张三' ,avatar:"https://api.multiavatar.com/aaa.svg",
      describe:"张三是一位富有创造力和才华的年轻人，对于编程和软件开发有着深厚的兴趣。他喜欢挑战自己，经常参与各种编程竞赛和黑客马拉松。在工作中，他总是能够提供创新的解决方案，因为他善于思考问题的不同角度。"},
      ]}/>
    );

  });
});