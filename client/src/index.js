import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Toolbar, Typography } from '@mui/material';

import { Home } from "./containers/User";
import { Login, Register } from "./containers/Auth";

import DataProvider from './redux/store';

function Application() {

  return (<BrowserRouter>
    <Toolbar>
      <Typography component='h3' variant='h4' sx={{ m: 'auto' }}>Weather App</Typography>
    </Toolbar>
    <Switch>
      {/* Public Routes */}
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />

    </Switch>
  </BrowserRouter>);
}

ReactDOM.render(
  <DataProvider>
    <Application />
  </DataProvider>,
  document.getElementById('root')
);
