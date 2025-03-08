import React from "react";
import MovieCard from "./MovieCard";

function SearchPage() {
  const testMovies = [
    { id: 1, title: "Inception", image: "https://via.placeholder.com/150" },
    { id: 2, title: "Avengers", image: "https://via.placeholder.com/150" },
  ];

  return (
    <div className="search-page">
      <h2>Testing MovieCard Component</h2>
      <div className="movie-grid">
        {testMovies.map((movie) => (
          <MovieCard key={movie.id} title={movie.title} image={movie.image} />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
