import Select from "react-select"
import AsyncSelect from "react-select/async";
import genres from "../Data/genres.json"
import "../styling/MoviePreferences.css"
import debounce from 'lodash/debounce';


const API_KEY = process.env.REACT_APP_TMBD_API_KEY

const fetchMovies = async(inputValue) => {
    if(!inputValue) return [];

    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(inputValue)}&include_adult=true&language=en-US&page=1`, options)
        if (!response.ok) console.log("Error fetching movie")
        const result = await response.json()

        return result.results.map((movie) =>{
            {
                value: movie.original_title.toLowerCase()
                label: movie.original_title
            }
            
        })

    }
    catch(error){
        console.log(error)
        return [];
    }
}

const loadOptions = async((inputValue) => {
    return fetchMovies(inputValue).catch(() => []);
}, 300);

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
};

const mappedGenres = genres.map((name) => ({
    value: name.toLowerCase(),
    label: name,
  }));

function MoviePreferencesModal() {
    return(
        <div>
            <div className="preference-modal">
                <div className="preference-modal-inside">
                    <h1>Set movie preferences</h1>
                    <h2>Preferred Genres</h2>
                    <Select options={mappedGenres} isMulti={true}/>
                    <h2>What are Your 3 Favourite Movies</h2>
                    <AsyncSelect loadOptions={loadOptions}/>
                    <h2>How Much Do You Enjoy Animated Movies (1-5)</h2>
                    <Select/>
                    <h2>What is your mood right now</h2>
                    <Select/>
                    <h2>Do you Prefer Older Movies or Recent Movies</h2>
                    <Select/>
                    <button>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default MoviePreferencesModal;



  
