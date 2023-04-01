import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLeft = styled.div`
    display: flex;
    flex-direction: row;
`;
const NavRight = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
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
                            marginRight:"20px",
                            marginBottom:"10px"
                        }}
                    >
                        <h4 style={{marginBottom:"0px", fontSize:"22px"}}>Essential</h4>
                        <p style={{fontSize:"14px"}}>Exterior Cleaning</p>
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

                <NavRight>
                    <Link
                        to="/about"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                            margin: "10px",
                        }}
                    >
                        About
                    </Link>

                    <Link
                        to="/pricing"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                            margin: "10px",
                        }}
                    >
                        Pricing
                    </Link>

                    <Link
                        to="/services"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                            margin: "10px",
                        }}
                    >
                        Services
                    </Link>
                </NavRight>
            </Container>
        </>
    );
}
