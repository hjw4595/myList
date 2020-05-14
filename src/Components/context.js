import React, { useState } from "react";

export const todoListContext = React.createContext();

const TodoContextProvider = ({ children }) => {
  const [ list, setList ] = useState([]);

  const addTodoItem = inputItem => setList(list.concat(inputItem))
  const deleteTodoItem = id => {
      const deletItem = list.filter(item => list[id] !== item)
      setList(deletItem)
  }
  return (
    <todoListContext.Provider value={{ list, addTodoItem, deleteTodoItem }}>
      {children}
    </todoListContext.Provider>
  );
};

export default TodoContextProvider;