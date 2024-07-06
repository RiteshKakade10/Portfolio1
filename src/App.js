import React, { Component } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './components/Home.js';
import Resume from './components/Resume.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Resume/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/resume' element={<Resume/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

