import "./Pitch.css"

import React from 'react'
import PitchAnimation from "../Animations/PitchAnimation/PitchAnimation"

const Pitch = () => {
  return (
    <div className="pitch-container">
      <h2>Merge provides</h2><PitchAnimation />
      <p>Lorem ipsum dolor sit amet consectetur
        adipisicing elit. In architecto esse aut pariatur?
        Vitae minima delectus labore enim unde quasi
        voluptas quae. At dignissimos tempora maxime deleniti!
        Cum neque quasi culpa reprehenderit adipisci eius nesciunt.
      </p>
    </div>
  )
}

export default Pitch