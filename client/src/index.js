import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from "../src/containers/Home";
import Login from "../src/containers/Authentication/Login";
import Registration from "../src/containers/Authentication/Registration";
import Logout from "../src/containers/Authentication/Logout";

import './index.scss';

function Application() {
  return (<BrowserRouter>
    <div className="container">
      <header>
        <h1>Weather App</h1>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </main>
    </div>
  </BrowserRouter>);
}

ReactDOM.render(
  <Application />
  , document.getElementById('app-main'));