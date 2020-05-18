import React, { useContext } from "react";
import ItemList from "./TodoItem";
import { TodoListContext } from "../contexts/TodoList";
import TodoForm from "./TodoForm";
import styled from "styled-components";

const Container = styled.div`
    
`

const TodoList = () => {
    const { todoList, addTodoItem, deleteTodoItem } = useContext(TodoListContext);
    return (
        <Container>
            <TodoForm addTodoItem={addTodoItem} />
            <ItemList todoList={todoList} deleteTodoItem={deleteTodoItem} />
        </Container>
    )
}

export default TodoList