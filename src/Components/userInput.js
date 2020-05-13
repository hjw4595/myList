import React,{useState} from "react";
import styled from "styled-components";

const Container = styled.div`
`;

const TodoInput = ({addItem}) => {
    const [item, setItem] = useState(" ");
    const onChange = event => {
        const {target : {value}} = event;
            setItem(value);
            if(item){
                return {item, onChange}
            }
        }
    const onSubmit = event => {
        event.preventDefault();
        addItem(item);
        if(item){
            return setItem("")
        }
    }
        return(
        <Container>
            <form onSubmit={onSubmit}>
                <input placeholder="확인" value={item} onChange={onChange} />
            </form>
        </Container>
        )
}
    

export default TodoInput