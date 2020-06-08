import React from "react";
<<<<<<< HEAD
import Button from "./Button/index";
import styled from "styled-components";
import { observer , inject } from 'mobx-react';
import ChangeItem from "./ChangeItem"
import CheckTodo from './CheckItem';
=======
import Button from "./Button";
import styled from "styled-components";
import { observer } from 'mobx-react';
>>>>>>> 0eb3d49253e81e84c59d4a27aa1a98a41681387a

const ItemList = styled.ul`
    list-style:none;
    padding-left:0px;
    `;
const Item = styled.li`
    `;

@inject(stores => ({
        checkItem: stores.TodoStore.checkItem,
        currentChange: stores.TodoStore.currentChange,
        changeItem : stores.TodoStore.changeItem
}))

@observer
class List extends React.Component {
    render(){
        const {todoList , onDeleteTodoItemClick ,checkItem , currentChange ,changeItem} = this.props
    return (
            <ItemList>{
            todoList.map((todoItem) =>
                <Item key={todoItem.id}>
                    <CheckTodo todoItem={todoItem} checkItem={checkItem}/>
                    <ChangeItem todoItem={todoItem} currentChange={currentChange} changeItem={changeItem}/>
                        <Button onClick={onDeleteTodoItemClick(todoItem.id)}>
                            <span role="img" aria-label="Delete">✖️</span>
                        </Button>
                </Item>
                )
            }</ItemList>
    )
}
}
export default List