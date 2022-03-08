import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Toolbar, Typography } from '@mui/material';

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
  }, [])

  return (<BrowserRouter>
    <Toolbar>
      <Typography component='h3' variant='h4' sx={{ m: 'auto' }}>Weather App</Typography>
    </Toolbar>

    {/* Public Routes */}
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />

    <AdminProtectedRoute
      exact={true}
      path="/admin/dashboard"
      component={DashBoard}
    />
  </BrowserRouter>);
}

ReactDOM.render(
  <DataProvider>
    <Application />
  </DataProvider>,
  document.getElementById('root')
);
