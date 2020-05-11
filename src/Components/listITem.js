import React from "react";
import styled from "styled-components";

const Container = styled.div`
`;

class ListItem extends React.Component{
    render(){
        const { list , DeleteItem} = this.props
        return( 
        <Container>
                {list && list.length > 0 && (
                <ul>{
                    list.map((item, index) => 
                        <li key={index}>
                            {item}
                            <button onClick={() => window.confirm("지우기 확인") && DeleteItem(index)}>delete</button>
                        </li>)
                }</ul>
            )}
        </Container>
        )
    }
}

export default ListItem