import LoginForm from './components/LoginForm/LoginForm.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupForm from './components/SignupForm/SignupForm.js';
import ForgotPasswordForm from './components/ForgotPasswordForm/ForgotPasswordForm.js';

function App() {
  return (
      <Router>  {/* Wrap everything inside Router */}
          <Routes>
              <Route path="/login" element={<LoginForm />} /> 
              <Route path="/signup" element={<SignupForm />} /> 
              <Route path="/forgotpassword" element={<ForgotPasswordForm />} /> 
          </Routes>
      </Router>
  );
}

export default App;
