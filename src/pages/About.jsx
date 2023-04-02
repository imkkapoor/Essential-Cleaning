import React from "react";
import NavigationBar from "../components/nav-bar/NavigationBar";
import Footer from "../components/footer/Footer";
import ChooseUs from "../components/why-us/ChooseUs";
import styled from "styled-components";

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin:30px;
    object-fit:cover;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 50px;
    margin:30px;
    padding-right:100px;
    
`;
const Container = styled.div`
    display: flex;
`;
const Image = styled.img`
    height: 70vh;

`

export default function About() {
    return (
        <div>
            <NavigationBar />
            <Container>
                <Left>
                    <Image src= "https://drive.google.com/uc?export=view&id=19fXldYOKWyq85EiWktmBdnLii1Pd76re" alt = "about banner"/>
                </Left>
                <Right>
                    <div>
                    Welcome to Essential Exterior Cleaning Victoria, your go-to
                    company for all your exterior cleaning needs. We are a
                    locally owned and operated business dedicated to providing
                    top-quality services to Greater Victoria.
                    <br></br>
                    <br></br>
                    Our team specializes in pressure washing, exterior window
                    cleaning, gutter cleaning, and a range of other residential
                    and commercial exterior cleaning services. With years of
                    experience and a commitment to excellence, we strive to
                    exceed your expectations and leave your property looking its
                    best.
                    <br></br>
                    <br></br>
                    Contact us today to learn more about our services and how we
                    can help you maintain a clean and beautiful exterior for
                    your home or business.
                    </div>
                </Right>
            </Container>
            <ChooseUs />
            <Footer />
        </div>
    );
}
