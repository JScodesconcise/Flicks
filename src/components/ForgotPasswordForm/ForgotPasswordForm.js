import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styling/ForgotPasswordForm.css";
import { MdEmail } from "react-icons/md";
import logo from "../../logo.svg";

const ForgotPasswordForm = () => {

    return (
        <div className="forgot-wrapper">
            <form>
            <img src={logo} alt="App Logo" width="100" />

                <h1>Forgot Password</h1>

                
                <div className="input-box">
                    <input type="text" placeholder="Email" required />
                    <MdEmail className="icon" />
                </div>



                <button type="submit">Send Email</button>

               
            </form>
        </div>
    );
};

export default ForgotPasswordForm;
