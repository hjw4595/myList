import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Achievement from "../Routes/Achievement";
import WeekTodo from "../Routes/WeekTodo";

export default () => (
  <Router>
    <>
      <Navbar />
      <Switch>
        <Route path="/TodoList" component={WeekTodo} />
        <Route path="/Achievement" exact component={Achievement} />
        <Redirect from="*" to="/TodoList" />
      </Switch>
    </>
  </Router>
)