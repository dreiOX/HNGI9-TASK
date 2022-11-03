import React from 'react';
import { ZuriLogo, I4G } from '../assets/images';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <img src={ZuriLogo} alt='zuri' />
      <p>HNG Internship 9 Frontend Task</p>
      <img src={I4G} alt='ingressive for good' />
    </footer>
  );
}

export default Footer;
