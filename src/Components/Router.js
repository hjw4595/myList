import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import MonthTodo from "../Routes/MonthTodo";
import WeekTodo from "../Routes/WeekTodo";

export default () => (
  <Router>
    <>
      <Navbar />
      <Switch>
        <Route path="/TodoList" component={WeekTodo} />
        <Route path="/Month" exact component={MonthTodo} />
        <Redirect from="*" to="/TodoList" />
      </Switch>
    </>
  </Router>
)