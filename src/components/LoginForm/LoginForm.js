import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styling/Loginform.css";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../pictures/flick_logo.png";

const LoginForm = () => {
	const navigate = useNavigate();
	const [passwordVisible, setPasswordVisible] = useState(false);

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	const handleLogin = (e) => {
		e.preventDefault();
		navigate("/dashboard");
	};

	return (
		<div className="logincontainer login-container">
			<div className="loginwrapper login-wrapper">
				<form onSubmit={handleLogin}>
					<img src={logo} alt="App Logo" width="100" />
					<h1 className="loginformtitle login">Login</h1>
					<div className="input-box">
						<input type="text" placeholder="Username" required />
						<FaUser className="icon" />
					</div>
					<div className="input-box">
						<input
							type={passwordVisible ? "text" : "password"}
							placeholder="Password"
							required
						/>

						<span className="toggle-icon" onClick={togglePasswordVisibility}>
							{passwordVisible ? <FaEye /> : <FaEyeSlash />}
						</span>
					</div>
					<div className="logintext remember-forgot">
						<label>
							<input type="checkbox" /> Remember me
						</label>
						<p>
							<span
								className="forgot-text"
								onClick={() => navigate("/forgotpassword")}
							>
								Forgot Password?
							</span>
						</p>
					</div>

					<button type="submit">Login</button>

					<div className="loginlink signup-link">
						<p>
							Don't have an account?
							<span
								className="logintext signup-text"
								onClick={() => navigate("/signup")}
							>
								Sign Up
							</span>
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
