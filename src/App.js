<<<<<<< HEAD
import LoginForm from "./components/LoginForm/LoginForm.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm/SignupForm.js";
import ForgotPasswordForm from "./components/ForgotPasswordForm/ForgotPasswordForm.js";
import "./App.css";
import FlicksLandingPage from "./components/MainPage.js";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<FlicksLandingPage />} />
				<Route path="/SignUp" element={<SignupForm />} />
				<Route path="/Login" element={<LoginForm />} />
				<Route path="/ForgotPassword" element={<ForgotPasswordForm />} />
			</Routes>
		</Router>
=======
import React from "react";
import SearchPage from "./components/SearchPage"; // Import the Search Page
import logo from "./logo.svg";
import "./App.css";
import MoviePreferencesModal from "./components/MoviePreferencesModal.jsx";

function App() {
	return (
		<div>
			<SearchPage />
		</div>
>>>>>>> 3b7e1e7e73b37839c2cb32bbdc5a8f2538efa95b
	);
}

export default App;
