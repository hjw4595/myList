import React from "react";
import styled from "styled-components";

const DeleteButton = styled.button`
  `;
const Button = props => {
  return (
    <DeleteButton {...props}/>
  )
}

export default Button