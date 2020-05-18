import React from 'react';
import TodoList from "./TodoList";
import TodoContextProvider from "../contexts/TodoList";
import Wheather from "./Weather/Weather";

function App() {
  return (
    <>
      <Wheather />
    <TodoContextProvider >
      <TodoList />
    </TodoContextProvider>
    </>
  );
}

export default App;
