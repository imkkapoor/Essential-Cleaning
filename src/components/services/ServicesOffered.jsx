import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
    padding: 20px;
    background-color: #ededed;
`;
const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    padding: 0px 0px;
    flex-wrap: wrap;
    background-color: #ededed;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const ServiceHeader = styled.div`
    position: absolute;
    color: black;
    font-size: 20px;
    width: 41.25vh;
    text-align: center;
    font-weight: bold;
    padding-bottom: 3px;
    color: white;
    background-color: #6d6d6daf;
    @media screen and (max-width: 600px) {
        margin: 10px 0px 0px 0px;
    }
`;

const EachContainer = styled.div`
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 20px;
    @media screen and (max-width: 716px) {
        flex-direction: column;
        margin: 20px 0px;
    }
`;

const Image = styled.img`
    height: 55vh;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    :hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
`;

export default function ServicesOffered() {
    return (
        <Container>
            <Wrapper>
                <Link to="/services">
                    <EachContainer>
                        <ServiceHeader>PRESSURE WASHING</ServiceHeader>
                        <Image
                            src="https://drive.google.com/uc?export=view&id=18AOXGEGDJDmqzrz9tEJ9lSlkN1LdrHHT"
                            alt="service-banner"
                        />
                    </EachContainer>
                </Link>
                <Link to="/services">
                    <EachContainer>
                        <ServiceHeader>WINDOW WASHING</ServiceHeader>
                        <Image
                            src="https://drive.google.com/uc?export=view&id=1xL7NUYvKwdz87rbpx6G7FAvCLOefOUKI"
                            alt="service-banner"
                        />
                    </EachContainer>
                </Link>

                <Link to="/services">
                    <EachContainer>
                        <ServiceHeader>GUTTER CLEANING</ServiceHeader>
                        <Image
                            src="https://drive.google.com/uc?export=view&id=1U4hwtaG3JWp0sv91uE-PxzEVfdd6nvec"
                            alt="service-banner"
                        />
                    </EachContainer>
                </Link>
            </Wrapper>
            <Wrapper>
                <Link to="/services">
                    <EachContainer>
                        <ServiceHeader>MOSS REMOVAL</ServiceHeader>
                        <Image
                            src="https://drive.google.com/uc?export=view&id=18ektRGag5xMLzeiR_M8NPv3z3e_4rH7v"
                            alt="service-banner"
                        />
                    </EachContainer>
                </Link>

                <Link to="/services">
                    <EachContainer>
                        <ServiceHeader>EXTERIOR WASHING</ServiceHeader>
                        <Image
                            src="https://drive.google.com/uc?export=view&id=1ewIurVTWb1LskqqQrXV_nVBQw_H2fQnY"
                            alt="service-banner"
                        />
                    </EachContainer>
                </Link>
            </Wrapper>
        </Container>
    );
}
