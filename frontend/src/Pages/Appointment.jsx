import React from 'react'
import AppointmentForm from './Components/AppointmentForm.jsx'
import Hero from './Components/Hero.jsx'
import signin from '../Photos/signin.png'
const Appointment = () => {
  return (
    <div>
      <br /><br /><br />
      <Hero title={"Schedule Your Appointment | United Group of Medical Sciences"} image_url={signin}/>
      <AppointmentForm/>
    </div>
  )
}

export default Appointment
