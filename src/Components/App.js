import React from 'react';
import TodoList from "./TodoList";
import TodoContextProvider from "../contexts/TodoList";
import Wheather from "./Weather/Weather";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index:10;
`;

function App() {
  return (
    <>
      <Wheather />
      <Container>
        <TodoContextProvider >
          <TodoList />
        </TodoContextProvider>
      </Container>
    </>
  );
}

export default App;
