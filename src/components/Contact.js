import React from 'react';
import './ContactUsPage.css'; 
import image1 from '../Assets/contactus.svg';
export default function Contact() {
  return (
    <div className="contact-us-container">
     <center>
      <img className="image11" src={image1}></img>
     <h1 className='h11'>Contact Us</h1>
      <p className='h11'>Feel free to get in touch with us.</p>
     </center>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className='h11'>Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email" className='h11'>Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message" className='h11'>Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>

       <div className='submit-btn'>
       <button type="submit">Submit</button>
       </div>
      </form>
    </div>
  );
}


