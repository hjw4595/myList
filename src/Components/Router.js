import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Header from "../Components/Header";
import MonthTodo from "../Routes/MonthTodo";
import WeekTodo from "../Routes/WeekTodo";
import TodoList from "./TodoList";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/TodoList" component={WeekTodo} />
        <Route path="/TodoList/:id" component={TodoList} />
      </Switch>
      <Route path="/Month" exact component={MonthTodo} />
      <Redirect from="*" to="/TodoList" />
    </>
  </Router>
)