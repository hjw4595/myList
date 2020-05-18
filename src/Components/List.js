import React from "react";
import Button from "./Button";
import styled from "styled-components";

const ItemList = styled.ul`
    list-style-type : decimal;
    padding-left:0px;
    `;
const Item = styled.li`
    `;
const List = props => {
    return (
            <ItemList>{
            props.todoList.map((TodoItem) =>
                <Item key={TodoItem.id}>
                  {TodoItem.value}
                  <Button onClick={props.onDeleteTodoItemClick(TodoItem.id)}>
                     <span role="img" aria-label="Delete">✖️</span>
                     </Button>
                </Item>
                )
            }</ItemList>
    )
}

export default List