import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styling/Loginform.css";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../styling/flick_logo.png";

const LoginForm = () => {
	const navigate = useNavigate();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const togglePasswordVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		setMessage("");
		setLoading(true);

		try {
			//change url based on deployment
			const response = await axios.post("http://127.0.0.1:8030/auth/login", {
				username,
				password,
			});

			if (response.status === 200) {
				navigate("/"); //Redirect user after login
			}
		} catch (error) {
			setMessage(error.response?.data?.detail || "Invalid login credentials.");
			console.error("Login Error:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="logincontainer login-container">
			<div className="loginwrapper login-wrapper">
				<form onSubmit={handleLogin}>
					<img src={logo} alt="App Logo" width="100" />
					<h1 className="loginformtitle login">Login</h1>

					{message && <p className="message">{message}</p>}

					<div className="input-box">
						<input
							type="text"
							placeholder="Username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
						<FaUser className="icon" />
					</div>

					<div className="input-box">
						<input
							type={passwordVisible ? "text" : "password"}
							placeholder="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
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

					<button type="submit" disabled={loading}>
						{loading ? "Logging in..." : "Login"}
					</button>

					<div className="loginlink signup-link">
						<p>
							Don't have an account?
							<span className="logintext signup-text" onClick={() => navigate("/signup")}>
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
