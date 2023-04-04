import React from "react";
import NavigationBar from "../components/nav-bar/NavigationBar";
import Footer from "../components/footer/Footer";
import ChooseUs from "../components/why-us/ChooseUs";
import styled from "styled-components";

const InputForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 10px 30vw 30px 30vw;
    font-size: 14px;
    @media screen and (max-width: 600px) {
        margin: 10px 10vw 30px 10vw;
    }
`;

const Header = styled.div`
    text-align:center;
    color:"black";
    font-size: 22px;
    font-weight:600;

`;

export default function Pricing() {
    return (
        <>
            <NavigationBar />
            <Header>Get your free quote now!</Header>
            <InputForm
                action="https://formsubmit.co/office@essentialexteriorcleaning.com"
                method="POST"
                style={{}}
            >
                <input
                    type="text"
                    name="name"
                    required
                    placeholder="Name"
                    style={{
                        margin: "4px 0px",
                        padding: "7px",
                        borderRadius: "2px",
                        border: "1px solid gray",
                    }}
                />
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    style={{
                        margin: "4px 0px",
                        padding: "7px",
                        borderRadius: "2px",
                        border: "1px solid gray",
                    }}
                />
                <input
                    name="phone number"
                    required
                    placeholder="Cell Number"
                    style={{
                        margin: "4px 0px",
                        padding: "7px",
                        borderRadius: "2px",
                        border: "1px solid gray",
                    }}
                />
                <input
                    name="address"
                    placeholder="Address"
                    style={{
                        margin: "4px 0px 4px 0px",
                        padding: "7px",
                        borderRadius: "2px",
                        border: "1px solid gray",
                    }}
                />
                <input
                    name="text"
                    placeholder="Your Message"
                    style={{
                        margin: "4px 0px",
                        padding: "7px",
                        marginBottom: "20px",
                        borderRadius: "2px",
                        border: "1px solid gray",
                    }}
                />
                <button
                    type="submit"
                    style={{
                        padding: "10px",
                        textAlign: "center",
                        width: "60%",
                        margin: "auto",
                        borderRadius: "2px",
                        border: "none",
                        fontWeight: "bold",
                    }}
                >
                    SUBMIT
                </button>
            </InputForm>

            <ChooseUs />
            <Footer />
        </>
    );
}
