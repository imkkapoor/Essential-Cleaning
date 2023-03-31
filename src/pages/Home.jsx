import React from "react";
import NavigationBar from "../components/nav-bar/NavigationBar";
import FrontBanner from "../components/front-banner/FrontBanner";
import styled from "styled-components";
import ChooseUs from "../components/why-us/ChooseUs";
import ServicesOffered from "../components/services/ServicesOffered";
import Reviews from "../components/reviews/Reviews";
import Footer from "../components/footer/Footer";


const CallUsAt = styled.div`
    font-size: 20px;
    text-align:center;
    padding:10px;
`

export default function Home() {
    return (
        <>
            <NavigationBar />
            <FrontBanner/>
            <CallUsAt>Call Us Now At: <a href="tel:2502634283" style = {{color:"black", textDecoration: "none"}}>(250) 263-4283</a></CallUsAt>
            <ServicesOffered/>
            <Reviews/>
            <ChooseUs/>
            <Footer/>
        </>
    );
}
