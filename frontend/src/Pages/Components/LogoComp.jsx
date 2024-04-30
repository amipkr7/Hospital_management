import React from 'react'
import { IoBusiness } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { MdLocalHospital } from "react-icons/md";
const LogoComp = () => {
  return (
    <div className='container flexi-row'>
       <div>
      <div className='latest'><IoBusiness  style={{color:"rgb(174, 228, 81)",size:"100",fontSize:"40px"}}  />
      <div style={{size:"20px 20px"}}>The lush green campus spreads over 20 acres of land with state-of-the-art facilities befitting the best hospital in Allahabad.</div>
      </div>
      <div className='latest'><FaUserDoctor  style={{color:"rgb(174, 228, 81)",fontSize:"40px"}}/>
      <div>Faculty onboard boast good industry experience and are eminent doctors in their respective fields.</div>
      </div>
      <div className='latest'><MdLocalHospital style={{color:"rgb(174, 228, 81)",fontSize:"40px"}}/>
      <div>Please contact us directly for application details and admission-related information.</div></div>
    </div>
    </div>
  )
}

export default LogoComp
