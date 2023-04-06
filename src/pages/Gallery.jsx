import React from 'react'
import NavBarLine from '../components/nav-bar/NavBarLine'
import Images from '../components/gallery-images/Images'
import ChooseUs from '../components/why-us/ChooseUs'
import Footer from '../components/footer/Footer'

export default function Gallery() {
  return (
    <div>
        <NavBarLine header = "Gallery"/>
        <Images/>
        <ChooseUs/>
        <Footer/>
    </div>
  )
}
