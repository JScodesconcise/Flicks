import React, { useEffect, useRef, useState } from "react";
import "../styling/SearchPage.css"

function SearchPage() {
  const [popularMovies, setPopularMovies] = useState([]) 
  const inputRef = useRef(null);
  const baseURL = "https://image.tmdb.org/t/p/w500";

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_API_ACCESS_TOKEN}`
    }
  };

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(res => res.json())
    .then((res) => {
      setPopularMovies(res.results.slice(0, 10).map((input) => input.poster_path));
    }).then(() => console.log(popularMovies))
    .catch(err => console.error(err));
  });
  
  function handleSearchBarClick(){
    if(inputRef.current){
      inputRef.current.focus()
    }  
  }
  return (
    <div className="searchpage">
      <div className = "search-bar" onClick={handleSearchBarClick}>
        <img src="/assets/search.svg" alt = "search"/>
        <input type="text" placeholder="Search" ref={inputRef}/>
      </div>
      <h1>Search for your favorite Movies</h1>
      {
        popularMovies.map((input, i) => {
          return <img key={i} src={`${baseURL}${input}`} alt={`movie ${i}`}/>
        })
      }
    </div>
  );
}

export default SearchPage;
