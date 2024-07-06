import React, { useState } from 'react';
import home from '../Assets/ritesh_102.png';
import { IoLogoJavascript } from "react-icons/io5";
import Footer from './Footer';
import './Home.css';
export default function Home() {
  const[text,setText]=useState();
  const name="Ritesh Raju Kakade";
  const str1="I'Am a MERN STACK Developer";
  return (
   <div className=''>  
   <div>
  <p>
  <h1 className='abc1'>Hey There!!!
    Ritesh Kakade    
    Software Engineer
   </h1>
  <img src={home} className='home1'></img>
   
  </p>
   </div>
   
  <Footer/>
   </div>
  );
}
