import React from 'react'
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom';
import mergeLogo from "../../Images/mergeLogo.png"
import { HiMenuAlt3 } from 'react-icons/hi'
import { useState } from 'react';

const Header = () => {

  const [ isOpen, setIsOpen ] = useState(false)
  
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <div className="left-side-logo"  >
          <img src={mergeLogo} alt="merge-logo" />
          <h3>MERGE</h3>
        </div>
        <div className="middle" id={isOpen ? "hidden" : ""} >
          {/* ~a~ TAG IN CSS WORKS ON ~Link~ */}
          <Link onClick={() => setIsOpen(!isOpen)} to="/solutions">SOLUTIONS</Link>
          <Link onClick={() => setIsOpen(!isOpen)} to="/demo">DEMO</Link>
          <Link onClick={() => setIsOpen(!isOpen)} to="/products">PRODUCTS</Link>
          <Link onClick={() => setIsOpen(!isOpen)} to="/pricing">PRICING</Link>
          <Link onClick={() => setIsOpen(!isOpen)} to="/resources">RESOURCES</Link>
        </div>
        <div className="right-side" >
          <button className="register" onClick={() => navigate('/register')}>REGISTER</button>
          <button className="sign-up" onClick={() => navigate('/home')}>HOME</button>
          {/* <button className="sign-up">SIGN IN</button> */}
          <div className="hamburger-menu" id="hamburger">
            <HiMenuAlt3 size={50} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header