import React, { useContext, useState } from 'react'
import Context from '../main'
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from 'react-router-dom';

import axios from 'axios';
import { toast } from 'react-toastify';
const Register = () => {
  const {isAuthenticated,setIsAuthenticated,user,setUser}=useContext(Context);

  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [nic,setNic] = useState("");
  const [dob,setDob] = useState("");
  const [gender,setGender] = useState("");
  const [password,setPassword] = useState("");

  const navigateTo=useNavigate();

  const handleRegister = async(e)=>{
    e.preventDefault();
    try{
      const response =await axios.post ("https://hospmang-backend.onrender.com/api/v1/user/patient/register",{firstName,lastName,email,phone,nic,dob,gender,password,role:"Patient"},
    {withCredentials:true,
    headers:{"Content-Type":"application/json"},
  });
  toast.success(response.data.message);
  setIsAuthenticated(true);
  // navigateTo("/");
}
  catch(error){
    toast.error(error.response.data.message);
  }
  };

  // if(!isAuthenticated){
  //   return <Navigate to={"/"}/>
  // }
  return (
    <div className='container form-component register-form'>
      <h2>SIgn Up</h2>
      <p>Please Sign Up To Continue</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolor expedita sunt natus quo accusamus suscipit, earum similique eligendi consequuntur!</p>
      
      <form onSubmit={handleRegister}>
        <div>
          <input type="text" placeholder='firstName' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
          <input type="text" placeholder='lastName' value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
        </div>
        <div>
        <input type="text" placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="text" placeholder='phone' value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
        </div>
        <div>
        <input type="text" placeholder='nic' value={nic} onChange={(e)=>{setNic(e.target.value)}}/>
        <input type="date" placeholder='DOB' value={dob} onChange={(e)=>{setDob(e.target.value)}}/>
        </div>
        <div>
        <input type="text" placeholder='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="text" placeholder='phone' value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
        </div>
        <div>
          <select value={gender} onChange={(e)=> setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        <input type="text" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <div style={{gap:"10px", justifyContent:"flex-end", flexDirection:"row"}}>

<p style={{marginBottom:0}}>Already Registered</p>
<Link to={"/login"} style={{textDecoration:"none" ,alignItems:"center"}}>Login Now</Link>
</div>

<div style={{justifyContent:"center", alignItems:"center"}}>
    <button type='submit'>Register</button>
</div>
      </form>

    </div>
  )
}

export default Register
