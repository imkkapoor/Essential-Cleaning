import React from "react";

import InstagramIcon from "@mui/icons-material/Instagram";

import styled from "styled-components";
import CopyrightIcon from "@mui/icons-material/Copyright";

const SocialContainer = styled.div`
    display: flex;
    justify-content: center;
`;
export default function Footer() {
    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "15px",
                    backgroundColor: "#2d5a9b",
                    color: "white",
                    justifyContent: "space-between",
                }}
            >
                <SocialContainer>
                    <div className="icons" id="ig" style={{ display: "flex" }}>
                        <InstagramIcon />{" "}
                        <a
                            href="https://www.instagram.com/essential.exterior.cleaning/"
                            style={{
                                margin: "-1px 0px 4px 8px",
                                color: "white",
                                textDecoration: "none",
                            }}
                        >
                            @essential.exterior.cleaning
                        </a>
                    </div>
                </SocialContainer>
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
                        fontSize: "16px",
                        alignItems: "center",
                        color: "white",
                        textDecoration: "none",
                    }}
                >
                    office@essentialexteriorcleaning.com
                </a>
            </div>

            <div
                style={{
                    display: "flex",
                    textAlign: "center",
                    fontSize: "10px",
                    alignItems: "center",
                    backgroundColor: "#2d5a9b",
                    color: "white",
                    padding: "0px 8px 8px 8px",
                    justifyContent: "center",
                }}
            >
                <CopyrightIcon style={{ fontSize: "19px" }} />
                2023 Essential Cleaning Services
            </div>
        </>
    );
}
