import React, { useContext } from 'react'
import Context from '../main'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const Login = () => {
  const {isAuthenticated,setIsAuthenticated} = useContext(Context);
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  const navigateTo = useNavigate();

  // console.log("brfore"+isAuthenticated)
  const handleLogin = async (e)=>{
    e.preventDefault();
    try{
      const response =await axios.post (`https://hospmang-backend.onrender.com/api/v1/user/patient/login`,{email,password,confirmPassword,role:"Patient"},
    {withCredentials:true,
    headers:{"Content-TYpe":"application/json"},
  });
  toast.success(response.data.message);
  setIsAuthenticated(true);
  // console.log("after"+isAuthenticated)
  navigateTo("/");
}
  catch(error){
    toast.error(error.response.data.message);
  }
    
} 
  
  return (
    <div className='container form-component login-form'>
      <h2>Sign In</h2>
      <p>Please Login To Continue</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officiis quasi quo accusamus vel. Eius provident doloremque modi similique unde.</p>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="text" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <input type="text" placeholder='Confirm Password' value={confirmPassword} onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
        <div style={{gap:"10px", justifyContent:"flex-end", flexDirection:"row"}}>

        <p style={{marginBottom:0}}>Not Registered?</p>
        <Link to={"/register"} style={{textDecoration:"none" ,alignItems:"center"}}>Register Now</Link>
       </div>

       <div style={{justifyContent:"center", alignItems:"center"}}>
            <button type='submit'>Login</button>
       </div>
      </form>
    </div>
  )
}

export default Login
