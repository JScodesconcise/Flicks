import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styling/SignupForm.css';
import logo from "../../logo.svg";

const Signupform = () => {
    const navigate = useNavigate(); // Initialize navigate function

    return (
        <div className="signup-wrapper">
            <form>
            <img src={logo} alt="App Logo" width="100" />

                <h1>Sign Up</h1>
                <div className="input-box">
                    <input type="text" placeholder="First Name" required />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Last Name" required />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Email" required />
                </div>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                </div>
                <button type="submit">Sign Up</button>

                
                <div className="login-link">
                    <p>
                        Already have an account?  
                        <span className="login-text" onClick={() => navigate("/login")}>
                            Login
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Signupform;
