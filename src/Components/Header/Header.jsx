import React, { useRef, useEffect } from 'react'
import "./Header.css"
import { Link, useNavigate } from 'react-router-dom';
import mergeLogo from "../../Images/mergeLogo.png"
import { HiMenuAlt3 } from 'react-icons/hi'
import { useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { CSSPlugin } from 'gsap/CSSPlugin'

gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(CSSPlugin);

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const headerRef = useRef(null);
  const logoRef = useRef(null)





  useEffect(() => {

    let headerAnim = gsap.to(headerRef.current, { boxShadow: "0px 0px 10px 1px rgba(87, 1, 106, 0.4)" })
    let logoAnim = gsap.to(logoRef.current, {fontSize: "2.4rem"})

    ScrollTrigger.create({
      trigger: headerRef.current,
      start: "top+=50 top",
      toggleActions: "play none none reverse",
      animation: headerAnim
    });
    ScrollTrigger.create({
      trigger: logoRef.current,
      start: "top+=50 top",
      toggleActions: "play none none reverse",
      animation: logoAnim
    });
    console.log(headerRef)

  }, [])



  const navigate = useNavigate();
  return (
    <div>
      <header className="headers" ref={headerRef}>
        <div className="left-side-logo"  >
          <a  href="/home" className="home-logo">
            <img src={mergeLogo} alt="merge-logo" />
            <h3 ref={logoRef}>MERGE</h3>
          </a>
        </div>
        <div className="middle" id={isOpen ? "hidden" : ""} >
          {/* ~a~ TAG IN CSS WORKS ON ~Link~ */}

          <Link onClick={() => setIsOpen(!isOpen)} to="/videoscroll">DEMO</Link>
          <Link onClick={() => setIsOpen(!isOpen)} to="/newGSAPtest">GSAP DEMO</Link>
          {/* <Link onClick={() => setIsOpen(!isOpen)} to="/products">PRODUCTS </Link> */}
          <Link onClick={() => setIsOpen(!isOpen)} to="/pricing">PRICING </Link>
          <Link onClick={() => setIsOpen(!isOpen)} to="/resources">RESOURCES</Link>
        </div>
        <div className="right-side" >
          <button className="register" onClick={() => navigate('/register')}>REGISTER</button>
          {/* <button className="sign-up" onClick={() => navigate('/home')}>SIGN IN</button> */}
          {/* <button className="sign-up">SIGN IN</button> */}
          <div className="hamburger-menu" id="hamburger">
            <HiMenuAlt3 size={50} onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header