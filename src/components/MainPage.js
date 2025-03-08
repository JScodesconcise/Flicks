import React, {useState} from 'react';
import '../styling/MainPage.css';



const FlicksLandingPage = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoggedInCheck = (scenario) => {
    if (isLoggedIn) {
      switch (scenario) {
        case 'search':
          console.log('go to search page');
          break;
        case 'profile':
          console.log('go to profile');
          break;
        default:
          console.log('error');
      }
    }
    else{
      console.log('go login or signup')
      alert('please sign up or login')
    }
  }

  const handleLogin = () => {
    setIsLoggedIn(true);
    alert('You are now logged in!');
  };
  
  const handleSignup = () => {
    if (isLoggedIn){
      alert('already logged in')
    }else {
      alert('Redirecting to signup page...');
    }
    
  };


  return (
    <div className="frame-2">
      <nav className="nav-container">
        <div className="logo-container">
          <div className="flick-logo-2"></div>
        </div>
        <div className="nav-buttons">
          <button className="nav-button home-button" onClick={()=> handleLoggedInCheck('profile')}>
            Profile
          </button>  
          <button className="nav-button about-button" onClick={handleSignup}>
            SignUp
          </button> 
          <button className="nav-button login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </nav>
      <main className="content-container">
        <div className="content-wrapper">
          <div className="logo-title-container">
            <div className="logo-title-row">
              <div className="flick-logo-1"></div>
              <h1 className="flicks-title">FLICKS</h1>
            </div> 
            <button className="main-button" onClick={()=> handleLoggedInCheck('search')}>
              Search
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FlicksLandingPage;