import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ChangeItem from './ChangeItem';

const todoItems = [
  {
    id: 1,
    itemUpdated: true,
    value: 1
  },
];

describe("ChangeItem", () => {
  const changeItem = jest.fn(() => true)
  const { getByText } = render(<ChangeItem todoItem={todoItems[0]} changeItem={changeItem}/>);
  it("텍스트를 누르면 itemUpdated의 값이 바뀌어야 한다", () => {
    const Button = getByText("1");
    fireEvent.click(Button);
    expect(changeItem.mock.calls.length).toBe(1);
    });
});