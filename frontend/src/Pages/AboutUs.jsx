import React from 'react'
import Hero from './Components/Hero.jsx'
import about from '../Photos/about.png'
import Biography from './Components/Biography.jsx'
import whoweare from '../Photos/whoweare.png'

const AboutUs = () => {
  return (
    <>
     
     <Hero title={"Learn More About Us | Zeecare Medical Institute"} image_url={about} /> 
     <Biography image_url={whoweare}/>
    </>
  )
}

export default AboutUs
