import "../styles/navbar.css";
import { useAuth } from "../contexts/AuthContext"
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom"

export default function Navbar({ setInputValue, inputValue, search }) {
  const { currentUser, logout } = useAuth()
  const [error, setError] = useState("");
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <div className="navbar">
    <h5>{currentUser}</h5>
    <strong>Email:</strong> {currentUser.email}
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
      <button className="navbar-button" onClick={handleLogout}> My playlist</button>
      <Link to={`/playlist`}>
       <button className="navbar-playlist"> My playlist</button>
       </Link>
    </div>
  );
}