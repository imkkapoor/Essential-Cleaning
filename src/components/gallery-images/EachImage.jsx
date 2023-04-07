import React from "react";
import styled from "styled-components";

const EachImageContainer = styled.div`
    margin: 20px;
`;

const Image = styled.img`
    height: 55vh;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    :hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
    object-fit: cover;
    width: 41.25vh;
`;

export default function EachImage({ item }) {
    return (
        <EachImageContainer>
            <Image src={item} alt="service-banner" />
        </EachImageContainer>
    );
}
