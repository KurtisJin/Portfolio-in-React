import React from 'react';
import Animate from 'animate.css-react';

// import './Navbar.css'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="max-width">
                <Animate enter="bounceIn" animate={true} durationEnter={1000} component="div" >
                <div className="logo"><a href="#">My Portfo<span>lio.</span></a></div>
                </Animate>
                <ul className="menu">
                    <li><a href="#home" className="menu-btn">Home</a></li>
                    <li><a href="#about" className="menu-btn">About</a></li>
                    <li><a href="#services" className="menu-btn">Services</a></li>
                    <li><a href="#skills" className="menu-btn">Skills</a></li>
                    <li><a href="#projects" className="menu-btn">Projects</a></li>
                    <li><a href="#contact" className="menu-btn">Contact Me</a></li>
                </ul>
            </div>
            <div className="menu-btn">
                <i className="fas fa-bars"></i>
            </div>  
        </nav>  
    )
}
