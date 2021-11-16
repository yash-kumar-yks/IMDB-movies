import "./App.css";
import { useState } from "react";
import { Navbar, MovieList } from "./components";
import axios from "axios";

const API_BASE_URL = "https://www.omdbapi.com";
// &apikey=aa660442

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");

 
  const search = async (e) => {
    if (e.code === "Enter") {
      setIsLoading(true);
      const response = await axios.get(
        API_BASE_URL + "/?s=" + inputValue + "&apikey=aa660442"
      );
      // set data
      setMovies(response.data.Search);
      setIsLoading(false);
    }
  };

  return (
    <div className="main">
      <Navbar
        search={search}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      <MovieList isLoading={isLoading} movieList={movies} />
   
    </div>
  );
}

export default App;