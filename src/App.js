import LoginForm from "./components/LoginForm/LoginForm.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupForm from "./components/SignupForm/SignupForm.js";
import ForgotPasswordForm from "./components/ForgotPasswordForm/ForgotPasswordForm.js";
import "./App.css";
import FlicksLandingPage from "./components/MainPage.js";
import SearchPage from "./components/SearchPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<FlicksLandingPage />} />
				<Route path="/SignUp" element={<SignupForm />} />
				<Route path="/Login" element={<LoginForm />} />
				<Route path="/ForgotPassword" element={<ForgotPasswordForm />} />
				<Route path="/Search" element={<SearchPage />} />
			</Routes>
		</Router>
	);
}

export default App;
