import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import styled from 'styled-components';

const SocialContainer = styled.div`
    display:flex;
    justify-content:center;
    margin-bottom:20px;
`
export default function Footer() {
  return (
    <div>
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
    </div>
  )
}
