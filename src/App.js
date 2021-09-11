import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "http://localhost:3000/login";
  };
  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <Link to="/login">LogIn</Link>
          <Link to="/bubblepage">Bubble Page</Link>
          <a onClick={logout} data-testid="logoutButton" href="#">
            logout
          </a>
        </header>
        <PrivateRoute exact path="/bubblepage" component={BubblePage} />
        <Route path="/login" component={Login} />
        <Route path="/" />
      </div>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.
