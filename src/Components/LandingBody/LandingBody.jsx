import React from 'react'
import mergeLogo from "../../Images/mergeLogo.png"
import "./LandingBody.css"

const LandingBody = () => {
  return (
    <div className='landing-body'>
        <div className="merge-logo">
            <img src={mergeLogo} alt="mergeLogo"/>
        </div>
        <div className="register">
            <div className="register-container"></div>
        </div>
    </div>
  )
}

export default LandingBody