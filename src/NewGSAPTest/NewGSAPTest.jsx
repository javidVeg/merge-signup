import React, { useRef, useState, useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import "./NewGSAPTest.css"
import SS1 from "../Images/ss1.png"
import SS2 from "../Images/ss2.png"
import SS3 from "../Images/ss3.png"
import SS4 from "../Images/ss4.png"

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);


const NewGSAPTest = () => {


    

    
    
    // console.log(sections)

    useEffect(() => {

        const images = [SS1, SS2, SS3, SS4] 

        const sections = gsap.utils.toArray(".sections_")

        console.log(images)

        sections.forEach((elem, i) => {
            
           

            console.log(elem, images[i], i)
            
            gsap.to("#img" + [i], {
                opacity: 0,
                duration: 5,

                scrollTrigger: {
                    trigger: elem,
                    start: "bottom+=-100px center",
                    end: "bottom bottom",
                    scrub: 1,
                    markers: true,
                    // id: "sec" + [i]
                }
            })
            
        })
//! THIS PINS THE IMG CONTAINER
        ScrollTrigger.create({
            trigger: ".right-section",
            pin: ".right-section",
            start: "top+=-60px top",
            
            end: "bottom+=-500",
            scrub: 1,
            markers: true,
            id: "pin"
            // onToggle: self => console.log("toggled, isActive:", self.isActive),
            // onUpdate: self => {
            //    console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
            // }
        });


    }, [])




    const handleSec1 = (e) => {
        e.preventDefault()
        gsap.to(window, { duration: 1, scrollTo: "#sec1" });
    }

    const handleSec2 = (e) => {
        e.preventDefault()
        gsap.to(window, { duration: 1, scrollTo: "#sec2" });
    }

    const handleSec3 = (e) => {
        e.preventDefault()
        gsap.to(window, { duration: 1, scrollTo: "#sec3" });
    }

    const handleSec4 = (e) => {
        e.preventDefault()
        gsap.to(window, { duration: 1, scrollTo: "#sec4" });
    }

    return (
        <div >
            <div className="spacing"></div>
            <div className="wrapper-a">
                <nav className="tabs">
                    <a onClick={handleSec1} href="#sec1">Section A</a>
                    <h3>/</h3>
                    <a onClick={handleSec2} href="#sec2">Section B</a>
                    <h3>/</h3>
                    <a onClick={handleSec3} href="#sec3">Section C</a>
                    <h3>/</h3>
                    <a onClick={handleSec4} href="#sec4">Section D</a>
                </nav>
                <div className="content-container">
                    <section className='left-section'>

                        <section id="sec1" className="sections_">
                            <h2>This is a demo</h2>
                        </section>
                        <section id="sec2" className="sections_">
                            <h2>For the sticky features</h2>
                        </section>
                        <section id="sec3" className="sections_">
                            <h2>Hope it comes out well</h2>
                        </section>
                        <section id="sec4" className="sections_">
                            <h2>If not oh well🤷🏽‍♂️</h2>
                        </section>
                    </section>
                    <section className='right-section'>
                        <img className='imgs' id='img0' loading='lazy' src={SS1} alt="SS1" />
                        <img className='imgs' id='img1' loading='lazy' src={SS2} alt="SS2" />
                        <img className='imgs' id='img2' loading='lazy' src={SS3} alt="SS3" />
                        <img className='imgs' id='img3' loading='lazy' src={SS4} alt="SS4" />
                    </section>
                </div>
            </div>
            
        </div>
    )
}

export default NewGSAPTest