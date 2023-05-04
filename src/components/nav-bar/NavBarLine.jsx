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
    /* color: white; */
    top: 0;
    font-weight: 600;
    transition: background-color 0.5s ease;
    z-index: 200;
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
    position: relative;
    /* background: url("https://drive.google.com/uc?id=1cj1_TmhFXW5UqNl-Ug4IXONK-mb8IBCP")
        no-repeat; */
    background: url("https://drive.google.com/uc?id=1jXWsvWaFtoZodEPBlvSrkdqmE-JcD5GZ")
        no-repeat;
    background-size: cover;
    height: 55vh;
    background-position: top;
    position: relative;
    font-size: 20px;
`;

const NavLeft = styled.div`
    display: flex;
    justify-content: space-evenly;
    @media screen and (max-width: 600px) {
        margin-top: 10px;
    }
`;

const NavRight = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const CallUsAt = styled.a`
    font-size: 20px;
    text-align: center;
    padding: 10px;

    margin: 10px 0px;
    /* color: white; */
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
    position: absolute;
    text-align: center;
    top: 26vh;
    left: 10vw;
    right: 10vw;
    font-size: 50px;
    font-weight: bold;
    color: white;
    font-family: "Canela Text Trial", sans-serif;
`;

export default function NavBarLine(props) {
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
                        <NavLeft>
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
                                }}
                            >
                                Gallery
                            </Link>
                        </NavLeft>
                        <NavRight>
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
                        </NavRight>
                    </NavBar>
                </Overlay>
                <TextHeader>{props.header}</TextHeader>
            </Container>

            {/* <GetYourQuote> Get Your Quote Now</GetYourQuote> */}
        </>
    );
}
