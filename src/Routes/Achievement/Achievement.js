import React from 'react';
import styled from "styled-components";
import { TotalChart , WeeklyChart } from "../../Components/highChart/index"

const Container = styled.div`
    display: flex; 
    height: 100%;
    margin-top : 50px;
    justify-content: center;
    align-items: center;
`;

const ItemContainer = styled.div`
`

function Achievement(){
    return (
        <Container>
            <ItemContainer>
                <TotalChart />
            </ItemContainer>
            <ItemContainer>
                <WeeklyChart />
            </ItemContainer>
        </Container>
    )
}

export default Achievement