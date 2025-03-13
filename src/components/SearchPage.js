import React, { useEffect, useRef, useState } from "react";
import "../styling/SearchPage.css"
import logocard from "../pictures/flickslogocard.svg"

function SearchPage() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchResults, setSearchresults] = useState([]);
  const [focused, setFoused] = useState(false);
  const inputRef = useRef(null);
  const baseURL = "https://image.tmdb.org/t/p/w500";
  const baseURLSmaller = "https://image.tmdb.org/t/p/w92";
  const debouncedUpdateSearchResults = debounce(updateSearchResults, 200)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_API_ACCESS_TOKEN}`
    }
  };

  function handleBlur() {
    setFoused(false);
  }
  function handleFocus(){
    setFoused(true);
  }

  function debounce(func, delay){
    let timer;
    return function(...args){
      clearTimeout(timer)
      timer = setTimeout(() => {
        func(...args);
      }, delay)
    }
  }

  function handleSearchBarClick(){
    if(inputRef.current){
      inputRef.current.focus()
    }  
  }

  function updateSearchResults(query){
    fetch(`https://api.themoviedb.org/3/search/movie?query=${query.target.value}&language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setSearchresults(res.results.slice(0, 10).map((movie) => [movie.title, movie.poster_path, movie.release_date, movie.vote_average])))
      .catch(err => console.log(err))
  }

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(res => res.json())
    .then((res) => {
      setPopularMovies(res.results.slice(0, 10).map((input) => input.poster_path));
    }).catch(err => console.error(err));
  }, [options]);
  
  
  return (
    <div className="searchpage">
      <div className="search-wrapper">
        <div className = {`search-bar ${focused && searchResults.length > 0 ? "active" : ""}`} onClick={handleSearchBarClick}>
          <img src="/assets/search.svg" alt = "search"/>
          <input type="text" placeholder="Search" ref={inputRef} onFocus={handleFocus} onBlur={handleBlur} onChange={debouncedUpdateSearchResults}/>
        </div>
        {focused && <div className="search-results">
            {
              searchResults.map((input, i) => {
                return (
                  <div className="search-result-wrapper" key={`wrapper-${i}`}>
                    <img className={`search-result-image ${i}`} src={`${baseURLSmaller}${input[1]}`} key={`image ${i}`} onError={(e) => e.target.src = logocard}/>
                    <div className="search-result-info-wrapper">
                      <p className = {`search-result-name ${i}`} key={`movie-name ${i}`}>{input[0]}</p>
                      <p className = {`search-result-date ${i}`} key={`movie-year ${i}`}>{input[2].slice(0,4)}</p>
                      <p className = {`search-result-rating ${i}`} key={`movie-rating ${i}`}>{`Flicks Rating: ${input[3].toString().slice(0,3)}/10`}</p>
                    </div>
                  </div>
                );
              })
            }
          </div>}
      </div>
      <h1>Search for your favourite Movies</h1>
      <div className="searchPopularMoviesContainer">
        {
          popularMovies.map((input, i) => {
            return <img key={i} src={`${baseURL}${input}`} alt={`movie ${i}`} className={`popular-movie ${i}`}/>
          })
        }
      </div>
    </div>
  );
}

export default SearchPage;
