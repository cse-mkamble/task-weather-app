import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

import Home from "../src/containers/Home";
import Login from "../src/containers/Authentication/Login";
import Registration from "../src/containers/Authentication/Registration";
import Logout from "../src/containers/Authentication/Logout";

import { isUserAuthenticated } from './redux/Actions/authAction';

import './index.scss';

export default class Application extends React.Component {

  render() {

    let message = ''
    let successMessage = localStorage.getItem('successMessage');
    if (successMessage) {
      message = <Alert bsStyle="success">{successMessage}</Alert>;
      localStorage.removeItem('successMessage');

    }

    let navigationItems = "";
    if (isUserAuthenticated()) {
      navigationItems = <ul><li><Link to='/logout'>Logout</Link></li></ul>;
    } else {
      navigationItems = <ul><li><Link to='/'>Home</Link></li><li><Link to='/login'>Login</Link></li><li><Link to='/registration'>Register</Link></li></ul>;
    }

    return (<div className='application'>
      <Router>
        <div className="container">
          <header>
            <h1>Weather App</h1>
            <div>{message}</div>
            <nav>{navigationItems}</nav>
            <div style={{ width: '100%', marginTop: '10px', border: 0, borderTop: '1px solid' }} />
          </header>
          <main>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/registration" component={Registration} />
            <Route path="/logout" component={Logout} />
          </main>
        </div>
      </Router>
    </div>);
  }
}

ReactDOM.render(
  <Application />
  , document.getElementById('app-main'));