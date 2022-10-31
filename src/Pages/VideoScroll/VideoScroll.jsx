import React, { useRef, useState, useEffect } from 'react'
import "./VideoScroll.css"
import scrollVideo from "../../Images/scrollVideo2.mp4"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import img1 from "../../Images/img_1.png"
import img2 from "../../Images/img_2.png"
import img3 from "../../Images/img_3.png"
import img4 from "../../Images/img_4.png"
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const VideoScroll = () => {

  const mm = gsap.matchMedia()

  const IntroVideoRef = useRef(null);
  const videoRef = useRef(null);
  const enjoyRef = useRef(null)

  useEffect(() => {
    videoRef.current.currentTime = 0;
mm.add('(min-width: 767px)', () =>{
    ScrollTrigger.create({
      trigger: videoRef.current,
      scrub: .5,
      pin: videoRef.current,
      start: 'center center',
      end: '+=4000',
      // markers: true,
      onUpdate: (self) => {
        if (videoRef.current) {
          let scrollPos = self.progress;
          let videoDuration = videoRef.current.duration;
          let videoCurrentTime = videoDuration * scrollPos;
          if (videoCurrentTime) {
            videoRef.current.currentTime = videoCurrentTime;
          }
        }
      },
    })
  })
  }, [IntroVideoRef, videoRef]);

  useEffect(() => {
    mm.add('(min-width: 767px)', () =>{
    ScrollTrigger.create({
      trigger: enjoyRef.current,
      scrub: .5,
      pin: enjoyRef.current,
      start: 'center center',
      end: '+=1000',
      // markers: true
    })
  })
  }, [])

  //----------------------------------//----------------------------------//----------------------------------

  const philoRef = useRef()
  const wrapperRef = useRef(null)
  const someRef = useRef(null)

  useEffect(() => {
    let points = gsap.utils.toArray('.point');
    let anchors = gsap.utils.toArray('.tabs a');
    console.log(anchors)

    //? THIS DICTATES HOW LONG EACH `.point` LAST ON SCROLL 
    let height = 200 * points.length;
    console.table(height)


    let tl = gsap.timeline({
      duration: points.length,
      scrollTrigger: {
        trigger: philoRef.current,
        start: "top center",
        end: "+=" + height + "%",
        scrub: true,
        markers: false
      }

    })


    //? THIS MAKES THE ELEMENT ACTUALLY PIN
    ScrollTrigger.create({
      trigger: philoRef.current,
      start: "top top",
      end: "+=" + height + "%",
      scrub: true,
      pin: philoRef.current,
      id: "#sec3",

    })


    console.log(points)

    //? CYCLES THROUGH EACH .point in POINTS ARRAY
    points.forEach(function (elem, i) {

      //? this line is setting every ".point" (which is looped as "elem") to those css properties
      gsap.set(elem, { position: "absolute", top: 0 });


      //? THIS LINE IS THE TIMES COMING UP ON THE SCREEN
      tl.to(anchors[i], {color: "orange", duration: 0.25}, i)
      tl.from(elem.querySelector('img'), { autoAlpha: 0 }, i)
      tl.from(elem.querySelector('article'), { autoAlpha: 0, translateY: 100 }, i)

      //? THIS LINE IS THE ELEMENTS LEAVING THE SCREEN, ADDING .75 TO THE INDEX TILL THE INDEX IS ABOVE 4
      if (i != points.length - 1) {
        tl.to(anchors[i], {color: "black", duration: 0.25}, i+0.75)
        tl.to(elem.querySelector('article'), { autoAlpha: 0, translateY: -100 }, i + 0.75)
        tl.to(elem.querySelector('img'), { autoAlpha: 0 }, i + 0.75)
      }

      
    });

    
  }, [philoRef])
  const distance = 5000;

  const handleSec1 = (e) => {
    e.preventDefault()
    gsap.to(window, {duration: 1, scrollTo: distance});
  }
 
  const handleSec2 = (e) => {
    e.preventDefault()
    gsap.to(window, {duration: 1, scrollTo: 7000});
  }
 
  const handleSec3 = (e) => {
    e.preventDefault()
    gsap.to(window, {duration: 1, scrollTo: 9000});
  }
 
  const handleSec4 = (e) => {
    e.preventDefault()
    gsap.to(window, {duration: 1, scrollTo: 11000});
  }
 
  return (
    <>
      <div className="scroll-container">
        <div className="section-left">
          <h1 className='left-text-1'>This is an example of pinned elements and scrollTrigger</h1>
          <h1 className='left-text-2' ref={enjoyRef}>Enjoy!</h1>
        </div>
        <div className="section-right">
          <video autoPlay loop id="video" className="vid" ref={videoRef} src={scrollVideo}></video>
        </div>
      </div>

<div className='spacer'></div>

      <section ref={philoRef} className="philosophie">
        <div ref={wrapperRef} className="wrapper">
          <nav className="tabs">
            <a onClick={handleSec1} href="#sec1">Try This Section</a>
            <h3>/</h3>
            <a onClick={handleSec2} href="#sec2">Or You Could Start Here</a>
            <h3>/</h3>
            <a onClick={handleSec3} href="#sec3">This Is Also A Good Start</a>
            <h3>/</h3>
            <a onClick={handleSec4} href="#sec4">This Is The End</a>
          </nav>
          <div className="point" id="sec1">
            <article>
              <h1>This is an example of GSAP pinning</h1>
            </article>
            <div className="img_">
              <img src={img1} alt="random" />
            </div>
          </div>
          <div className="point" id="sec2">
            <article>
              <h1>Elements will pin until the next one is ready on scroll</h1>
            </article>
            <div className="img_">
              <img src={img2} alt="random" />
            </div>          </div>
          <div className="point" id="#sec3">
            <article>
              <h1>GSAP allows limitless animation possibilities</h1>
            </article>
            <div className="img_">
              <img src={img3} alt="random" />
            </div>          </div>
          <div className="point" id="sec4">
            <article>
              <h1>I hope you enjoyed this example</h1>
            </article>
            <div className="img_">
              <img src={img4} alt="random" />
            </div>
          </div>
        </div>

      </section>
     

      {/* <div className="scroll-section-wrapper">
                <div className="left-scroll-section-text">
                    <div className="p-1"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi rem iusto illum libero expedita vero optio eveniet temporibus aliquid at, fugit dolore fugiat vitae officia recusandae cum obcaecati iste error, nesciunt voluptas laboriosam, id porro eum architecto. Exercitationem, explicabo perferendis!</p></div>
                    <div className="p-2"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi rem iusto illum libero expedita vero optio eveniet temporibus aliquid at, fugit dolore fugiat vitae officia recusandae cum obcaecati iste error, nesciunt voluptas laboriosam, id porro eum architecto. Exercitationem, explicabo perferendis!</p></div>
                </div>

                <div className="right-scroll-section-img">
                    <img className="img1" src={img1} alt="img 1" />
                    <img className="img2" src={img2} alt="img 2" />
                    <img className="img3" src={img3} alt="img 3" />
                </div>

            </div> */}


    </>

  )
}

export default VideoScroll