import React, { useState } from "react";
import Input from "./Input/index";
import Form from "./Form/index";

const TodoForm = ({ addTodoItem , location }) => {
    const [inputValue, setInputValue] = useState("");
    const [newItemId, setnewItemId] = useState(0);
    function onSubmitHandler(event) {
        event.preventDefault();
        const newTodoItem = {
            id : newItemId,
            value: inputValue,
            check: false,
            itemUpdated : false,
            date : location.pathname
        }

        setnewItemId(newItemId + 1)
        addTodoItem(newTodoItem);
        setInputValue("")
    }

    const onChange = event => {
        const { target: { value } } = event;
        setInputValue(value)
    }

    return (
        <>
        <Form onSubmit={onSubmitHandler}>
            <p>{location.pathname} Todo입니다.</p>
            <Input value={inputValue}  onChange={onChange} />
        </Form>
        </>
    )
}


export default TodoForm