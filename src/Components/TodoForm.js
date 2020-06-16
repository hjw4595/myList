import React, { useState } from "react";
import Input from "./Input/index";
import Form from "./Form/index";

const TodoForm = ({ addTodoItem }) => {
    const [inputValue, setInputValue] = useState("");
    const [newItemId, setnewItemId] = useState(0);
    // 투두아이템 추가하고, inputValue초기화
    function onSubmitHandler(event) {
        event.preventDefault();
        const newTodoItem = {
            id : newItemId,
            value: inputValue,
            check: false,
            change : false
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
        <Form onSubmit={onSubmitHandler}>
            <Input value={inputValue} placeholder="Todo List 입력" onChange={onChange} />
        </Form>
    )
}


export default TodoForm