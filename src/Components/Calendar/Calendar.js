import React from "react";
import CalendarPresenter from "./CalenderPresenter";

class Calendar extends React.Component {
  componentDidMount = () => {
    let now = new Date();
    let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let week = this.makeWeekArr(date);
    this.setState({
      date, week
    })
  };
  makeWeekArr = date => {
    let day = date.getDay();
    let week = [];
    for (let i = 0; i < 7; i++) {
      let newDate = new Date(date.valueOf() + 86400000 * (i - day));
      week.push([i, newDate]);
    }
    return week;
  };
  onBackWeek = () => {
    let newDate = new Date(this.state.date.valueOf() - 86400000 * 7);
    let newWeek = this.makeWeekArr(newDate);
    this.setState({
      date: newDate, week: newWeek
    })
  };

  onNextWeek = () => {
    let newDate = new Date(this.state.date.valueOf() + 86400000 * 7);
    let newWeek = this.makeWeekArr(newDate);
    this.setState({
      date: newDate, week: newWeek
    })
  };
  
  render() {
    return (
      <>
        {this.state ? <CalendarPresenter
          week={this.state.week}
          date={this.state.date}
          onNextWeek={this.onNextWeek}
          onBackWeek={this.onBackWeek} /> : ""}
      </>
    )
  }
}
export default Calendar;
