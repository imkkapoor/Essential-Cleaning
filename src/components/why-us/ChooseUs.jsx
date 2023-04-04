import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
    padding-right:10px;
    padding-left:10px;
    background-color: #ededed;
`;
const Head = styled.div`
    text-align: center;
    padding: 10px;
    font-size:22px;
    font-weight:bold;
    padding-top:15px;
`;
const Container = styled.div`
    display: flex;
    flex-direction: row;
    
    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width:600px){
    flex-direction: column;
        
    }
`;
const First = styled.div`
    margin:3px;
`;
const Second = styled.div`
    /* flex: 1 1 auto; */
    margin:3px;
`;
const Third = styled.div`
    /* flex: 1 1 auto; */
    margin:3px;
`;
const Fourth = styled.div`
    /* flex: 1 1 auto; */
    margin:3px;
`;
export default function ChooseUs() {
    return (
        <Wrapper>
            <Head>WHY US?</Head>
            <Container>
                <First>Reliable & Honest</First>
                <Second>Environment Friendly Cleaning</Second>
                <Third>100% Satisfaction Gurannted</Third>
                <Fourth>Best Prices on the Market</Fourth>
            </Container>
        </Wrapper>
    );
}
