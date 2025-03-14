import React, { useState } from "react";
import "../styling/MainPage.css";
import MainPageNavBar from "./MainPageNavbar";
import logo from "../pictures/flick_logo.png";
import { useNavigate } from "react-router-dom";

const FlicksLandingPage = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const navigate = useNavigate();

	const handleLoggedInCheck = (scenario) => {
		if (isLoggedIn) {
			navigate("/Search");
		} else {
			navigate("/SignUp");
		}
	};
	const handleLogin = () => {
		setIsLoggedIn(true);
		alert("You are now logged in!");
	};

	const handleSignup = () => {
		if (isLoggedIn) {
			alert("already logged in");
		} else {
			alert("Redirecting to signup page...");
		}
	};
	return (
		<div className="frame-2">
			<MainPageNavBar
				handleLoggedInCheck={handleLoggedInCheck}
				handleLogin={handleLogin}
				handleSignup={handleSignup}
			/>
			<main className="content-container">
				<div className="logo-title-container">
					<div className="logo-title-row">
						<img src={logo}></img>
						<h1 className="flicks-title">FLICKS</h1>
					</div>
					<div className="main-button-container">
						<button
							className="main-button"
							onClick={() => handleLoggedInCheck("search")}
						>
							Search
						</button>
					</div>
				</div>
			</main>
		</div>
	);
};

export default FlicksLandingPage;
