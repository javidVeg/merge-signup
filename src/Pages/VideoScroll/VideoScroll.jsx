import React, { useRef, useState, useEffect } from 'react'
import "./VideoScroll.css"
import scrollVideo from "../../Images/scrollVideo2.mp4"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollSection from '../../Components/ScrollSection/ScrollSection';
import img1 from "../../Images/img1.png"
import img2 from "../../Images/img2.png"
import img3 from "../../Images/img3.png"
gsap.registerPlugin(ScrollTrigger);

const VideoScroll = () => {

  const IntroVideoRef = useRef(null);
  const videoRef = useRef(null);
  const enjoyRef = useRef(null)

  useEffect(() => {
    videoRef.current.currentTime = 0;

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
  }, [IntroVideoRef, videoRef]);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: enjoyRef.current,
      scrub: .5,
      pin: enjoyRef.current,
      start: 'center center',
      end: '+=1000',
      // markers: true
    })
  }, [])

//----------------------------------//----------------------------------//----------------------------------

const philoRef = useRef()
    const wrapperRef = useRef(null)
    const imgRef = useRef()

    useEffect(() => {
        var points = gsap.utils.toArray('.point');
        //   var indicators = gsap.utils.toArray('.indicator');

        var height = 100 * points.length;
        console.table(height)


        var tl = gsap.timeline({
            duration: points.length,
            scrollTrigger: {
                trigger: philoRef.current,
                start: "top center",
                end: "+=" + height + "%",
                scrub: true,
                id: "points",
                //   markers: true
            }

        })


        ScrollTrigger.create({
            trigger: philoRef.current,
            start: "top top",
            end: "+=" + height + "%",
            scrub: true,
            pin: philoRef.current,
            pinSpacing: false,
            id: "pinning",
            markers: true
        })



        points.forEach(function (elem, i) {
            gsap.set(elem, { position: "absolute", top: 0 });

            // tl.to(indicators[i], {backgroundColor: "orange", duration: 0.25}, i)
            tl.from(elem.querySelector('img'), { autoAlpha: 0 }, i)
            tl.from(elem.querySelector('article'), { autoAlpha: 0, translateY: 100 }, i)

            if (i != points.length - 1) {
                //   tl.to(indicators[i], {backgroundColor: "#adadad", duration: 0.25}, i+0.75)
                tl.to(elem.querySelector('article'), { autoAlpha: 0, translateY: -100 }, i + 0.75)
                tl.to(elem.querySelector('img'), { autoAlpha: 0 }, i + 0.75)
            }

        });
        
    }, [philoRef])

  return (
    <>
      <div className="scroll-container">
        <div className="section-left">
          <h1 className='left-text-1'>This is an example of pinned elements and scrollTrigger</h1>
          <h1 className='left-text-2' ref={enjoyRef}>Enjoy!</h1>
        </div>
        <div className="section-right">
          <video id="video" className="vid" ref={videoRef} src={scrollVideo}></video>
        </div>
      </div>

      <section ref={philoRef} className="philosophie">
                <div ref={wrapperRef} className="wrapper">
                    {/* <div class="indicators">
      <div class="indicator"></div>
      <div class="indicator"></div>
      <div class="indicator"></div>
      <div class="indicator"></div>
      <div class="indicator"></div>
    </div> */}
                    <div className="point">
                        <article>
                            <h3>Title 1</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </article>
                        <img ref={imgRef} src={img1} alt="random" width="500" height="300" />
                    </div>
                    <div className="point">
                        <article>
                            <h3>Title 2</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </article>
                        <img ref={imgRef} src={img2} alt="random" width="500" height="300" />
                    </div>
                    <div className="point">
                        <article>
                            <h3>Title 3</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </article>
                        <img ref={imgRef} src={img3} alt="random" width="500" height="300" />
                    </div>
                    <div className="point">
                        <article>
                            <h3>Title 4</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </article>
                        <img ref={imgRef} src={img1} alt="random" width="500" height="300" />
                    </div>
                    <div className="point">
                        <article>
                            <h3>Title 5</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </article>
                        <img ref={imgRef} src={img2} alt="random" width="500" height="300" />
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