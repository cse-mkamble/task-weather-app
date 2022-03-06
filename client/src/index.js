import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap';

import Home from "../src/containers/Home";
import Login from "../src/containers/Authentication/Login";
import Registration from "../src/containers/Authentication/Registration";
import Logout from "../src/containers/Authentication/Logout";

import { getDataAPI } from './utils/fetchData';
import { deauthenticateUser } from "./redux/Actions/authAction";

import { isUserAuthenticated } from './redux/Actions/authAction';
import DataProvider from './redux/store';

import './index.scss';

export default class Application extends React.Component {

  render() {

    let message = ''
    let successMessage = localStorage.getItem('successMessage');
    if (successMessage) {
      message = successMessage;
      localStorage.removeItem('successMessage');

    }

    let navigationItems = "";
    if (isUserAuthenticated()) {
      navigationItems = <ul><li><Button onClick={() => {
        deauthenticateUser();
        localStorage.removeItem('username');
        getDataAPI('auth/logout');
        window.location.reload();
      }} >Logout</Button></li></ul>;
    } else {
      navigationItems = <ul><li><Link to='/'>Home</Link></li><li><Link to='/login'>Login</Link></li><li><Link to='/registration'>Register</Link></li></ul>;
    }

    return (<div className='application'>
      <Router>
        <div className="container">
          <header>
            <h1>Weather App</h1>
            <nav>{navigationItems}</nav>
            <div style={{ width: '100%', marginTop: '10px', border: 0, borderTop: '1px solid' }} />
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
      </Router>
    </div>);
  }
}

ReactDOM.render(<DataProvider>
  <Application />
</DataProvider>, document.getElementById('app-main'));