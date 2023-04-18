import React from "react";
import NavigationBar from "../components/nav-bar/NavigationBar";
// import ChooseUs from "../components/why-us/ChooseUs";
import ServicesOffered from "../components/services/ServicesOffered";
import Footer from "../components/footer/Footer";
import About from "../components/about/About";
import IfAndTrust from "../components/input-form-and-trust-statement/IfAndTrust";

export default function Home() {
    // const [show, setShow] = useState(false)
    // const observer = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //         console.log(entry);
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add("show");
    //         } else {
    //             entry.target.classList.remove("show");
    //         }
    //     });
    // });

    // const hiddenElements = document.querySelectorAll(".hidden");
    // hiddenElements.forEach((el) => observer.observe(el));
    return (
        <>
            <NavigationBar />
            <About />
            <ServicesOffered />
            <IfAndTrust />
            {/* <ChooseUs /> */}
            <Footer />
        </>
    );
}
