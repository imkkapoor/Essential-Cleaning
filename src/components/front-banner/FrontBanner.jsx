import React from 'react'
import styled from 'styled-components'

const FrontImage = styled.div`
    height: 40vh;
    background-color: black;
`

export default function FrontBanner() {
  return (
    <>
    <FrontImage>
    <img alt = "front-banner"/>
    </FrontImage>
    </>
  )
}
