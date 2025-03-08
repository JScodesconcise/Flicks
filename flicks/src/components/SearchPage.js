import React, { useState, useEffect } from "react";
import "../styling/SearchPage.css";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar"; // Import Navbar

function SearchPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Simulate fetching from a database
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data))
      .catch((err) => console.error("Error loading movies:", err));
  }, []);

  return (
    <div className="search-page">
      <Navbar /> {/* Navbar Added Here */}
      
      <div className="search-container">
        <input type="text" className="search-box" placeholder="Search for your favorite movies..." />
      </div>

      <h2 className="section-title">SEARCH FOR YOUR FAVORITE MOVIES</h2>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} image={movie.image} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
