import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

const Login = () => {
  const { push } = useHistory();
  const defaultcredentials = {
    username: "",
    password: "",
  };
  const [credentials, setCredentials] = useState(defaultcredentials);

  const login = (event) => {
    event.preventDefault();
    //hit the login with post request

    return axios
      .post("http://localhost:5000/api/login", credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        push("/bubbles");
      })
      .catch((err) => console.log(err));
    //if you success, store the token. if you failed you will return login page
  };

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const error = "Username or Password not valid";
  //replace with error state

  return (
    <div className="login-form">
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={login}>
          <input
            id="username"
            type="text"
            name="username"
            onChange={handleChange}
            placeholder="Input Username"
          />
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Input Passwords"
          />

          <p id="error" className="error">
            {error}
          </p>

          <button id="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"
