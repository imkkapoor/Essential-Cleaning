import React from "react";
import NavigationBar from "../components/nav-bar/NavigationBar";
import styled from "styled-components";
import Footer from "../components/footer/Footer";
import ChooseUs from "../components/why-us/ChooseUs";

const ServiceHeader = styled.div`
height: 12vh;
display:flex;
align-items:center;
color:white;
background-color:#2d5a9b;
justify-content: center;
font-size: 40px;

`;


export default function Services() {
    return (
        <>
            <NavigationBar />
            <ServiceHeader>
                Services
            </ServiceHeader>
            <ChooseUs/>
            <Footer/>
        </>
    );
}
