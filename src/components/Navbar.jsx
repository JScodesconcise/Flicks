import "../styling/MainPageNavbar.css";
import logo from "../pictures/flick_logo.png";
import { Link } from "react-router-dom";

function Navbar({ handleLoggedInCheck, handleSignup, handleLogin }) {
	return (
		<>
			<nav className="nav-container">
				<Link to="/" className="logo-container">
					<img src={logo} alt="flicks logo"></img>
				</Link>
				<div className="nav-buttons">
					<Link
						to="/Profile"
						className="nav-button home-button-all"
						onClick={() => handleLoggedInCheck("profile")}
					>
						Profile
					</Link>
					<Link
						to="/SignUp"
						className="nav-button about-button-all"
						onClick={handleSignup}
					>
						Sign Up
					</Link>
					<Link
						to="/Login"
						className="nav-button login-button-all"
						onClick={handleLogin}
					>
						Log in
					</Link>
					<Link to="/Search" className="nav-button search-button-all">
						Search
					</Link>
				</div>
			</nav>
		</>
	);
}
export default Navbar;
