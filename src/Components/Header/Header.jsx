import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div>
      <header>
        <div className="left-side">
          <h1>MERGE</h1>
        </div>
        <div className="right-side">
          <button>Register</button>
        </div>
      </header>
    </div>
  )
}

export default Header