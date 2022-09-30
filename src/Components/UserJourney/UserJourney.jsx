import "./UserJourney.css"
import path from "../../Images/path-2.png"
import { GiMeshNetwork } from 'react-icons/gi';
import { GiReceiveMoney } from 'react-icons/gi';
import { BsFillPiggyBankFill } from 'react-icons/bs';
import { BsReceiptCutoff } from 'react-icons/bs';


import React from 'react'

const UserJourney = () => {
    return (
        <div>
            <section className="body-1">
                {/* <div className="logo-carousel"><BusinessLogos /></div> */}
                <div className="path"><img src={path} alt="path" /></div>
                <div className="emoji-1">
                    <h2>🧑‍💻</h2>
                    <div className="blob"></div>
                    <div className="info-card">
                        <div className="info-text">
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum enim necessitatibus ea, exercitationem quos repellendus totam, dolore incidunt distinctio atque adipisci autem id ratione nemo officiis temporibus iste, rem in.</p>
                        </div>
                        <div className="icon">
                            <div className="icon-inner">
                                <h4><GiMeshNetwork /></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="emoji-2">
                    <h2>🏦</h2>
                    <div className="blob"></div>
                    <div className="info-card">
                    <div className="info-text">
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum enim necessitatibus ea, exercitationem quos repellendus totam, dolore incidunt distinctio atque adipisci autem id ratione nemo officiis temporibus iste, rem in.</p>
                        </div>
                        <div className="icon">
                            <div className="icon-inner">
                                <h4><BsFillPiggyBankFill /></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="emoji-3">
                    <h2>💳</h2>
                    <div className="blob"></div>
                    <div className="info-card">
                    <div className="info-text">
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum enim necessitatibus ea, exercitationem quos repellendus totam, dolore incidunt distinctio atque adipisci autem id ratione nemo officiis temporibus iste, rem in.</p>
                        </div>
                        <div className="icon">
                            <div className="icon-inner">
                                <h4><BsReceiptCutoff /></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="emoji-4">
                    <h2>💸</h2>
                    <div className="blob"></div>
                    <div className="info-card">
                    <div className="info-text">
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum enim necessitatibus ea, exercitationem quos repellendus totam, dolore incidunt distinctio atque adipisci autem id ratione nemo officiis temporibus iste, rem in.</p>
                        </div>
                        <div className="icon">
                            <div className="icon-inner">
                                <h4><GiReceiveMoney /></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default UserJourney