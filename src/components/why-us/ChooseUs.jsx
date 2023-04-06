import React from "react";
import styled from "styled-components";
import VerifiedIcon from "@mui/icons-material/Verified";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
    padding-right: 10px;
    padding-left: 10px;
    background-color: #ededed;
    width: 100%;
`;
const Head = styled.div`
    text-align: center;
    padding: 10px;
    font-size: 22px;
    font-weight: bold;
    padding-top: 15px;
`;
const Container = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-evenly;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`;
const First = styled.div`
    display: flex;
    align-items: center;
    margin: 3px;
`;
const Second = styled.div`
    display: flex;
    align-items: center;

    margin: 3px;
`;
const Third = styled.div`
    display: flex;
    align-items: center;

    margin: 3px;
`;
const Fourth = styled.div`
    display: flex;
    align-items: center;

    margin: 3px;
`;
export default function ChooseUs() {
    return (
        <Wrapper>
            <Head>WHY US?</Head>
            <Container>
                <First>
                    {" "}
                    <VerifiedIcon
                        style={{ color: "#3c70b9", margin: "0px 5px" }}
                    />
                    Reliable & Honest
                </First>
                <Second>
                    <VerifiedIcon
                        style={{ color: "#3c70b9", margin: "0px 5px" }}
                    />
                    Environment Friendly Cleaning
                </Second>
                <Third>
                    <VerifiedIcon
                        style={{ color: "#3c70b9", margin: "0px 5px" }}
                    />
                    100% Satisfaction Gurannted
                </Third>
                <Fourth>
                    <VerifiedIcon
                        style={{ color: "#3c70b9", margin: "0px 5px" }}
                    />
                    Best Prices on the Market
                </Fourth>
            </Container>
        </Wrapper>
    );
}
