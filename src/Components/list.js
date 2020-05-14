import React , { useContext } from "react";
import styled from "styled-components";
import ItemList from "./ListITem";
import UserInput from "./UserInput";
import { todoListContext } from "./context";

const Container = styled.div`
`;

const MyList = () => {
        const {list , addTodoItem, deleteTodoItem} = useContext(todoListContext);
        return( 
        <Container>
            <UserInput addItem={addTodoItem} />
            <ItemList list={list} deleteItem={deleteTodoItem}/>
        </Container>
        )
}

export default MyList