import React, { useState, useEffect } from 'react';
import moment from 'moment';
import AOS from 'aos';
import { Box, Card, CardActions, CardContent, CardMedia, Button, Grid, Typography } from '@mui/material';

import rainy from "../../images/rainy.jpg";
import snowman from "../../images/Snow-man.jpeg";
import summer from "../../images/summer.jpg";

import 'aos/dist/aos.css';

export default function WeatherCard({ item }) {
    AOS.init();
    const [imagesUri, setImagesUri] = useState('');
    useEffect(() => {
        if (item.fahrenheit < 28) return setImagesUri(snowman);
        if (item.fahrenheit < 39) return setImagesUri(rainy);
        if (item.fahrenheit > 39) return setImagesUri(summer);

    }, []);
    return (<Box sx={{ my: 1 }}>
        <Box data-aos="zoom-out" sx={{ boxShadow: 1, borderRadius: 1, maxWidth: 320, margin: 'auto' }}>
            <CardMedia
                component="img"
                height="80"
                image={imagesUri}
                alt={imagesUri}
            />
            <CardContent sx={{ p: 1 }}>
                <Grid container>
                    <Grid item xs={8} >
                        <Box>
                            <Typography component='div' variant='h6'>{item.country}</Typography>
                            <Typography component='div'>{item.city}, {item.region}</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={4} sx={{ textAlign: 'end' }} >
                        <Typography component='div' variant='h5' >{item.celsius}°C</Typography>
                        <Typography component='div' variant='h5' >{item.fahrenheit}°F</Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                {moment(item.createdAt).fromNow()}
            </CardActions>
        </Box>
    </Box>)
}
