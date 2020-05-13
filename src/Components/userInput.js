import React,{useState} from "react";
import styled from "styled-components";

const Container = styled.div`
`;

const TodoInput = ({addItem}) => {
    const [item, setItem] = useState(" ");
    const onChange = event => {
        const {target : {value}} = event;
            setItem(value);
        }
    const onSubmit = event => {
        event.preventDefault();
        if(item.length > 0){
            addItem(item);
            setItem("");
        }
    }
        return(
        <Container>
            <form onSubmit={onSubmit}>
                <input placeholder="todo List" value={item} onChange={onChange} />
            </form>
        </Container>
        )
}
    

export default TodoInput