import React,{useState} from "react";
import styled from "styled-components";

const Container = styled.div`
`;

const TodoInput = ({addItem}) => {
    const [inputItem, setInputItem] = useState("");
    const onChange = event => {
        const {target : {value}} = event;
            setInputItem(value);
        }
    const onSubmit = event => {
        event.preventDefault();
        addItem(inputItem);
            setInputItem("")
    }
        return(
        <Container>
            <form onSubmit={onSubmit}>
                <input placeholder="확인" value={inputItem} onChange={onChange} />
            </form>
        </Container>
        )
}
    

export default TodoInput