import React from "react";
import "../styling/SearchBar.css"; // Import CSS file

function SearchBar() {
  return (
    <div className="search-container">
      <input type="text" className="search-box" placeholder="Search for your favorite movies..." />
    </div>
  );
}

export default SearchBar;
