import React from 'react';
import logo from "../assets/quiz.jpg";
import "../componentsStyles/Logo.css";

const Logo = () => {
    return (
        <div className='logo'>
            <img src={logo} width={60} alt="Logo" />
        </div>
      )
} 

export default Logo;
