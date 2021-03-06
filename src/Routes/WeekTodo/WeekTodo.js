import React from 'react';
import styled from "styled-components";
import Wheather from "../../Components/Weather";
import Clock from "../../Components/Clock/Clock";
import Calendar from "../../Components/Calendar";
import RootStore from "../../mobx";
import { Provider } from 'mobx-react';
import {Helmet} from "react-helmet";
import ListAltIcon from '@material-ui/icons/ListAlt';

const root = new RootStore();
const Container = styled.div`
  height: 100%;
  margin-top : 50px;
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
    <Helmet>
      <ListAltIcon />
      <meta charSet="utf-8" />
      <title>Weekly</title>
    </Helmet>
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
          </Provider>
        </TodoContainer>
      </Container>
    </>
  );
}

export default WeekTodo;
