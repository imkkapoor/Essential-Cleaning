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
                    <p style={{margin: "-1px 0px 4px 8px" }}>
                        @essential.exterior.cleaning
                    </p>
                </div>
            </SocialContainer>

            +1 (250) 263-4283
            <div
                style={{
                    display: "flex",
                    textAlign: "center",
                    fontSize: "16px",
                    alignItems: "center",
                }}
            >
                office@essentialexteriorcleaning.com
            </div>
        </div>
    
        <div
        style={{
            display: "flex",
            textAlign: "center",
            fontSize: "10px",
            alignItems: "center",
            backgroundColor: "#2d5a9b",
            color:"white", 
            padding: "0px 8px 8px 8px",
            justifyContent:"center"
        }}
    >
        <CopyrightIcon style={{ fontSize: "19px"}} />
        2023 Essential Cleaning Services
    </div>
    </>
    );
}
