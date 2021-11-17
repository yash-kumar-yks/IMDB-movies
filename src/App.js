import "./App.css";
import { useState, useEffect } from "react";
import { Navbar, MovieList, Playlist } from "./components";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { Container } from "react-bootstrap";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./components/ForgotPassword";
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
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/playlist" component={Playlist} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route>
              <Container

                style={{ minHeight: "100vh", marginTop: "70px", width: "40%" }}
              >
                <Login />
              </Container>
            </Route>

            <Route path="/signup">
              <Container

                style={{ minHeight: "100vh", marginTop: "70px", width: "40%" }}
              >
                <Signup />
              </Container>
            </Route>
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;