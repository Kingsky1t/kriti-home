import React from 'react';
import "./Navbar.css";
import logo from '../assets/logo.png';

export const Navbar = () => {
     return (
          <div className='nav-container'>
               <div className='nav-logo'>
                    <img src={logo} alt="logo" />
               </div>
               <div className='nav-menu'>
                    <ul>
                         <li>About</li>
                         <li>Events</li>
                         <li>Downloads</li>
                         <li>Contact</li>
                         <li id="nav-login-btn">Login</li>
                    </ul>
               </div>
          </div>
     )
}
