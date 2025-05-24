import React from 'react';
import './Footer.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import cnnWhiteLogo from '../assets/cnnLogoWhite.png';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-top-iconos">
        <div>
          <img src={cnnWhiteLogo} alt="CNN Logo" className="footer-logo" />
        </div>
        <div className="footer-redes">
          <FaFacebookF />
          <FaLinkedinIn />
          <FaInstagram />
          <FaXTwitter />
        </div>
      </div>
      <div className="footer-texto">
        <p>© 2025 Cable News Network. A Warner Bros. Discovery Company. All Rights Reserved.</p>
        <p id='texto2'>CNN Sans ™ & © 2016 Cable News Network.</p>
      </div>
    </footer>
  );
}

export default Footer;
