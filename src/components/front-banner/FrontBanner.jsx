import React from 'react'
import styled from 'styled-components'
import AdBanner from './gallery-modern-landscape-01.jpg'
const FrontImage = styled.div`
    
    background-color: black;
`

export default function FrontBanner() {
  return (
    <>
    <FrontImage>
    <img alt = "front-banner" src={AdBanner} style={{ width:"99.5vw"}}/>
    </FrontImage>
    </>
  )
}
