import logo from "./logo.svg";
import "./App.css";
import MoviePage from "./components/MoviePage";

function App() {
	return (
		<MoviePage
            title="Inception"
            year="2010"
            director="Christopher Nolan"
            advisory="PG-13"
            length="2h 28m"
            genres={["Action", "Sci-Fi", "Thriller"]}
            overview="A thief who enters the dreams of others to steal secrets gets a final mission."
            rating={5} 
            image="https://i.ebayimg.com/00/s/MTYwMFgxMDk3/z/LlUAAOSwm8VUwoRL/$_57.JPG?set_id=880000500F"
            cast={["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]}
            flicksRating={4.3}
        />
	  );
}

export default App;
