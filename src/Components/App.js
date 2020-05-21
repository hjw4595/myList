import React from 'react';
import TodoList from "./TodoList";
import Wheather from "./Weather/index";
import styled from "styled-components";
import Clock from "./Clock";
import RootStore from "../mobx/index";
import { Provider } from 'mobx-react';

const root = new RootStore();

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
      <Clock />
      <Wheather />
      <Container>
      <Provider {...root}>
          <TodoList />
        </Provider>
      </Container>
    </>
  );
}

export default App;
