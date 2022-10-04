import "./ErrorPage.css"
import React from 'react'
import errorIcon from "../../Images/error-icon.png"
import { useNavigate } from "react-router-dom"

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="error-page-container">
        <img src={errorIcon} alt="error-icon"/>
        <h1>Page not found</h1>
        <a onClick={() => navigate('/home')}>return to home?</a>
      </div>
    </div>
  )
}

export default ErrorPage