import React from "react";
import { Link } from 'react-router-dom';
import "../styles/navbar.css";

export default function Navbar({ setInputValue, inputValue, search }) {
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
      <Link to={`/playlist`}>
       <button className="navbar-playlist"> My playlist</button>
       </Link>
    </div>
  );
}