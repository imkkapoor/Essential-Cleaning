import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    font-weight: 600;
    position: sticky;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const Overlay = styled.div`
    /* background-color: rgba(0, 0, 0, 0.4); */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.6)
    );
`;

const Container = styled.div`
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
    background: url("https://drive.google.com/uc?id=1cj1_TmhFXW5UqNl-Ug4IXONK-mb8IBCP")
        no-repeat;
    background-size: cover;
    height: 100vh;
    background-position: left;
    position: relative;
    font-size: 20px;
`;

const OurHeader = styled.div`
    /* position: absolute; */
    /* left: 5vw;
    right: 5vw; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* top: 20vh; */
    z-index: 100;
`;

const Left = styled.div`
    display: flex;
    justify-content: space-evenly;
    @media screen and (max-width: 600px) {
        margin-top: 10px;
    }
`;

const Right = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const CallUsAt = styled.a`
    font-size: 20px;
    text-align: center;
    padding: 10px;

    margin: 10px 0px;
    color: white;
    text-decoration: none;
    font-weight:  font-weight: 600;;
    @media screen and (max-width: 600px) {
        margin: 0px;
    }
    :hover {
        color: #e6e6e6;
    }
`;

const TextHeader = styled.div`
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    color: white;
    font-family: "Canela Text Trial", sans-serif;
    margin-top: -7vh;
    @media screen and (max-width: 638px) {
        margin-top: 0vh;
        font-size: 28px;
    }
`;

const GetYourQuote = styled.div`
    text-align: center;
    margin-top: 3vh;
`;

const GetYourQuoteButton = styled.a`
    font-size: 20px;
    padding: 8px 13px 8px 13px;
    background-color: #2d5a9b;
    color: white;
    border-radius: 18px;
    font-weight: 500;
    text-decoration: none;
    :hover {
        color: #e6e6e6;
    }
`;

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 14vh;
    left: 5vw;
    right: 5vw;
`;

export default function NavigationBar() {
    return (
        <>
            <Container>
                <Overlay>
                    <NavBar>
                        <Left>
                            <Link
                                to="/"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    margin: "10px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                Home
                            </Link>

                            <Link
                                to="/services"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    margin: "10px",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                Services
                            </Link>

                            <Link
                                to="/pricing"
                                style={{
                                    textDecoration: "none",
                                    margin: "10px",
                                    color: "white",
                                    // color: "#2d5a9b",
                                }}
                            >
                                Pricing
                            </Link>

                            {/* <Link
                                to="/gallery"
                                style={{
                                    textDecoration: "none",
                                    margin: "10px",
                                    color: "white",
                                    // color: "#2d5a9b",
                                }}
                            >
                                Gallery
                            </Link> */}
                        </Left>
                        <Right>
                            <CallUsAt href="tel:2502634283">
                                (250) 263-4283
                            </CallUsAt>
                        </Right>
                    </NavBar>
                </Overlay>
            </Container>
            <MainWrapper>
                <OurHeader>
                    <img
                        src="https://drive.google.com/uc?id=1vtGzPwayrHC8YzI3L7cIA_xztFaB4Bq9"
                        alt="ad banner"
                        style={{ height: "46vh" }}
                    />
                </OurHeader>
                <TextHeader>Refresh your home's first impression</TextHeader>
                <GetYourQuote>
                    <GetYourQuoteButton href="/pricing">
                        Get Your Quote Now
                    </GetYourQuoteButton>
                </GetYourQuote>
            </MainWrapper>
        </>
    );
}
