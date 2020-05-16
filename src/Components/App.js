import React from 'react';
import TodoList from "./TodoList";
import TodoContextProvider from "../contexts/TodoList";

function App() {
  return (
    <TodoContextProvider >
      <TodoList />
    </TodoContextProvider>
  );
}

export default App;
