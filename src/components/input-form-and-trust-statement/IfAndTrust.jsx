import React from "react";
import styled from "styled-components";
import VerifiedIcon from "@mui/icons-material/Verified";

const Wrapper = styled.div`
    display: flex;
    margin: 20px 0px;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
    
`;

const Right = styled.div`
    flex: 1;
`;

const InputForm = styled.form`
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    margin: 0px 12vw 30px 0vw;
    font-size: 14px;
    @media screen and (max-width: 600px) {
        margin: 10px 10vw 30px 10vw;
    }
`;

const CheckList = styled.div`
    display: flex;
    width: 70%;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    height: 100%;
    background-color: #ededed;
    width: 90%;
    margin: 0px 30px;
    border-radius: 4px;
    padding: 15px 0px;
    @media screen and (max-width: 600px) {
        padding-top: 15px;
        margin: 0px 17px;
    }
`;

const ServiceHeader = styled.div`
    color: black;
    font-size: 19px;

    text-align: center;
    font-weight: 500;
    padding-bottom: 3px;

    display: flex;
    align-items: center;
`;

const ServiceDescription = styled.div`
    color: black;
    font-size: 15px;
    text-align: center;
    width: 80%;
    margin-bottom: 15px;
`;

export default function IfAndTrust() {
    return (
        <div>
            <Wrapper>
                <div style={{ flex: "1", display:"flex"}}>
                    <Left>
                        <h4>WHY US?</h4>
                        <ServiceHeader>
                            <VerifiedIcon
                                style={{ color: "#3c70b9", margin: "0px 5px" }}
                            />
                            Reliable & Honest
                        </ServiceHeader>
                        <ServiceDescription>
                            Our team is dedicated to upholding the highest
                            standards of integrity, professionalism, and
                            transparency in all aspects of our operations.
                        </ServiceDescription>
                        <ServiceHeader>
                            <VerifiedIcon
                                style={{ color: "#3c70b9", margin: "0px 5px" }}
                            />
                            Environment Friendly Cleaning
                        </ServiceHeader>
                        <ServiceDescription>
                            We provide eco-friendly cleaning services for homes
                            and businesses while minimizing the impact on the
                            environment.
                        </ServiceDescription>
                        <ServiceHeader>
                            <VerifiedIcon
                                style={{ color: "#3c70b9", margin: "0px 5px" }}
                            />
                            100% Satisfaction Gurannted
                        </ServiceHeader>
                        <ServiceDescription>
                            Our team of highly trained professionals is
                            committed to providing top-notch cleaning services
                            for your property.
                        </ServiceDescription>

                        <ServiceHeader>
                            <VerifiedIcon
                                style={{ color: "#3c70b9", margin: "0px 5px" }}
                            />
                            Best Prices on the Market
                        </ServiceHeader>
                        <ServiceDescription>
                            Contact us today to schedule a free estimate and
                            experience the best prices on the market for
                            exterior cleaning services.
                        </ServiceDescription>
                    </Left>
                </div>
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
        </div>
    );
}
