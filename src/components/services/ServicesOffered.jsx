import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding:20px 0px;
    background-color: #ededed;
    @media screen and (max-width:600px){
        flex-direction:column;
    }
`;

const ServiceHeader = styled.div`
    font-size: 20px;
    text-align: center;
    font-weight:bold;
    padding-bottom:3px;
    @media screen and (max-width:600px){
        margin:10px 0px 0px 0px;
    }
`;
const ServiceDesc = styled.div`
    font-size: 15px;
    text-align: center;
    padding: 0px 40px;
    @media screen and (max-width:600px){
        margin:0px 0px 10px 0px;
    }
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
            <div>
                <ServiceHeader>GUTTER CLEANING</ServiceHeader>
                <ServiceDesc>
                    Dirty gutters can cause many issues from water damage to
                    clogged perimeter drains that can be expensive to repair.
                </ServiceDesc>
            </div>
        </Wrapper>
    );
}
