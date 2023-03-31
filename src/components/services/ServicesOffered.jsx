import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

const ServiceHeader = styled.div`
    font-size: 23px;
    text-align:center;
`;
const ServiceDesc = styled.div`
    font-size: 15px;
    text-align:center;
    margin: 0px 20px
`;

export default function ServicesOffered() {
    return (
        <Wrapper>
            <div>
                <ServiceHeader>PRESSURE WASHING</ServiceHeader>
                <ServiceDesc>
                    Using just water, we can revive your driveway, brighten your
                    siding or get rid of that slippery moss plaguing your
                    walkways.
                </ServiceDesc>
            </div>
            <div>
                <ServiceHeader>WINDOW WASHING</ServiceHeader>
                <ServiceDesc>
                    A Glass surface can deteriorate if left unmaintained. Get
                    streak-free, shiney windows to let all the light into your
                    life.
                </ServiceDesc>
            </div>
        </Wrapper>
    );
}
