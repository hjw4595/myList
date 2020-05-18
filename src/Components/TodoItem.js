import React from "react";
import List from "./List";

const TodoItem = ({ todoList, deleteTodoItem }) => {
  //TODO : 그냥 function 사용해서 커링 구현하기
  // const onDeleteTodoItemClick = index => event => {
  //   window.confirm("지우기 확인") && deleteTodoItem(index)
  // }
  function onDeleteTodoItemClick(TodoItemId){
    return function(event){
      return window.confirm("지우기 확인") && deleteTodoItem(TodoItemId)
    }

  }
  return (
    <List todoList={todoList} onDeleteTodoItemClick={onDeleteTodoItemClick}/>
  )
}
TodoItem.defaultProps = { todoList: [], deleteTodoItem: id => null }

export default TodoItem