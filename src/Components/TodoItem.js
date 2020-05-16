import React from "react";
import Button from "./Button"

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
    <>
      {(
        <ul>{
          todoList.map((TodoItem) =>
          //TODO : key값이 왜 필요한지 알아보기 
            <li key={TodoItem.id}>
              {TodoItem.value}
              <Button onClick={onDeleteTodoItemClick(TodoItem.id)}>
                 <span role="img" aria-label="Delete">✖️</span>
                 </Button>
            </li>)
        }</ul>
      )}
    </>
  )
}
TodoItem.defaultProps = { todoList: [], deleteTodoItem: id => null }

export default TodoItem