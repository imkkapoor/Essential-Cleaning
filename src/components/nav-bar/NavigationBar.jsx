import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./ColorChange.css";

const NavBar = styled.div`
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    font-weight: 600;
    top: 0;
    transition: background-color 0.5s ease;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
    z-index: 200;
    :hover {
        color: #e6e6e6;
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
    /* background: url("https://drive.google.com/uc?id=1cj1_TmhFXW5UqNl-Ug4IXONK-mb8IBCP")
        no-repeat; */
    background: url("https://drive.google.com/uc?id=1gD3leWYIcq4wmledvbMiYwJ0zhZlMtJy")
        no-repeat;
    background-size: cover;
    height: 103vh;
    background-position: left;
    position: relative;
    font-size: 20px;
`;

const OurHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 100;
`;

const Left = styled.div`
    display: flex;
    justify-content: space-evenly;
    @media screen and (max-width: 600px) {
        margin-top: 10px;
    }
    :hover {
        color: #e6e6e6;
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

    text-decoration: none;
    font-weight: 600;
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
    font-weight: 600;
    color: white;

    margin-top: -5vh;
    @media screen and (max-width: 638px) {
        margin-top: 0vh;
        font-size: 28px;
    }
`;

const GetYourQuote = styled.div`
    text-align: center;
    margin-top: 4.6vh;
    display: flex;
    justify-content: center;
`;

const GetYourQuoteButton = styled.div`
    font-size: 20px;
    padding: 10px 16px 10px 16px;
    background-color: #2d5a9b;
    color: white;
    border-radius: 18px;
    font-weight: 500;
    text-decoration: none;
    outline: none;
    border: none;
    width: auto;
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
    const [isTransparent, setIsTransparent] = useState(true);

    useEffect(() => {
        function handleScroll() {
            const scrolled = window.scrollY;
            if (scrolled > 0 && isTransparent) {
                setIsTransparent(false);
            } else if (scrolled === 0 && !isTransparent) {
                setIsTransparent(true);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isTransparent]);

    return (
        <>
            <Container>
                <Overlay>
                    <NavBar className={isTransparent ? "transparent" : "solid"}>
                        <Left>
                            <Link
                                to="/"
                                className={
                                    isTransparent
                                        ? "transparent-text"
                                        : "solid-text"
                                }
                                style={{
                                    textDecoration: "none",
                                    margin: "10px",
                                    display: "flex",
                                    alignItems: "center",
                                    transition: "background-color 0.5s ease",
                                }}
                            >
                                Home
                            </Link>

                            <Link
                                to="/services"
                                className={
                                    isTransparent
                                        ? "transparent-text"
                                        : "solid-text"
                                }
                                style={{
                                    textDecoration: "none",
                                    margin: "10px",
                                    display: "flex",
                                    alignItems: "center",
                                    transition: "background-color 0.5s ease",
                                }}
                            >
                                Services
                            </Link>

                            <Link
                                to="/pricing"
                                className={
                                    isTransparent
                                        ? "transparent-text"
                                        : "solid-text"
                                }
                                style={{
                                    textDecoration: "none",
                                    margin: "10px",
                                    transition: "background-color 0.5s ease",
                                }}
                            >
                                Pricing
                            </Link>

                            <Link
                                to="/gallery"
                                className={
                                    isTransparent
                                        ? "transparent-text"
                                        : "solid-text"
                                }
                                style={{
                                    textDecoration: "none",
                                    margin: "10px",
                                    transition: "background-color 0.5s ease",
                                }}
                            >
                                Gallery
                            </Link>
                        </Left>
                        <Right>
                            <CallUsAt
                                href="tel:2502634283"
                                className={
                                    isTransparent
                                        ? "transparent-text"
                                        : "solid-text"
                                }
                            >
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
                    <GetYourQuoteButton>
                        <Link
                            to="/pricing"
                            style={{
                                textDecoration: "none",
                                color: "white",
                            }}
                        >
                            GET YOUR FREE ESTIMATE
                        </Link>
                    </GetYourQuoteButton>
                </GetYourQuote>
            </MainWrapper>
        </>
    );
}
