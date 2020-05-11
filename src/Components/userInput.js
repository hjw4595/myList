import React from "react";
import styled from "styled-components";

const Container = styled.div`
`;

class MyList extends React.Component{
    render(){
        const { userInputItem, HandleSubmit, UpdateItem } = this.props
        return( 
        <Container>
            <form onSubmit={HandleSubmit}>
                <input placeholder="확인" vlaue={userInputItem} onChange={UpdateItem} />
            </form>
        </Container>
        )
    }
}

export default MyList