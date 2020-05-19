import React, { useContext } from "react";
import ItemList from "./TodoItem";
import { TodoListContext } from "../contexts/TodoList";
import TodoForm from "./TodoForm";

const TodoList = () => {
    const { todoList, addTodoItem, deleteTodoItem } = useContext(TodoListContext);
    return (
        <>
            <TodoForm addTodoItem={addTodoItem} />
            <ItemList todoList={todoList} deleteTodoItem={deleteTodoItem} />
        </>
    )
}

export default TodoList