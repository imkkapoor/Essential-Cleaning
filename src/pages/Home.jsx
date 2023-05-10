import React from "react";
import NavigationBar from "../components/nav-bar/NavigationBar";

import ServicesOffered from "../components/services/ServicesOffered";
import Footer from "../components/footer/Footer";
import About from "../components/about/About";
import IfAndTrust from "../components/input-form-and-trust-statement/IfAndTrust";

export default function Home() {
    return (
        <>
            <NavigationBar />
            <About />
            <ServicesOffered />
            <IfAndTrust />
            
            <Footer />
        </>
    );
}
