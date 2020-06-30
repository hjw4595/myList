import React from "react";
import styled from "styled-components";
import { Link, Route } from 'react-router-dom';
import TodoList from "../TodoList";

const Container = styled.div`
display: flex;
`
const DayUl = styled.ul`
list-style:none;
`

const DayLi = styled.li`
padding-bottom: 10px;
padding : 5px 0 ;
`

const DaysHeader = styled.span`
padding-right : 10px;
color : ${props => props.sunday ? "red" : "black"};
`

const DateButton = styled.button`
border: 1px solid black;
background-color: rgba(0,0,0,0);
color: skyblue; 
margin : 0 0 ;
background-color : ${props => props.today ? "black" : "transparent"};
&:hover {
  background-color: gray;
  color: black;
}
`;

const Month = styled.h1`
margin: auto 0;
`
const WeekButton = styled.button`
background-color : ${props => props.selected ? "green" : "transparent"};
transition: background-color .5s ease-in-out;
color : skyblue;
border: 0;
outline : 0;
background-color: rgba(0,0,0,0);
padding: 5px;
margin: 5px;
&:hover {
  color: black;
}
`
const ItmeLink = styled(Link)`
  text-decoration:none;
  color : ${props => props.today ? "white" : "black"};
`
class CalenderPresenter extends React.Component {
  render() {
    const { week, date, onBackWeek, onNextWeek} = this.props
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    return (
      <Container>
        <WeekButton onClick={onBackWeek}> ◀ </WeekButton>

        <Month> {(date.getMonth() + 1)}월 </Month>
        <DayUl>{week.map((week, index) => <DayLi key={index}>

          <DaysHeader sunday={week[0] === 0}>
            {days[week[0]]}
          </DaysHeader>

          <DateButton onClick={() => this.seleteDate}
            today={new Date().getDate() === week[1].getDate() && new Date().getMonth() === week[1].getMonth()}>

            <ItmeLink
              today={new Date().getDate() === week[1].getDate() && new Date().getMonth() === week[1].getMonth()}
              to={`/TodoList/${week[1].toLocaleDateString()}`}>
                {week[1].getDate()}
            </ItmeLink>
          </DateButton>
        </DayLi>)}</DayUl>
        <WeekButton onClick={onNextWeek}> ▶ </WeekButton>
        <Route path={`/TodoList/:id`} component={TodoList} />
      </Container>
    )
  }
}
export default CalenderPresenter;
