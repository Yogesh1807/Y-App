import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLogin } from "../store/actions/auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log("PrivateRoute", rest);
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
