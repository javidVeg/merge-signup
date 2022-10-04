import React from 'react'
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom';
import mergeLogo from "../../Images/mergeLogo.png"

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <div className="left-side-logo">
          <img src ={mergeLogo} alt="merge-logo"/>
          <h3>MERGE</h3>
        </div>
        <div className="middle">
          {/* ~a~ TAG IN CSS WORKS ON ~Link~ */}
          <Link to="/solutions">SOLUTIONS</Link>
          <Link to="/demo">DEMO</Link>
          <Link to="/products">PRODUCTS</Link>
          <Link to="/pricing">PRICING</Link>
          <Link to="/resources">RESOURCES</Link>
        </div>
        <div className="right-side">
          <button className="register" onClick={() => navigate('/register')}>REGISTER</button>
          <button className="sign-up" onClick={() => navigate('/home')}>HOME</button>
          {/* <button className="sign-up">SIGN IN</button> */}
        </div>
      </header>
    </div>
  )
}

export default Header