import React from "react";
import Button from "./Button/index";
import styled from "styled-components";
import { observer, inject } from 'mobx-react';
import ChangeItem from "./ChangeItem"
import CheckTodo from './CheckItem';

const ItemList = styled.ul`
    list-style:none;
    padding-left:0px;
    `;
const Item = styled.li`
    `;

@inject(stores => ({
  checkItem: stores.TodoStore.checkItem,
  currentChange: stores.TodoStore.currentChange,
  changeItem: stores.TodoStore.changeItem
}))

@observer
class List extends React.Component {
  render() {
    const { location, todoList, onDeleteTodoItemClick, checkItem, currentChange, changeItem } = this.props
    return (
      <ItemList>{
        todoList.map((todoItem) =>
          <Item key={todoItem.id}>
            {location.pathname === todoItem.date || todoItem.date === true ?
              <>
                <CheckTodo todoItem={todoItem} checkItem={checkItem} />
                <ChangeItem todoItem={todoItem} currentChange={currentChange} changeItem={changeItem} />
                <Button onClick={onDeleteTodoItemClick(todoItem.id)}>
                  <span role="img" aria-label="Delete">✖️</span>
                </Button>
              </> : ""}</Item>
        )
      }</ItemList>
    )
  }
}

export default List