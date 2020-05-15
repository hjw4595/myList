import React, { useState } from "react";

export const todoListContext = React.createContext();

const TodoContextProvider = ({ children }) => {
  const [ list, setList ] = useState([]);

  const addTodoItem = item => {
    const newItem = {
        item
       }
      setList(list.concat(newItem))
    }
    console.log(list)
  
  const deleteTodoItem = id => {
      const deletItem = list.filter(deleteitem => list[id] !== deleteitem)
      setList(deletItem)
  }
  return (
    <todoListContext.Provider value={{ list, addTodoItem, deleteTodoItem }}>
      {children}
    </todoListContext.Provider>
  );
};

export default TodoContextProvider;