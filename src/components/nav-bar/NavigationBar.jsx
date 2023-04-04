import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLeft = styled.div`
    display: flex;
    flex-direction: row;
`;

const NavCenter = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const NavRight = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`;
const CallUsAt = styled.a`
    font-size: 20px;
    text-align: center;
    padding: 10px;
    background-color: #fff;
    margin: 10px 0px;
    color: black;
    text-decoration: none;
    font-weight: bold;
    @media screen and (max-width: 600px) {
        margin: 0px;
    }
`;

export default function NavigationBar() {
    return (
        <>
            <Container>
                <NavLeft>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            marginRight: "20px",
                            marginBottom: "10px",
                        }}
                    >
                        {/* <h4 style={{ marginBottom: "0px", fontSize: "22px" }}>
                            Essential
                        </h4>
                        <p style={{ fontSize: "14px" }}>Exterior Cleaning</p> */}
                    </div>
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <img
                            src="https://drive.google.com/uc?export=view&id=1WvyzDdptiv3itoUYwjYkd46sKx95LMyf"
                            style={{ height: "19vh" }}
                            alt="logo"
                        />
                    </Link>
                </NavLeft>

                <NavCenter>
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
                    {/* <Link
                        to="/about"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                            margin: "10px",
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        About
                    </Link> */}

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
                            // backgroundColor: "#2d5a9b",
                            color: "black",
                            // padding: "6px 10px",
                            // borderRadius: "9px",
                        }}
                    >
                        Pricing
                    </Link>
                </NavCenter>
                <NavRight>
                    <CallUsAt href="tel:2502634283">(250) 263-4283</CallUsAt>
                </NavRight>
            </Container>
        </>
    );
}
