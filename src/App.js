import "./App.css";
import { useState, useEffect} from "react";
import { Navbar, MovieList, Playlist } from "./components";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

/* npm install react-router-dom@5.2.0 */

function App() {
  const API_BASE_URL = "https://www.omdbapi.com";
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");

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
    
    <div className="main">
   

    <Router>
          <Switch>
            <Route exact path="/">
            <Navbar
            search={search}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <MovieList isLoading={isLoading} movieList={movies} />
            </Route>
            <Route  path="/playlist">
           <Playlist />
            </Route>
            </Switch>
    
          </Router>
    </div>
  );
}

export default App;