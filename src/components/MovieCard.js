import React from "react";
import firebase from "@firebase/app-compat";

import "../styles/movie-card.css";

export default function MovieCard({ movie }) {
  
  const handleClick=(e)=>{
    if(e.target.innerText==="+"){
      e.preventDefault();
      firebase.firestore().collection('users').add({
        Poster: movie.Poster,
        Title: movie.Title,
        Year:movie.Year
    });
     
     
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