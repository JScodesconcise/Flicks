import React from "react";
import "../styling/SearchPage.css";
import Navbar from "./Navbar"; // Keep Navbar

function SearchPage() {
  return (
    <div className="search-page">
      <Navbar /> {/* Navbar Stays on Top */}

      {/* Decorative Background Circles */}
      <div className="bl-circle"></div>
      <div className="tl-small-circle"></div>
      <div className="tl-circle"></div>

      {/* Search Bar */}
      <div className="search-container">
        <input type="text" className="search-box" placeholder="Search" />
      </div>

      {/* Section Title */}
      <h2 className="section-title">Search for your favorite movies!</h2>
    </div>
  );
}

export default SearchPage;
