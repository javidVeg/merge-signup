import React from 'react'
import mergeLogo from "../../Images/mergeLogo.png"
import SignUp from '../../Components/SignUp/SignUp'
import mergeImac from "../../Images/merge-imac.png"
import "./LandingBody.css"
import BusinessLogos from '../../Components/BusinessLogos/BusinessLogos'
import Pitch from '../../Components/Pitch/Pitch'
import smallB1 from "../../Images/small-business-1.jpeg"
import UserJourney from '../../Components/UserJourney/UserJourney'

const LandingBody = () => {
  return (
    <div className='landing-body'>
      <section className="hero">
        <div className="text-container">
          <h1>Get a refund on your expenses</h1>
          <p className="provides">
            <span>👌</span>  Lorem ip amet consectetur adipisicing sum dolor sit elit. Quasi, natus.
          </p>
          <p className="provides">
            <span>👌</span>  Lorem consectetur, adipisicing elit ipsum dolor sit amet  Beatae, nobis.
          </p>
          <p className="provides">
            <span>👌</span>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quas.
          </p>
          <div className="email-enter"><SignUp /></div>
        </div>
        <div className="hero-img">
          <img src={smallB1} alt="hero-img" />
        </div>
      </section>
      <div className="logo-carousel">
        <BusinessLogos /></div>
      <div className="user-journey">
        <UserJourney/>
      </div>

    </div>
  )
}

export default LandingBody