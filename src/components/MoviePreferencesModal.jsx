import Select from "react-select"
import genres from "../Data/genres.json"

const mappedGenres = genres.map((name) => ({
    value: name.toLowerCase(),
    label: name,
  }));

function MoviePreferencesModal() {
    return(
        <div>
            <div>
                <h1>Set movie preferences</h1>
                <h2>Preferred Genres</h2>
                <Select options={mappedGenres}/>
                <h2>Preferred Genres</h2>
                <h2>What are Your 3 Favourite Movies</h2>
                <Select/>
                <h2>What is your mood right now</h2>
                <Select/>
                <h2>Do you Prefer Older Movies or Recent Movies</h2>
                <Select/>
                <button>SUBMIT</button>
            </div>
        </div>
    )
}

export default MoviePreferencesModal;