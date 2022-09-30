import "./Footer.css"
import React from 'react'
import mergeFull from "../../Images/merge_full_logo.png"
import { AiFillLinkedin } from 'react-icons/ai';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="footer">
            <div className="upper-container">
                <div className="foot-section-1">
                    <img src={mergeFull} alt="merge-full-logo" />
                    <h3>Contact Us: (222) 222-1212</h3>
                    <h3>Email Us: chat@joinmerge.io</h3>
                    <h3>1234 Mula Ave <br /> San Francisco, CA 94132</h3>
                    <div className="socials">
                        <FaTwitterSquare size={30} />
                        <AiFillLinkedin size={30} />
                        <FaAngellist size={30} />
                    </div>
                </div>
                <div className="foot-section-2">
                    <h4>Customers</h4>
                    <ul>
                        <li>Sign In</li>
                        <li>Register</li>
                        <li>Refer a Friend</li>
                        <li>Customer Service</li>
                    </ul>
                </div>
                <div className="foot-section-2">
                    <h4>Products</h4>
                    <ul>
                        <li>Software</li>
                        <li>Pricing</li>
                        <li>Integration</li>
                        <li>Resources</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="foot-section-2">
                    <h4>Products</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Newsroom</li>
                        <li>Careers</li>
                        <li>Investors</li>
                        <li>Licenses</li>
                    </ul>
                </div>
            </div>
            
            {/* <hr className='solid' /> */}
                <div className="lower-container">
                    <p>Terms of Service</p>
                    <p>Legal</p>
                    <p>Privacy Statement</p>
                    <p> Merge, inc. &reg; {new Date().getFullYear()}</p>
                </div>
        </footer>
    )
}

export default Footer