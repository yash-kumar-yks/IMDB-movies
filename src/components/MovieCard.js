import React from "react";

import "../styles/movie-card.css";

export default function MovieCard({ movie }) {
  const handleClick=(e)=>{
    if(e.target.innerText==="+"){
      e.target.innerText="-";
      e.target.style.backgroundColor="yellow";
    }
    else{
      e.target.innerText="+";
      e.target.style.backgroundColor="lightgreen";
    }
  }
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Title}</p>
      <p>Year: {movie.Year}</p>
      <button className="movie-card-button" onClick={handleClick}>+</button>
    </div>
  );
}