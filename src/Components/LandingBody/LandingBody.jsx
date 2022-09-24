import React from 'react'
import mergeLogo from "../../Images/mergeLogo.png"
import SignUp from '../SignUp/SignUp'
import mergeImac from "../../Images/merge-imac.png"
import "./LandingBody.css"
import BusinessLogos from '../BusinessLogos/BusinessLogos'
import Pitch from '../Pitch/Pitch'

const LandingBody = () => {
  return (
    <div className='landing-body'>
      {/* <div className="merge-logo">
        <img src={mergeLogo} alt="mergeLogo" />
      </div>
      <div className="register">
        <div className="register-container">
          <h1 className='pre-register'>Pre Register.</h1>
          <div className="register-text"><h2>Be amongst the first to get a refund on your expenses!</h2></div>

          </div>
        </div> */}
      <div className="text-container">
        <h1>Get a refund on your expenses</h1>
        <p className="provides">
          <span>✅</span>  Lorem ip amet consectetur adipisicing sum dolor sit elit. Quasi, natus.
        </p>
        <p className="provides">
          <span>✅</span>  Lorem consectetur, adipisicing elit ipsum dolor sit amet  Beatae, nobis.
        </p>
        <p className="provides">
          <span>✅</span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quas.
        </p>
      </div>
      <div className="mock-imac">
        <img src={mergeImac} alt="merge-imac" width={700} />
      </div>
      <div className="email-enter"><SignUp /></div>
      <div className="logo-carousel"><BusinessLogos /></div>
      </div>
  )
}

export default LandingBody