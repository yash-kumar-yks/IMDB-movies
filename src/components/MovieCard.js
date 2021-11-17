import React from "react";
import firebase from "@firebase/app-compat";

import "../styles/movie-card.css";

export default function MovieCard({ movie, arr }) {
  
  const handleClick=(e)=>{
    if(e.target.innerText==="+"){
      e.preventDefault();
      firebase.firestore().collection('users').add({
        Poster: movie.Poster,
        Title: movie.Title,
        Year:movie.Year
    });
      e.target.innerText="-";
      e.target.style.backgroundColor="yellow";
      arr.push(movie);
    }
    else{
      e.target.innerText="+";
      e.target.style.backgroundColor="lightgreen";
      arr.map((data,index)=> {if(data == movie){
        arr.splice(index, 1);
      }})
      
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