import "../styling/MainPageNavbar.css";
import logo from "../pictures/flick_logo.png";

function MainPageNavBar({ handleLoggedInCheck, handleSignup, handleLogin }) {
	return (
		<>
			<nav className="nav-container">
				<div className="logo-container">
					<img src={logo} alt="flicks logo"></img>
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

export default MainPageNavBar;
