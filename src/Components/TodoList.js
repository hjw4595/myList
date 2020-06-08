import React  from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { observer, inject } from 'mobx-react';

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
        <>
            <TodoForm addTodoItem={addTodoItem} />
            <TodoItem todoList={todoList} deleteTodoItem={deleteTodoItem} />
        </>
    )
    }
}

export default TodoList