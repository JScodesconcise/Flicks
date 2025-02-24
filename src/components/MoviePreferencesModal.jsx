import Select from "react-select"
import genres from "../Data/genres.json"

const mappedGenres = genres.map((name) => ({
    value: name.toLowerCase(),
    label: name,
  }));

function MoviePreferencesModal() {
    return(
        <>
            <div>
                <Select options={mappedGenres}/>
            </div>
        </>
    )
}

export default MoviePreferencesModal;