import React from "react";
import styled from "styled-components";
import ItemList from "./listITem";
import UserInput from "./userInput";

const Container = styled.div`
`;

class MyList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            list : [],
            item : ""
        }
    }
    UpdateItem = event => {
        const { target : { value } } = event;
        this.setState({
            updateItem : value
        })
     }
    HandleSubmit = event =>{
        event.preventDefault();
        if(this.state.updateItem){
            this.addItem(this.state.updateItem)
        }
    }
    addItem = (newItem)=> {
        const addItem = this.state.list
        const addList = addItem.concat(newItem)
        this.setState({
           list : addList,
        })
    }
    DeleteItem = id => {
        const list = this.state.list
        const updateList = list.filter(item => list[id] !== item)
    
        this.setState({
            list : updateList
        }) 
    }
    render(){
        return( 
        <Container>
            <UserInput userInputItem={this.state.item} UpdateItem={this.UpdateItem} HandleSubmit={this.HandleSubmit} />
            <ItemList list={this.state.list} DeleteItem={this.DeleteItem}/>
        </Container>
        )
    }
}

export default MyList