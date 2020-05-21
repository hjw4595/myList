import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { observer } from 'mobx-react';

const ItemList = styled.ul`
    list-style:none;
    padding-left:0px;
    `;
const Item = styled.li`
    `;

@observer
class List extends React.Component {
    render(){
        const {todoList , onDeleteTodoItemClick} = this.props
    return (
            <ItemList>{
            todoList.map((TodoItem) =>
                <Item key={TodoItem.id}>
                  {TodoItem.value}
                  <Button onClick={onDeleteTodoItemClick(TodoItem.id)}>
                     <span role="img" aria-label="Delete">✖️</span>
                     </Button>
                </Item>
                )
            }</ItemList>
    )
}
}
export default List