import "../styles/navbar.css";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom"
import axios from "axios";
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext";
import MovieList from "../components/MovieList";
export default function Navbar() {
  const [error, setError] = useState("");
  const history = useHistory();
  const { currentUser, logout } = useAuth()
  const API_BASE_URL = "https://www.omdbapi.com";
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  const search = async (e) => {
    if (e.code === "Enter") {
      setIsLoading(true);
      const response = await axios.get(
        API_BASE_URL + "/?s=" + inputValue + "&apikey=49a57d3"
      );
      // set data
      setMovies(response.data.Search);
      setIsLoading(false);
    }
  };

  

  return (
    <div className="navbar">
    
      <span className="heading">MOVIE DB</span>
      <input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyPress={search}
        type="text"
        placeholder="Search..."
        className="search-bar"
      />
      <h4>Hello : <span className="span-class">{currentUser.email}</span></h4>
      <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      <Link to={`/playlist`}>
       <button className="navbar-playlist"> My playlist</button>
       </Link>
    
      
       {movies && <MovieList isLoading={isLoading} movieList={movies} />}
    </div>
  );
}