import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import { Box, Container, Button, Grid, AppBar, Link, Toolbar, Typography } from '@mui/material';

import HeadBar from "./components/HeadBar";

import { Home } from "./containers/User";
import { Login, Register } from "./containers/Auth";
import { DashBoard } from "./containers/Admin";

import { AdminProtectedRoute } from "./ProtectedRoute";

import { isAuthenticate } from "./redux/actions/authAction";
import { getAllWeatherReq } from "./redux/actions/weatherAction";
import DataProvider from './redux/store';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Main() {
  AOS.init();
  const history = useHistory();

  return (isAuthenticate() ? <Box>
    <HeadBar />
    <hr />
    <Home />
  </Box> : <Box>
    <Container maxWidth="sm">
      <Box data-aos="zoom-in">
        <Box sx={{ mt: 5 }}>
          <Typography component='p' variant='h5' textAlign='center' >Hello, you are not logged in.</Typography>
          <Typography component='p' variant='h6' textAlign='center' sx={{ mt: 2 }} >When you do this, you will be able to compile a list of cities (which will be saved in next session) for future use.</Typography>
        </Box>
        <Grid container justifyContent="center" >
          <Grid item sx={{ mt: 4 }}>
            <Button size='large' variant="contained" onClick={() => history.push("/login")} >login</Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  </Box>)
}

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
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />

      <AdminProtectedRoute
        exact={true}
        path="/admin/dashboard"
        component={DashBoard}
      />
    </Switch>
  </BrowserRouter>);
}

ReactDOM.render(
  <DataProvider>
    <Application />
  </DataProvider>,
  document.getElementById('root')
);
