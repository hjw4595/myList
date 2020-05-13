import React , {useState} from "react";
import styled from "styled-components";
import ItemList from "./ListITem";
import UserInput from "./UserInput";

const Container = styled.div`
`;

const MyList = () => {
        const [list , setList] = useState([]);
        const addItem = inputItem =>{
            const addList = list.concat(inputItem)
            setList(addList)
            if(inputItem){
                return setList
            }
        }

    // UpdateItem = event => {
    //     const { target : { value } } = event;
    //     this.setState({
    //         updateItem : value
    //     })
    //  }
    // HandleSubmit = event =>{
    //     event.preventDefault();
    //     if(this.state.updateItem){
    //         this.addItem(this.state.updateItem)
    //     }
    // }
    // addItem = (newItem)=> {
    //     const addItem = this.state.list
    //     const addList = addItem.concat(newItem)
    //     this.setState({
    //        list : addList,
    //     })
    // }
        const DeleteItem = id => {
            setList (list.filter(item => list[id] !== item))
        }
        return( 
        <Container>
            <UserInput addItem={addItem} />
            <ItemList list={list} DeleteItem={DeleteItem}/>
        </Container>
        )
}

export default MyList