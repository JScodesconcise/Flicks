import "./MoviePage.css";
import StarRate from "./StarRate";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const MoviePage = ({ movieName, year }) => {
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("useEffect triggered with:", movieName, year);
        console.log('Backdrop Path:', movie?.backdropPath);
        if (!movieName) return;
    
        const fetchMovie = async () => {
            try {
                console.log("Fetching movie with:", movieName, year);
                const searchRes = await fetch(
                    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(movieName)}&year=${year}`
                );
                if (!searchRes.ok) {
                    throw new Error("Failed to fetch search results");
                }

                const searchData = await searchRes.json();
                console.log("searchData:", searchData);

                if (searchData.results.length === 0) {
                    setError("Movie not found");
                    return;
                }
    
                const movieId = searchData.results[0].id;

                const detailsRes = await fetch(
                    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=release_dates,credits,videos`
                );

                const details = await detailsRes.json();
                console.log('Fetched movie details:', details);

                const usRelease = details.release_dates?.results.find(r => r.iso_3166_1 === "US");
                const advisoryRating = usRelease?.release_dates.find(r => r.certification)?.certification || "N/A";

                const director = details.credits.crew.find(person => person.job === "Director")?.name || "Unknown";
                const genres = details.genres.map(genre => genre.name).join(", ");
                const cast = details.credits.cast.slice(0, 5).map(actor => actor.name).join(", ");
                const trailer = details.videos.results.find(video => video.site === "YouTube" && video.type === "Trailer");
                const trailerUrl = trailer ? `https://www.youtube.com/embed/${trailer.key}` : null;

                setMovie({
                    title: details.title,
                    overview: details.overview,
                    releaseYear: details.release_date?.split("-")[0],
                    runtime: details.runtime,
                    posterPath: details.poster_path,
                    advisoryRating: advisoryRating,
                    director: director,
                    genres: genres,
                    cast: cast,
                    trailerUrl: trailerUrl,
                });
          
                setError(null);

            } catch (err) {
                console.error("Error fetching movie details:", err);
                setError("Failed to fetch movie details");
                setMovie(null);
            }   
        };
    
        fetchMovie();
    }, [movieName, year]);
    
    if (error) return <p>{error}</p>;
    if (!movie) return <p>Loading...</p>;


    return (
        <div className="movie-page">
            <header className="header">
                <h1 className="title">{movie.title}</h1>
                <h2 className="year">{movie.releaseYear}</h2>
            </header>

            <div className="bl-circle"></div>
            <div className="tl-small-circle"></div>
            <div className="tl-circle"></div>
        
            <div className="content-wrapper">
                <section className="main-content" id="sub">
                    <section className="info">
                        <p><strong>Directed by:</strong> {movie.director}</p>
                        <p><strong>{movie.advisoryRating}, {movie.runtime} min</strong></p>
                    </section>

                    <section className="genres">
                        <p><em>{movie.genres}</em></p>
                    </section>

                    <section className="overview">
                        <h3>Overview</h3>
                        <p>{movie.overview}</p>
                    </section>

                    <section className="rating">
                        <h3>Rate</h3>
                        <StarRate />
                    </section>

                    <section className="cast">
                        <h3>Cast</h3>
                        <p><em>{movie.cast}</em></p>
                    </section>

                    <section className="trailer">
                        <h3>Trailer</h3>
                        {movie.trailerUrl ? (
                            <iframe
                                width="60%"
                                height="315"
                                frameBorder="0"
                                src={movie.trailerUrl}
                                title="YouTube video player"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        ) : (
                            <p>No trailer available</p>
                        )}
                    </section>
                </section>

                <div className="sidebar">
                    <img className="poster" src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt="Poster"></img>
                    <button className="watchlist-button">Add to watchlist</button>
                </div>
            </div>
        </div>      
    );
};

export default MoviePage;
