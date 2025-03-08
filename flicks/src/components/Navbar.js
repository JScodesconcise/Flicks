import React from "react";
import "../styling/Navbar.css"; // Import CSS

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🎬 Flicks</div>
      <div className="nav-links">
        <button>Profile</button>
        <button>Sign In</button>
        <button>Register</button>
        <button>Search</button>
      </div>
    </nav>
  );
}

export default Navbar;
