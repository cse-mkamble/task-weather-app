import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "./containers/User/Home";
import Login from "./containers/Auth/Login";
import Register from "./containers/Auth/Register";
import DashBoard from "./containers/Admin/DashBoard";

import AdminProtectedRoute from "./ProtectedRoute/AdminProtectedRoute";

import { isAuthenticate } from "./redux/actions/authAction";
import { getAllWeatherReq } from "./redux/actions/weatherAction";
import DataProvider from './redux/store';

function Application() {

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticate()) {
      dispatch(getAllWeatherReq());
    }
  }, [isAuthenticate])

  return (<Router>
    <Switch>
      {/* Public Routes */}
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />

      <AdminProtectedRoute
        exact={true}
        path="/admin/dashboard"
        component={DashBoard}
      />
    </Switch>
  </Router>);
}

ReactDOM.render(
  <DataProvider>
    <Application />
  </DataProvider>,
  document.getElementById('root')
);
