import React from "react";
import NavigationBar from "../components/nav-bar/NavigationBar";
import Footer from "../components/footer/Footer";
import ChooseUs from "../components/why-us/ChooseUs";

export default function Pricing() {
    return (
        <>
            <NavigationBar />
            <form
                action="https://formsubmit.co/office@essentialexteriorcleaning.com"
                method="POST"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "30px 30vw",
                    fontSize: "14px",
                }}
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
            </form>

            <ChooseUs />
            <Footer />
        </>
    );
}
