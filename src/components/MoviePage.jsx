import "./MoviePage.css";
import StarRate from "./StarRate";

const MoviePage = ({ title, year, director, advisory, length, genres, overview, image, cast, flicksRating }) => {
    return (
        <div className="movie-page">
            <header className="header">
                <h1 className="title">{title}</h1>
                <h2 className="year">{year}</h2>
            </header>

            <div className="bl-circle"></div>
            <div className="tl-small-circle"></div>
            <div className="tl-circle"></div>
        
            <div className="content-wrapper">
                <section className="main-content" id="sub">
                    <section className="info">
                        <p><strong>Directed by:</strong> {director}</p>
                        <p><strong>{advisory}, {length}</strong></p>
                    </section>

                    <section className="genres">
                        <p><em>{genres.join(", ")}</em></p>
                    </section>

                    <section className="overview">
                        <h3>Overview</h3>
                        <p>{overview}</p>
                    </section>

                    <section className="rating">
                        <h3>Rate</h3>
                        <StarRate />
                    </section>

                    <section className="cast">
                        <h3>Cast</h3>
                        <p><em>{cast.join(", ")}</em></p>
                    </section>

                    <section className="trailer">
                        <h3>Trailer</h3>
                        <div className="trailer-placeholder"></div>
                    </section>
                </section>

                <div className="sidebar">
                    <img className="poster" src={image} alt="Poster"></img>
                    <p><strong>Flicks Rating:</strong> {flicksRating}</p>
                    <button className="watchlist-button">Add to watchlist</button>
                </div>
            </div>
        </div>      
    );
};

export default MoviePage;
