import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function NavigationBar() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Nav
                        className="me-auto m-auto"
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        <Nav.Link style={{ padding: "0px" }}>
                            <Link
                                to="/"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <img
                                    src="https://drive.google.com/uc?export=view&id=1WvyzDdptiv3itoUYwjYkd46sKx95LMyf"
                                    style={{ height: "10vh" }}
                                    alt = "logo"
                                />
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                to="/about"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                About
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                to="/pricing"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                Pricing
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                to="/services"
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                Services
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}
