import "./Register.css"
import mergeLogo from "../../Images/mergeLogo.png"

import React from 'react'
import SignUp from "../../Components/SignUp/SignUp"

const Register = () => {
    return (
        <div>
            <div className="register-page">
                <div className="register-wrapper">
                    <div className="register-container">
                        <h1 className='pre-register'>Pre Register.</h1>
                        <div className="register-text"><h2>Be amongst the first to get a refund on your expenses!</h2></div>
                        <SignUp/>                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register