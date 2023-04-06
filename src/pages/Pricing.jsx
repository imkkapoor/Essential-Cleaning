import React from "react";
import Footer from "../components/footer/Footer";
import ChooseUs from "../components/why-us/ChooseUs";
import styled from "styled-components";
import NavBarLine from "../components/nav-bar/NavBarLine";

const Wrapper = styled.div`
    display: flex;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    @media screen and (max-width: 600px) {
        margin-top:20px;
        margin-bottom:0px;
    }

`;

const LeftIn = styled.div`
    margin: 10px 12vw 30px 12vw;
    @media screen and (max-width: 600px) {
        
        margin-bottom:0px;
    }
`;
const Right = styled.div`
    flex: 1;
`;

const InputForm = styled.form`
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    margin: 20px 12vw 30px 0vw;
    font-size: 14px;
    @media screen and (max-width: 600px) {
        margin: 10px 10vw 30px 10vw;
    }
`;

const Header = styled.div`
    text-align: center;
    color: "black";
    font-size: 28px;
    font-weight: 600;
    margin-top: 20px;
    margin-right: 5vw;
    @media screen and (max-width: 600px) {
        display:none;
    }
`;

const CheckList = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-between;
`;

export default function Pricing() {
    return (
        <>
            <NavBarLine header="Pricing" />
            <Header>Get your free quote now!</Header>
            <Wrapper>
                <Left>
                    <LeftIn>
                        <h4>Get In Touch With Us Today!</h4>
                        Essential Exterior Cleaning offers a wide variety of
                        cleaning services for all parts of your home or
                        business. Your property is a very valuable asset, so why
                        let the harmful environment get the best of it?
                        <br></br>
                        Contact us now for a free, no obligation quote, and let
                        us transform your property into a thing of beauty!
                        <br></br>
                        <br></br>
                        <h4>Areas We Work:</h4>
                        Victoria and surrounding areas!
                    </LeftIn>
                </Left>
                <Right>
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
                                margin: "4px 0px 4px 0px",
                                padding: "7px",
                                color: "black",
                                borderRadius: "2px",
                                border: "1px solid gray",
                            }}
                        />
                        <p style={{ padding: "7px", margin: "0" }}>
                            Which services are you intrested in?
                        </p>
                        <CheckList>
                            <label
                                for="moss-removal"
                                style={{
                                    margin: "0px 0px 0px 0px",
                                    padding: "4px 7px 4px 7px",
                                    color: "black",
                                }}
                            >
                                Moss Removal
                            </label>
                            <input
                                type="checkbox"
                                name="moss-removal"
                                value="checkboxValue"
                            />
                        </CheckList>
                        <CheckList>
                            <label
                                for="pressure-washing"
                                style={{
                                    margin: "0px 0px 0px 0px",
                                    padding: "4px 7px 4px 7px",
                                    color: "black",
                                }}
                            >
                                Pressure Washing
                            </label>
                            <input
                                type="checkbox"
                                name="pressure-washing"
                                value="checkboxValue"
                            />
                        </CheckList>
                        <CheckList>
                            <label
                                for="gutter-cleaning"
                                style={{
                                    margin: "0px 0px 0px 0px",
                                    padding: "4px 7px 4px 7px",
                                    color: "black",
                                }}
                            >
                                Gutter Cleaning
                            </label>
                            <input
                                type="checkbox"
                                name="gutter-cleaning"
                                value="checkboxValue"
                            />
                        </CheckList>
                        <CheckList>
                            <label
                                for="window-washing"
                                style={{
                                    margin: "0px 0px 0px 0px",
                                    padding: "4px 7px 4px 7px",
                                    color: "black",
                                }}
                            >
                                Window Washing
                            </label>
                            <input
                                type="checkbox"
                                name="window-washing"
                                value="checkboxValue"
                            />
                        </CheckList>
                        <select
                            name="how did you hear about us"
                            style={{
                                margin: "4px 0px",
                                padding: "7px",
                                marginBottom: "20px",
                                borderRadius: "2px",
                                border: "1px solid gray",
                            }}
                        >
                            <option value="" selected disabled hidden>
                                How did you hear about us?
                            </option>
                            <option value="google-earch">Google Search</option>
                            <option value="facebook">Facebook</option>
                            <option value="instagram">Instagram</option>
                            <option value="tiktok">Tiktok</option>
                            <option value="door-knock">
                                You knocked on my door
                            </option>
                            <option value="friend">Refered by a friend</option>
                        </select>
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
                </Right>
            </Wrapper>

            <ChooseUs />
            <Footer />
        </>
    );
}
