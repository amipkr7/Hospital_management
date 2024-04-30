import React from 'react'
import Vector from '../../Photos/Vector.png'
import LogoComp from './LogoComp.jsx'
const Hero = (props) => {

  return (
    <>
    <div className='hero container'>
      <div className="banner">

        <h1>{props.title}</h1>
        <p>
Welcome to the United Group of Medical Sciences. We're dedicated to advancing healthcare through research, education, and patient care. Our state-of-the-art facilities and compassionate team provide comprehensive medical services. Explore our website to learn more about our innovative programs and how you can get involved in shaping the future of healthcare.</p>
      </div>
      <div className="banner">
        <img src={props.image_url} alt="hero" className="animated-image"/>
        <span>
          <img src={Vector} alt="" />
        </span>
  
      </div>
     
   
    </div>
    <LogoComp/>
    </>
  )
}

export default Hero
