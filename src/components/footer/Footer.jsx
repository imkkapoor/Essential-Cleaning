import React from "react";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import styled from "styled-components";
import CopyrightIcon from "@mui/icons-material/Copyright";
import TiktokIcon from "./icons8-tiktok-144.png";

const SocialContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: "center";
    @media screen and (max-width: 600px) {
    justify-content: center;
       
    }
`;

const ContactWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 15px;
    background-color: #2d5a9b;
    color: white;
    justify-content: space-between;
    @media screen and (max-width: 600px) {
        flex-direction: column;
        text-align: center;
    }
`;

const FindUsOn = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 0px 20px;
    @media screen and (max-width: 600px) {
        margin: 10px 0px;
    }
    
`;

const ContactUs = styled.div`
    text-align: center;
    flex: 4;
    margin: 0px 20px;
    font-size: 14px;
    @media screen and (max-width: 600px) {
        margin: 15px 0px;
    }
`;

const Operation = styled.div`
    flex: 1;
    margin: 0px 30px;
    font-size: 14px;
    @media screen and (max-width: 600px) {
        margin: 10px 0px;
    }
`;

export default function Footer() {
    return (
        <>
            <ContactWrapper>
                <FindUsOn>
                    <h6>Follow us on Social Media</h6>
                    <SocialContainer>
                        <a
                            href="https://www.instagram.com/essential.exterior.cleaning/"
                            style={{
                                color: "white",
                                textDecoration: "none",
                            }}
                        >
                            <InstagramIcon />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100091646640264">
                            <FacebookIcon
                                style={{ width: "25px", height: "25px", color:"white" }}
                            />
                        </a>
                        <a href="https://www.tiktok.com/@essentialexteriorcleanin">
                            <img
                                src={TiktokIcon}
                                style={{
                                    width: "26px",
                                    height: "26px",
                                    marginTop: "1px",
                                }}
                                alt="tiktok icon"
                            />
                        </a>
                    </SocialContainer>
                </FindUsOn>

                <ContactUs>
                    <h6>Contact Us</h6>
                    <a
                        href="tel:2502634283"
                        style={{ color: "white", textDecoration: "none" }}
                    >
                        {" "}
                        +1 (250) 263-4283{" "}
                    </a>

                    <a
                        href="mailto:office@essentialexteriorcleaning.com"
                        style={{
                            display: "flex",
                            textAlign: "center",
                            alignItems: "center",
                            color: "white",
                            textDecoration: "none",
                            justifyContent: "center",
                        }}
                    >
                        office@essentialexteriorcleaning.com
                    </a>
                </ContactUs>

                <Operation>
                    <h6>Hours of Operation</h6>
                    Monday-Sunday<br></br>8am-8pm
                </Operation>
            </ContactWrapper>

            <div
                style={{
                    display: "flex",
                    textAlign: "center",
                    fontSize: "10px",
                    alignItems: "center",
                    backgroundColor: "#2d5a9b",
                    color: "white",
                    padding: "8px 8px 8px 8px",
                    justifyContent: "center",
                }}
            >
                <CopyrightIcon style={{ fontSize: "19px" }} />
                2023 Essential Cleaning Services
            </div>
        </>
    );
}
