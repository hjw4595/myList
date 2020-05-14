import React from 'react';
import TodoList from "./List";
import TodoContextProvider from "./context";

function App() {
  return (
    <TodoContextProvider >
      <TodoList></TodoList>
    </TodoContextProvider>
  );
}

export default App;
