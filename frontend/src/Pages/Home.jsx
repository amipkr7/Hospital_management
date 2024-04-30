import React from 'react'
import MessageForm from './Components/MessageForm.jsx'
import Departments from './Components/Departments.jsx'
import Hero from './Components/Hero.jsx'
import Biography from './Components/Biography.jsx'
import hero from '../Photos/hero.png'
import about from '../Photos/about.png'
const Home = () => {
  return (
    <>
      <Hero title={"Welcome to the Hospital"} image_url={hero}/>
      <Biography image_url={about}/>
      <Departments/>
      <MessageForm/>
    </>
  )
}

export default Home
