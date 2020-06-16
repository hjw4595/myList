import React  from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { observer, inject } from 'mobx-react';
import styled from "styled-components";

const Container = styled.div`
    margin-left : 10px;
    flex-direction: colum;
`
@inject(stores => ({
    todoList: stores.TodoStore.todoList,
    addTodoItem: stores.TodoStore.addTodoItem,
    deleteTodoItem: stores.TodoStore.deleteTodoItem
  }))

@observer
class TodoList extends React.Component  {
    render(){
    const { todoList ,addTodoItem , deleteTodoItem } = this.props;
    return (
        <Container>
            <TodoForm addTodoItem={addTodoItem} />
            <TodoItem todoList={todoList} deleteTodoItem={deleteTodoItem} />
        </Container>
    )
    }
}

export default TodoList