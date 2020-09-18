import React from "react";
import { Link, withRouter } from "react-router-dom"
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  list-style:none;
`
const Item = styled.li`
    width: 80px;
    height: 50px;
    text-align: center;
    background-color:${props => props.selected ? "green" : "transparent"};
    color: ${props => props.selected ? "green" : "white"};
    transition: border-bottom, color .5s ease-in-out;
`;
const Header = styled.header`
    font-size: 18px;
    color: white;
    position: fixed;
    top: 0;
    left: 0; width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 10;
`;

const Hlink = styled(Link)`
  height: 50px;
  display: flex ;
  align-items: center;
  justify-content: center;
  color : white;
  text-decoration: none;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item selected={pathname.split( '/' )[1] === "TodoList"}>
        <Hlink to="/TodoList">Week</Hlink>
      </Item>
      <Item selected={pathname.split( '/' )[1] === "/Month"}>
        <Hlink to="/Month">Month</Hlink>
      </Item>
    </List>
  </Header>
)
)