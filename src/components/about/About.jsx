import React from "react";
import styled from "styled-components";
const Text = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 100px;
    text-align:center;
    padding-top:10px;
    @media screen and (max-width: 600px) {
        padding: 10px 15px 30px 15px;
    }
`;
export default function About() {
    return (
        <>
        <h3 style={{textAlign:"center", paddingTop:"30px"}}>About Us</h3>
        <Text>
            Welcome to Essential Exterior Cleaning Victoria, your go-to company
            for all your exterior cleaning needs. We are a locally owned and
            operated business dedicated to providing top-quality services to
            Greater Victoria and surrounding areas.
            <br></br>
            <br></br>
            Our team specializes in pressure washing, exterior window cleaning,
            gutter cleaning, and a range of other residential and commercial
            exterior cleaning services. With years of experience and a
            commitment to excellence, we strive to exceed your expectations and
            leave your property looking its best.
            <br></br>
            <br></br>
            Contact us today to learn more about our services and how we can
            help you maintain a clean and beautiful exterior for your home or
            business.
        </Text>
        </>
    );
}
