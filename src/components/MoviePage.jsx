import "../styling/MoviePage.css"

const MoviePage = () => {
    return (
        <div className="movie-page">
            <header className="header">
                <h1 className="title">TITLE</h1>
                <h2 className="year">YEAR</h2>
            </header>

            <div class="bl-circle"></div>
            <div class="tl-small-circle"></div>
            <div class="tl-circle"></div>
        
            <div className="content-wrapper">
                <section className="main-content" id="sub">
                    <section className="info">
                        <p><strong>Directed by:</strong> [Director Name]</p>
                        <p><strong>Advisory Rating, Length</strong></p>
                    </section>

                    <section className="genres">
                        <p><em>[Genre List]</em></p>
                    </section>

                    <section className="overview">
                        <h3>Overview</h3>
                        <p>...</p>
                    </section>

                    <section className="rating">
                        <h3>Rate</h3>
                        <p className="stars">⭐ ⭐ ⭐ ⭐ ⭐</p>
                    </section>

                    <section className="cast">
                        <h3>Cast</h3>
                        <p><em>Name, Name, Name, Name</em></p>
                    </section>

                    <section className="trailer">
                        <h3>Trailer</h3>
                        <div className="trailer-placeholder"></div>
                    </section>
                </section>

                <aside className="sidebar">
                    <div className="poster-placeholder"></div>
                    <p><strong>Flicks Rating:</strong> n.n</p>
                    <button className="watchlist-button">Add to watchlist</button>
                </aside>
            </div>
        </div>      
    );
  };
  
  export default MoviePage;