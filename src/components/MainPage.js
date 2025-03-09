import React, { useState } from "react";
import "../styling/MainPage.css";
import "../styling/MainPageNavbar.css";
import logo from "../styling/flick_logo.png";

function NavBar({ handleLoggedInCheck, handleSignup, handleLogin }) {
	return (
		<>
			<nav className="nav-container">
				<div className="logo-container">
					<img src={logo}></img>
				</div>
				<div className="nav-buttons">
					<button
						className="nav-button home-button"
						onClick={() => handleLoggedInCheck("profile")}
					>
						Profile
					</button>
					<button className="nav-button about-button" onClick={handleSignup}>
						Sign Up
					</button>
					<button className="nav-button login-button" onClick={handleLogin}>
						Login
					</button>
				</div>
			</nav>
		</>
	);
}
const FlicksLandingPage = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLoggedInCheck = (scenario) => {
		if (isLoggedIn) {
			switch (scenario) {
				case "search":
					console.log("go to search page");
					break;
				case "profile":
					console.log("go to profile");
					break;
				default:
					console.log("error");
			}
		} else {
			console.log("go login or signup");
			alert("please sign up or login");
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
			<NavBar
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
