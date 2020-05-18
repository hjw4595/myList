import React from "react";
import Button from "./Button";

const List = props => {
    return (
            <ul>{
                props.todoList.map((TodoItem) =>
              //TODO : key값이 왜 필요한지 알아보기 
                <li key={TodoItem.id}>
                  {TodoItem.value}
                  <Button onClick={props.onDeleteTodoItemClick(TodoItem.id)}>
                     <span role="img" aria-label="Delete">✖️</span>
                     </Button>
                </li>)
            }</ul>
    )
}

export default List