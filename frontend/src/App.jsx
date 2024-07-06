import React from 'react'
import Footer from './Pages/Components/Footer.jsx';
import './App.css'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import Appointment from './Pages/Appointment.jsx'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Pages/Components/Navbar.jsx';
import Context from './main.jsx';
import { useEffect } from 'react';
import { useContext } from 'react';
import AIBot from './Pages/Components/AIbot.jsx';
import axios from 'axios';
import Payment from '../../dashboard/src/Components/Payment.jsx';

const App = () => {
  const {isAuthenticated,setIsAuthenticated,setUser}=useContext(Context);
  useEffect(()=>{
    const fetchUser =async ()=>{
      try{
        const response = await axios.get(
          "http://localhost:5000/api/v1/user/patient/me",{withCredentials:true}
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      }
      catch{
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  },[]);

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/appointment' element={<Appointment/>}></Route>
          <Route path='/about' element={<AboutUs/>}></Route>
          <Route path='/chat' element={<AIBot/>}></Route>
          <Route path='/payment' element={<AIBot/>}></Route>
        </Routes>
        <ToastContainer position="top-center"/>
     
        <Footer/>
      </Router>
    </>
  )
}

export default App
