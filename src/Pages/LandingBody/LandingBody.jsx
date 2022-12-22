import React, { useState, useEffect } from 'react'
import mergeLogo from "../../Images/mergeLogo.png"
import SignUp from '../../Components/SignUp/SignUp'
import mergeImac from "../../Images/merge-imac.png"
import "./LandingBody.css"
import BusinessLogos from '../../Components/BusinessLogos/BusinessLogos'
import Pitch from '../../Components/Pitch/Pitch'
import smallB1 from "../../Images/merge-imac.png"
import UserJourney from '../../Components/UserJourney/UserJourney'
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { db } from "../../firebase"
import { collection, getDocs, addDoc } from "firebase/firestore"
import NewGSAPTest from '../../NewGSAPTest/NewGSAPTest'
import PitchAnimation from '../../Components/Animations/PitchAnimation/PitchAnimation'



const LandingBody = () => {
  const [inputData, setInputData] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const register = async () => {
    await addDoc(dataCollectionRef, { firstName: inputData.firstName, lastName: inputData.lastName, email: inputData.email })
  }


  const [data, setData] = useState([])
  const dataCollectionRef = collection(db, "merge-signup")

  useEffect(() => {
    const getData = async () => {
      const datas = await getDocs(dataCollectionRef)
      setData(datas.docs.map((doc) => ({ ...doc.data(), id: doc.id })))

    }

    getData()
  }, [])


  const notify = () => toast('Pre-registration successfully submitted!😎', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const onChange = (e) => {
    setInputData({
      ...inputData, [e.target.name]: e.target.value
    });
    //spreader preserves previous data so its not lost when updating the state!!!
  };





  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData)
    setInputData({ firstName: "", lastName: "", email: "" })
    register();
    notify();


  }
  return (
    <div className='landing-body'>
      <section className="hero">
        <div className="text-container">
          <Pitch />
          <div className="email-wrapper">
            <form className="form-container-2" >
              <input name="email" placeholder="Business Email" value={inputData.email} onChange={onChange} required />
              <button onClick={(e) => handleSubmit(e)}>Join Merge</button></form>
          </div>
        </div>
        <div className="hero-img">
          <img src={smallB1} alt="hero-img" />
        </div>
      </section>
      <div className="logo-carousel">
        <BusinessLogos />
      </div>
      <div className="gsap-section">
        <NewGSAPTest />
      </div>

      <div className="user-journey">
        <UserJourney />
      </div>

    </div>
  )
}

export default LandingBody