import React from "react";
import {BrowserRouter as Router, Route, Redirect,Switch} from "react-router-dom";
import Header from "../Components/Header";
import MonthTodo from "../Routes/MonthTodo";
import WeekTodo from "../Routes/WeekTodo";

export default () => (
    <Router>
        <>
        <Header />
            <Switch>
                <Route path="/" exact component={WeekTodo}/>
                <Route path="/Month" exact component={MonthTodo}/>
                <Redirect from="*" to="/"/>
            </Switch>
        </>
    </Router>
)