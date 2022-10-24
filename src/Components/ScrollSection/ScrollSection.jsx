import React, { useRef, useEffect } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ScrollSection.css"
import img1 from "../../Images/img1.png"
import img2 from "../../Images/img2.png"
import img3 from "../../Images/img3.png"
gsap.registerPlugin(ScrollTrigger);


const ScrollSection = () => {

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

export default ScrollSection