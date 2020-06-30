import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CheckItem from './CheckItem';

const todoItems = [
  {
    id: 1,
    check: true
  },
  {
    id: 2,
    check: false
  }];

describe("CheckItem", () => {
  const checkItem = jest.fn(() => true)
  const { getByText } = render(<CheckItem todoItem={todoItems[1]} checkItem={checkItem}/>);
  it("체크박스를 누르면 체크가 되어야 한다", () => {
    const Button = getByText("☑");
    fireEvent.click(Button);
    expect(checkItem.mock.calls.length).toBe(1);
    });
  it("체크박스를 누르면 체크가 되어야 한다", () => {
    const { getByRole } = render(<CheckItem todoItem={todoItems[0]}/>);
    const Button = getByRole("img");
    expect(Button.textContent).toBe("✅");
    });
});
