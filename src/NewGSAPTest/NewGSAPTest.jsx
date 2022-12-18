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


            if (i <= 2) {
                console.log(elem, images[i], i)

                gsap.to("#img" + [i], {
                    opacity: 0,
                    duration: 5,

                    scrollTrigger: {
                        trigger: elem,
                        start: "bottom+=-100px center",
                        end: "bottom bottom",
                        scrub: 1,
                        markers: false,
                        // id: "sec" + [i]
                    }
                })
            } else {
                return console.log("end")
            }


        })


        //! THIS PINS THE IMG CONTAINER
        ScrollTrigger.create({
            trigger: ".right-section",
            pin: ".right-section",
            start: "top-=120 top",
            end: "bottom-=900 top",
            scrub: 1,
            markers: false,
            id: "pin"
            // onToggle: self => console.log("toggled, isActive:", self.isActive),
            // onUpdate: self => {
            //    console.log("progress:", self.progress.toFixed(3), "direction:", self.direction, "velocity", self.getVelocity());
            // }
        });
    }, [])




    const handleSec1 = (e) => {
        e.preventDefault()
        gsap.to(window, { duration: .5, scrollTo: "#sec1" });
    }

    const handleSec2 = (e) => {
        e.preventDefault()
        gsap.to(window, { duration: .5, scrollTo: "#sec2" });
    }

    const handleSec3 = (e) => {
        e.preventDefault()
        gsap.to(window, { duration: .5, scrollTo: "#sec3" });
    }

    const handleSec4 = (e) => {
        e.preventDefault()
        gsap.to(window, { duration: .5, scrollTo: "#sec4" });
    }

    return (
        <div >

            <div className="wrapper-a">
                <nav className="tab">
                    <a onClick={handleSec1} href="#sec1">What is this?</a>
                    <h3>/</h3>
                    <a onClick={handleSec2} href="#sec2">See the Demo</a>
                    <h3>/</h3>
                    <a onClick={handleSec3} href="#sec3">Live the Demo</a>
                    <h3>/</h3>
                    <a onClick={handleSec4} href="#sec4">Be the Demo</a>
                </nav>
                <div className="content-container">
                    <section className='left-section'>

                        <section id="sec1" className="sections_">
                            <h2>This is a demo</h2>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Nostrum animi perspiciatis temporibus debitis totam possimus
                                nihil fugit cum repudiandae dolorum.
                            </p>
                        </section>
                        <section id="sec2" className="sections_">
                            <h2>For the sticky features</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing eli
                                t. Ut dolorem provident recusandae doloremque rem optio voluptate conseq
                                uuntur cupiditate iure blanditiis, mollitia, nobis ulla
                                m nisi aut qui doloribus placeat laborum quas.
                            </p>
                        </section>
                        <section id="sec3" className="sections_">
                            <h2>Hope it comes out well</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ne
                                mo nulla accusamus itaque minus veniam hic dolorem? Quidem odio exercitationem
                                itaque cupiditate eligendi nesciunt debitis explicabo.
                            </p>
                        </section>
                        <section id="sec4" className="sections_">
                            <h2>If not oh well🤷🏽‍♂️</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa poss
                                imus accusamus consectetur a asperiores veniam molestiae magni
                                quaerat quisquam deserunt saepe quidem ducimus sed, odio eligendi,
                                architecto ipsum voluptates nam.
                            </p>
                        </section>
                    </section>
                    <div className='right-section'>
                        <img className='imgs' id='img0' loading='lazy' src={SS1} alt="SS1" />
                        <img className='imgs' id='img1' loading='lazy' src={SS2} alt="SS2" />
                        <img className='imgs' id='img2' loading='lazy' src={SS3} alt="SS3" />
                        <img className='imgs' id='img3' loading='lazy' src={SS4} alt="SS4" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default NewGSAPTest