import React from "react";
import List from "./List";

const TodoItem = ({ todoList, deleteTodoItem }) => {
  function onDeleteTodoItemClick(TodoItem){
    return function(event){
      return window.confirm("지우기 확인") && deleteTodoItem(TodoItem)
    }

  }
  return (
    <List todoList={todoList} onDeleteTodoItemClick={onDeleteTodoItemClick} />
  )
}
TodoItem.defaultProps = { todoList: [], deleteTodoItem: id => null }

export default TodoItem