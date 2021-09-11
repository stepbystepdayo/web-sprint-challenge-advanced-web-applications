import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const defaultcredentials = {
    username: "",
    password: "",
  };
  const [credentials, setCredentials] = useState(defaultcredentials);

  const login = (event) => {
    event.preventDefault();
    //hit the login with post request
    if (
      credentials.username === "Lambda" &&
      credentials.password === "School"
    ) {
      return axios
        .post("http://localhost:5000/api/login", credentials)
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.payload);
        })
        .catch((err) => console.log(err));
      //if you success, store the token. if you failed you will return login page
    } else {
      return console.log("This is not correct");
    }
  };

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const error = "Username or Password not valid";
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            id="username"
            placeholder="Input Username"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            id="password"
            placeholder="Input Passwords"
          />
          <button id="submit">Log In</button>
        </form>
      </div>
      {(!credentials.username || !credentials.password) && (
        <p id="error" className="error">
          {error}
        </p>
      )}
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
