import React from "react";
import styled from "styled-components";

const TodoList = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`
const Input = props => {
    return (
        <TodoList {...props}/>
    )
}

export default Input