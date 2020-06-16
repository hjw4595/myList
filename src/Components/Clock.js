import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin: 0 30%; 
`

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        setInterval( () => {
          this.setState({
            date : new Date()
          })
        },1000)
      }

    render() {
        return (
            <Container>
                <h1>
                    {this.state.date.toLocaleString()}
                </h1>
            </Container>
        )
    }
}
export default Clock;