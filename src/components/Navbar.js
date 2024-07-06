import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar1.css';
import Home from './Home';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import { IoMdContact } from "react-icons/io";
import { FaMedal } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";

export default function Navbar() {
  return (
    <>
    <nav className="navbar">
    <div className="container">
     <h1 className="logo">Portfolio</h1>
      <ul className="nav-links">
        <li><Link to="/contact"><IoMdContact /></Link></li>
        <li><Link to="/projects"><FaMedal /></Link></li>
        <li><Link to="/resume"><IoMdDocument /></Link></li>
      </ul>
      <hr/>
    </div>
  </nav>
  </>
    
  );
}


