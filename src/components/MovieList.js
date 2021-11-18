import React from "react";

import "../styles/movie-list.css";
import MovieCard from "./MovieCard";

export default function MovieList({ movieList, isLoading }) {

  if (isLoading) {
    return "Loading Movies please wait!";
  } else {
    return (
      <div className="movie-list">
        {movieList && movieList.map((movie) => (
          <MovieCard movie={movie} key={movie.imdbID}  />
        ))}
      </div>
    );
  }
}