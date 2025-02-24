import React from "react";
import "../styling/Navbar.css"; // Import CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🎬 Flicks</div>
      <div className="nav-links">
        <a href="#">Profile</a>
        <a href="#">Search</a>
        <a href="#">Watchlist</a>
      </div>
    </nav>
  );
}

export default Navbar;
