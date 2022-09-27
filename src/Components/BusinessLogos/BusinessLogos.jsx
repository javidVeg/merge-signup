import React from 'react'
import "./BusinessLogos.css"
import bank1 from "../../Images/bank1.png"
import bank2 from "../../Images/bank2.png"
import bank3 from "../../Images/bank3.png"
import bank4 from "../../Images/bank4.png"
import bank5 from "../../Images/bank5.png"
import bank6 from "../../Images/bank6.png"
import bank7 from "../../Images/bank7.png"
import bank8 from "../../Images/bank8.png"
import bank9 from "../../Images/citi.png"


const BusinessLogos = () => {
    return (
        <div>
            <div className="top-of-carousel">
                <h4>Giving You The Best, From The Best!</h4>
                <hr className='solid' />
            </div>
            <div className='carousel-container'>
                <div className='logo-box'>
                    <div className="logos"><img src={bank1} alt="hsbc" width="170px" /></div>
                    <div className="logos"><img src={bank2} alt="bofa" width="200px" /></div>
                    <div className="logos"><img src={bank3} alt="pnc" width="120px" /></div>
                    <div className="logos"><img src={bank4} alt="wellsf" width="170px" /></div>
                    <div className="logos"><img src={bank5} alt="chase" width="150px" /></div>
                    <div className="logos"><img src={bank6} alt="usaa" width="80px" /></div>
                    <div className="logos"><img src={bank7} alt="discover" width="120px" /></div>
                    <div className="logos"><img src={bank8} alt="amex" width="120px" /></div>
                    <div className="logos"><img src={bank9} alt="citi" width="80px" /></div>
                </div>
                <div className='logo-box' aria-hidden="true">
                    <div className="logos"><img src={bank1} alt="hsbc" width="170px" /></div>
                    <div className="logos"><img src={bank2} alt="bofa" width="200px" /></div>
                    <div className="logos"><img src={bank3} alt="pnc" width="120px" /></div>
                    <div className="logos"><img src={bank4} alt="wellsf" width="170px" /></div>
                    <div className="logos"><img src={bank5} alt="chase" width="150px" /></div>
                    <div className="logos"><img src={bank6} alt="usaa" width="80px" /></div>
                    <div className="logos"><img src={bank7} alt="discover" width="120px" /></div>
                    <div className="logos"><img src={bank8} alt="amex" width="120px" /></div>
                    <div className="logos"><img src={bank9} alt="citi" width="80px" /></div>
                </div>
            </div>
        </div>
    )
}

export default BusinessLogos