import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticate, isAdmin } from "../redux/actions/authAction";

const AdminProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAdmin() && isAuthenticate() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/admin",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default AdminProtectedRoute;
