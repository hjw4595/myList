import React from "react";
import styled from "styled-components";
import { Link, Route, withRouter } from 'react-router-dom';
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
  color : black;
  border-bottom : ${props => props.seleteDate ? "red" : "black"} 3px solid;
  background-color : ${props => props.today ? "orange" : "white"};
  &:hover {
    background-color: gray;
    color: black;
  }
  &:focus { outline:none; }
`;
const ItmeLink = styled(Link)`
  text-decoration:none;
`
const Month = styled.h1`
margin: auto 0;
`
const WeekButton = styled.button`
background-color : ${props => props.selected ? "gray" : "transparent"};
transition: background-color .5s ease-in-out;
color : skyblue;
border: 0;
outline : 0;
background-color: rgba(0,0,0,0);
padding: 5px;
margin: 5px;
&:hover {
  color: black;
};
`
class CalenderPresenter extends React.Component {
  render() {
    const { week, date, onBackWeek, onNextWeek, location} = this.props;
    const selectDate = location.pathname.split( '/' );
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    return (
      <Container>
        <WeekButton onClick={onBackWeek}> ◀ </WeekButton>

        <Month> {(date.getMonth() + 1)}월 </Month>
        <DayUl>{week.map((week, index) => <DayLi key={index}>

          <DaysHeader sunday={week[0] === 0}>
            {days[week[0]]}
          </DaysHeader>

          <ItmeLink
              to={`/TodoList/${week[1].toLocaleDateString()}`}>
                <DateButton
                seleteDate={selectDate[2] === week[1].toLocaleDateString()}
                today={ (new Date().getDate() === week[1].getDate()) && ( new Date().getMonth() === week[1].getMonth())}>
                {week[1].getDate()}
          </DateButton>
          </ItmeLink>
        </DayLi>)}</DayUl>
        <WeekButton onClick={onNextWeek}> ▶ </WeekButton>
        <Route path={`/TodoList/:id`} component={TodoList} />
      </Container>
    )
  }
}
export default withRouter(CalenderPresenter);
