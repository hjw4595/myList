import React from 'react';
import styled from "styled-components";
import TodoList from "../../Components/TodoList";
import Wheather from "../../Components/Weather";
import Clock from "../../Components/Clock";
import Calendar from "../../Components/Calendar";
import RootStore from "../../mobx";
import { Provider } from 'mobx-react';

const root = new RootStore();
const Container = styled.div`
width: 95%; 
margin-left : auto;
`;
const TodoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const CalendarContainer = styled.div`
  display: flex;
  margin-right: 20px;
`
const TodoListHeader = styled.div` 
  display:flex;
`;

function WeekTodo() {
  return (
    <>
   <Container>
      <TodoListHeader>
        <Clock />
        <Wheather />
      </TodoListHeader>

      <TodoContainer>
        <Provider {...root}>
          <CalendarContainer>
            <Calendar />
          </CalendarContainer>

          <TodoList />
        </Provider>
      </TodoContainer>
      </Container>
    </>
  );
}

export default WeekTodo;
