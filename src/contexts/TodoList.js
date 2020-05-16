import React, { useState } from "react";

export const TodoListContext = React.createContext();

const TodoContextProvider = ({ children }) => {
  /**
   * todoItem : {
   *   id : number,
   *   value : string
   * }
   */
  const [todoList, setTodoList] = useState([{ id: 0, value: "" }]);

  /**
   * 투두아이템 추가
   * @param todoItem
   */
  const addTodoItem = ({ id, value }) => {
    const newTodoItem = {
      id,
      value
    }
    setTodoList(todoList.concat(newTodoItem))
  }
  /**
   * 투두아이템 삭제 
   * @param id number
   */
  const deleteTodoItem = id => {
    const newTodoList = todoList.filter(todoItem => id !== todoItem.id)
    setTodoList(newTodoList)
  }

  return (
    <TodoListContext.Provider value={{ todoList, addTodoItem, deleteTodoItem }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoContextProvider;