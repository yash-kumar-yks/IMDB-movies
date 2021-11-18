import "./App.css";
import { useState, useEffect } from "react";
import { Navbar, Playlist } from "./components";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { Container } from "react-bootstrap";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
/* npm install react-router-dom@5.2.0 */

function App() {
  
  return (

    <div className="main">


      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Navbar} />
            <PrivateRoute exact path="/playlist" component={Playlist} />
            <Route path='/login'>
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