import React from "react";
import styled from "styled-components";

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
    addItem = (newItem)=> {
        const addItem = this.state.list
        addItem.push(newItem)
        console.log(addItem)
        this.setState({
           list : addItem,
        })
    }
    DeleteItem = id => {
        const list = this.state.list
        const updateList = list.filter(item => list[id] !== item)

        this.setState({
            list : updateList
        })
    
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
    render(){
        return( 
        <Container>
            <form onSubmit={this.HandleSubmit}>
                <input placeholder="확인" vlaue={this.state.updateItem} onChange={this.UpdateItem} />
            </form>
            {this.state.list && this.state.list.length > 0 && (
                <ul>{
                    this.state.list.map((item, index) => 
                        <li key={index}>
                            {item}
                            <button onClick={() => this.DeleteItem(index)}>delete</button>
                        </li>)
                }</ul>
            )}
        </Container>
        )
    }
}

export default MyList