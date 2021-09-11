//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in

import React from "react";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          console.log("token found, rendering component");
          return <Component {...props} />;
        } else {
          console.log("no token");
          alert("You do not have the token! Please log in! 😊");
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
