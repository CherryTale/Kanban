/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../../src/components/App';
import '@testing-library/jest-dom'

test('渲染保存当前项目按钮', () => {
  render(<App />);
  const linkElement = screen.getByText(/保存当前项目/i);
  expect(linkElement).toBeInTheDocument();
});