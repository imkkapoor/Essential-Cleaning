import React from "react";
import NavigationBar from "../components/nav-bar/NavigationBar";
import FrontBanner from "../components/front-banner/FrontBanner";

import ChooseUs from "../components/why-us/ChooseUs";
import ServicesOffered from "../components/services/ServicesOffered";
import Reviews from "../components/reviews/Reviews";
import Footer from "../components/footer/Footer";
import About from "../components/about/About";

export default function Home() {
    return (
        <>
            <NavigationBar />
            <FrontBanner />
            <About />
            <ServicesOffered />
            <Reviews />
            <ChooseUs />
            <Footer />
        </>
    );
}
