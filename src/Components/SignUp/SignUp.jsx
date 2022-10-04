import "./SignUp.css"
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { db } from "../../firebase"
import { collection, getDocs, addDoc } from "firebase/firestore"
import { async } from "@firebase/util";


const SignUp = () => {
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
        <div>
            <form className="form-container" >
                <input name="firstName" placeholder="First Name" value={inputData.firstName} onChange={onChange} required />
                <input name="lastName" placeholder="Last Name" value={inputData.lastName} onChange={onChange} required />
                <input name="email" placeholder="Business Email" value={inputData.email} onChange={onChange} required />
                <button className="button-1" onClick={(e) => handleSubmit(e)}>Join Merge!</button></form>
        </div>
    )
}

export default SignUp