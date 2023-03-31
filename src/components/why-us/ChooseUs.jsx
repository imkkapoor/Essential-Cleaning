import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    margin-right:10px;
    margin-left:10px;
`;
const Head = styled.div`
    text-align: center;
    margin: 10px;
`;
const Container = styled.div`
    display: flex;
    flex-direction: row;
    
    align-items: center;
    justify-content: space-evenly;
`;
const First = styled.div`
    /* flex: 1 1 auto; */
`;
const Second = styled.div`
    /* flex: 1 1 auto; */
`;
const Third = styled.div`
    /* flex: 1 1 auto; */
`;
const Fourth = styled.div`
    /* flex: 1 1 auto; */
`;
export default function ChooseUs() {
    return (
        <Wrapper>
            <Head>Why choose us</Head>
            <Container>
                <First>Reliable & Honest</First>
                <Second>Environment Friendly Cleaning</Second>
                <Third>100% Satisfaction Gurannted</Third>
                <Fourth>Best Prices in the Market</Fourth>
            </Container>
        </Wrapper>
    );
}
