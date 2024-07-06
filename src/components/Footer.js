import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>© 2024 Portfolio. All Rights Reserved.</p>
          <ul className="footer-links">
            <li><a href="https://www.linkedin.com/in/ritesh-kakade-ba3540260/"><FaLinkedin /></a></li>
            <li><a href="https://github.com/RiteshKakade10"><FaGithub /></a></li>
            <li><a href="https://twitter.com/ritesh_1096"><FaXTwitter/></a></li>
            <li><a href="https://leetcode.com/RiteshKakade/"><SiLeetcode /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
