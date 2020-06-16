import React from "react";
import {Link, withRouter} from "react-router-dom"
import styled from "styled-components";

const List = styled.ul`
    width: 100%;
`
const Item = styled.li`
    border-bottom:3px solid ${props => props.selected ? "green" : "transparent"};
    color: ${props => props.selected ? "green" : "white"};
    transition: border-bottom, color .5s ease-in-out;
`;
const Header = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0; width: 5%;
    height: 100%;
    display: flex;
    background-color: rgba(20, 20, 20, 0.8);
`;

const Hlink = styled(Link)`
    text-decoration: none;
    color : white;
`;
export default withRouter(({location : {pathname} }) => (
    <Header> 
        <List>
            <Item selected ={pathname ==="/"}> 
                <Hlink to="/">Week</Hlink>
            </Item>
            <Item selected ={pathname ==="/Month"}>
                <Hlink to="/Month">Month</Hlink>
            </Item>
        </List>
    </Header>
    )
)