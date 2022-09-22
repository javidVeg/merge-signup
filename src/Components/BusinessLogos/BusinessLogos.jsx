import React from 'react'
import "./BusinessLogos.css"
import bus1 from "../../Images/bus-1.webp"
import bus2 from "../../Images/bus-2.png"
import bus3 from "../../Images/bus-3.png"
import bus4 from "../../Images/bus-4.png"
import bus5 from "../../Images/bus-5.png"
import bus6 from "../../Images/bus-6.png"
import bus7 from "../../Images/bus-7.png"
import bus8 from "../../Images/bus-8.png"
import bus9 from "../../Images/bus-9.png"

const BusinessLogos = () => {
    return (
        <div className='carousel-container'>
            
            <div className='logos1'>
            <div className="logos"><img src={bus1} alt="business-1" /></div>
            <div className="logos"><img src={bus2} alt="business-2" /></div>
            <div className="logos"><img src={bus3} alt="business-3" /></div>
            <div className="logos"><img src={bus4} alt="business-4" width="150px" /></div>
            <div className="logos"><img src={bus5} alt="business-5" /></div>
            <div className="logos"><img src={bus6} alt="business-6" /></div>
            <div className="logos"><img src={bus7} alt="business-7" /></div>
            <div className="logos"><img src={bus8} alt="business-8" /></div>
            {/* <div className="logos"><img src={bus9} alt="business-9" /></div> */}
            </div>
            <div className='logos1' aria-hidden="true">
            <div className="logos"><img src={bus1} alt="business-1" /></div>
            <div className="logos"><img src={bus2} alt="business-2" /></div>
            <div className="logos"><img src={bus3} alt="business-3" /></div>
            <div className="logos"><img src={bus4} alt="business-4" width="150px" /></div>
            <div className="logos"><img src={bus5} alt="business-5" /></div>
            <div className="logos"><img src={bus6} alt="business-6" /></div>
            <div className="logos"><img src={bus7} alt="business-7" /></div>
            <div className="logos"><img src={bus8} alt="business-8" /></div>
            {/* <div className="logos"><img src={bus9} alt="business-9" /></div> */}
            </div>
        </div>
    )
}

export default BusinessLogos