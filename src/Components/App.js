import React from 'react';
import TodoList from "./TodoList";
import TodoContextProvider from "../contexts/TodoList";
import Wheather from "./Weather/Weather";
import styled from "styled-components";
import BackImage from "./BackImage";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

function App() {
  return (
    <Container>
      <BackImage 
        bgImage={require("../assets/clouds.jpg")}
      />
      <Wheather />
      <TodoContextProvider >
        <TodoList />
      </TodoContextProvider>
    </Container>
  );
}

export default App;
