import React from 'react'
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom';
import mergeLogo from "../../Images/mergeLogo.png"
import { HiMenuAlt3 } from 'react-icons/hi'
import { useState } from 'react';
import arrow from "../../Images/arrow.svg"

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

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
          
          <Link onClick={() => setIsOpen(!isOpen)} to="/videoscroll">DEMO</Link>
          <Link onClick={() => setIsOpen(!isOpen)} to="/products"><span>PRODUCTS </span><svg width="15" height="12" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><path d="M9.61914 5.42871L5.77152 1.53977L1.9239 5.42871" stroke="currentColor" stroke-width="1.92381" stroke-linecap="round" stroke-linejoin="round"></path></svg></Link>
          <Link onClick={() => setIsOpen(!isOpen)} to="/pricing">PRICING </Link>
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