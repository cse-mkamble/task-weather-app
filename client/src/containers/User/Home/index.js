import React from 'react';
import { useHistory } from 'react-router-dom';
import AOS from 'aos';
import { Box, Container, Button, Grid, Typography, Toolbar } from '@mui/material';

import HeadBar from "../../../components/HeadBar";
import AllWeather from "../../Admin/DashBoard/AllWeather";
import { isAuthenticate } from "../../../redux/actions/authAction";

import 'aos/dist/aos.css';

export default function Home() {
    AOS.init();
    const history = useHistory();

    return (isAuthenticate() ? (<Box>
        <HeadBar />
        <hr />
        <AllWeather />
    </Box>) : (<Box>
        <Toolbar>
            <Typography component='h3' variant='h4' sx={{ m: 'auto' }}>Weather App</Typography>
        </Toolbar>
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
    </Box>));
}
