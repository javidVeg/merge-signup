import React from 'react'
import mergeLogo from "../../Images/mergeLogo.png"
import SignUp from '../SignUp/SignUp'
import "./LandingBody.css"

const LandingBody = () => {
  return (
    <div className='landing-body'>
      <div className="merge-logo">
        <img src={mergeLogo} alt="mergeLogo" />
      </div>
      <div className="register">
        <div className="register-container">
          <h1 className='pre-register'>Pre Register.</h1>
          <div className="register-text"><h2>Be amongst the first to get a refund on your expenses</h2></div>

          <SignUp />
        </div>
      </div>
    </div>
  )
}

export default LandingBody