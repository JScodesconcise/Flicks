import React from "react";
import "../styling/MovieDetails.css"; // Import CSS file

function MovieDetails({ title, year, director, rating, description, image }) {
  return (
    <div className="movie-details">
      <div className="movie-header">
        <h1>{title}</h1>
        <h2>{year}</h2>
      </div>
      <p><strong>Directed by:</strong> {director}</p>
      <p><strong>Rating:</strong> {rating} ⭐</p>
      <p>{description}</p>
      <img src={image} alt={title} className="movie-poster-large" />
    </div>
  );
}

export default MovieDetails;
