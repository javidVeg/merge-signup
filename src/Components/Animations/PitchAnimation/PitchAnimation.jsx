import "./PitchAnimation.css"
import { useInterval} from "react-use"

import React from 'react'
import { useState } from "react"
import { useEffect } from "react"

const PitchAnimation = () => {
    const pitch1Array = "increased credit".split("")
    const pitch2Array = "increased rewards".split("")
    const [items, setItems] = useState(pitch1Array)
    const [count, setCount] = useState(0)
    const [play, setPlay] = useState(true)

    useInterval(                                        //@ useInterval = EVERY 6 SECONDS THE FUNCTION WILL GET RAN
        () => {
            // @ANIMATES ~pitch1Array~ //
            setItems(pitch2Array)
            setCount(count + 1)                         //@ SETS COUNT TO 1 AND THEN THE IF STATEMENT GETS READ WHICH SETS COUNT BACK TO 0

            // @ANIMATES ~pitch2Array~ //               //@ THIS FUNCTION IS NOT A LOOP
            if (count == 1) {
                setCount(0)
                setItems(pitch1Array)
            }
        },
        play ? 6000 : null

    )

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //     //@ ANIMATES ~pitch2Array~ AFTER TIMEOUT
    //         setItems(pitch2Array)
    //         setPlay(true)
    //     }, 4000)

    // return () => clearTimeout(timer)
    // },[])

    // console.log(pitch1Array)
    
  return (
    <div className="pitch-anim-container">
        {items.map((item, index) => (
            <span key={index}>{item}</span>
        ))}
    </div>
  )
}

export default PitchAnimation