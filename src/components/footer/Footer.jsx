import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import styled from 'styled-components';
import CopyrightIcon from '@mui/icons-material/Copyright';

const SocialContainer = styled.div`
    display:flex;
    justify-content:center;
    
`
export default function Footer() {
  return (
    <div style={{display:'flex', flexDirection:'column', marginBottom:'20px'}}>
        <SocialContainer>
          <div className="icons" id="fb">
            <FacebookIcon/>
            </div>
          <div className="icons" id="ig">
            <InstagramIcon />
          </div>
          <div className="icons" id="tweet">
            <TwitterIcon />
          </div>
        </SocialContainer>
        <div style={{display:'inline', textAlign:'center'}}>
        <CopyrightIcon/>
         2023 Essential Cleaning Services
        </div>
    </div>
  )
}
