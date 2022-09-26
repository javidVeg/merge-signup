import React from 'react'
import "./Header.css"
import mergeLogo from "../../Images/mergeLogo.png"

const Header = () => {
  return (
    <div>
      <header>
        <div className="left-side-logo">
          <img src ={mergeLogo} alt="merge-logo"/>
          <h3>MERGE</h3>
        </div>
        <div className="middle">
          <a href="#solutions">SOLUTIONS</a>
          <a href="#products">PRODUCTS</a>
          <a href="#pricing">PRICING</a>
          <a href="#resources">RESOURCES</a>
        </div>
        <div className="right-side">
          <button className="register">REGISTER</button>
          <button className="sign-up">SIGN IN</button>
        </div>
      </header>
    </div>
  )
}

export default Header