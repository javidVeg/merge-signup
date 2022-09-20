import "./SignUp.css"
import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [inputData, setInputData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const notify = () => toast('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });;


    const { firstName, lastName, email } = inputData

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
        notify();


    }


    return (
        <div>
            <form >
                <input name="firstName" placeholder="First Name" value={inputData.firstName} onChange={onChange} />
                <input name="lastName" placeholder="Last Name" value={inputData.lastName} onChange={onChange} />
                <input name="email" placeholder="Email" value={inputData.email} onChange={onChange} />
                <button onClick={(e) => handleSubmit(e)}>Submit</button>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover
                />

            </form>
        </div>
    )
}

export default SignUp