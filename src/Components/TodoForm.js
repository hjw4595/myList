import React, { useState } from "react";
import Input from "./Input";
import Form from "./Form";

const TodoForm = ({ addTodoItem }) => {
    const [inputValue, setInputValue] = useState("");
    const [newItemId, setnewItemId] = useState(0);
    // 투두아이템 추가하고, inputValue초기화
    function onSubmitHandler(event) {
        event.preventDefault();
        const newTodoItem = {
            id : newItemId,
            value: inputValue
        }
        setnewItemId(newItemId + 1)
        console.log(newItemId)
        addTodoItem(newTodoItem);
        setInputValue("")
    }

    const onChange = event => {
        const { target: { value } } = event;
        setInputValue(value)
    }

    return (
        <Form onSubmit={onSubmitHandler}>
            <Input value={inputValue} placeholder="Todo List 입력" onChange={onChange} />
        </Form>
    )
}


export default TodoForm