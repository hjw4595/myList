import React from "react";
import styled from "styled-components";

const ListButton = styled.button`
    background-color: transparent !important;
    background-image: none !important;
    border-color: transparent;
    border: none;
    color: #FFFFFF;
  `;
const Button = props => {
  return (
    <ListButton {...props}/>
  )
}

export default Button