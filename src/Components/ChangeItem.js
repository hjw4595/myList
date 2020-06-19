import React, { useState } from 'react';
import styled from "styled-components";

const ChangeButton = styled.button`
    border-color: transparent;
    border: none;
    background-color: transparent;
    &:hover {
        background-color: gray;
    }
`

const CForm = styled.form`
    display : inline;
`
const CInput = styled.input`
    border: 0;
    outline : 0;
`
const CurrentChange = ({ todoItem, currentChange, changeItem }) => {
  function changeCilck(id) {
    return function (event) {
      return currentChange(id)
    }
  }

  const [changeInput, setChangeInput] = useState(todoItem.value);

  function onSubmitHandler(event) {
    event.preventDefault();
    const updateTodoItem = {
      id: todoItem.id,
      value: changeInput,
      change: false
    }
    changeItem(updateTodoItem)
    setChangeInput(changeInput)
  }

  const onChange = event => {
    const { target: { value } } = event;
    setChangeInput(value)
  }
  return (
    <>
      {todoItem.change ?
        <CForm onSubmit={onSubmitHandler}>
          <CInput onChange={onChange} value={changeInput} />
        </CForm> :
        <ChangeButton onClick={changeCilck(todoItem.id)}> {changeInput} </ChangeButton>}
    </>
  )
}

export default CurrentChange;