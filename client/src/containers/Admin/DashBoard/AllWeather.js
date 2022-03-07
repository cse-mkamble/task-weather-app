import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { Box, CircularProgress, Typography, Grid } from '@mui/material';

import WeatherCard from "../../../components/Card";
import { getAllWeatherReq } from "../../../redux/actions/weatherAction";

export default function AllWeather(props) {
  const { weather } = useSelector(state => state);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    dispatch(getAllWeatherReq());
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  if (loading) {
    return (<Box sx={{ width: '100%', my: 4, display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>);
  }

  return (<Box>
    {weather && weather.weathers ? weather.weathers.map((item, key) => {
      return (<WeatherCard item={item} key={key} />)
    }) : (<Box sx={{ width: '100%', my: 4 }}>
      <Typography component='h3' variant='h5' textAlign='center'>NO Data</Typography>
    </Box>)}
  </Box>);
};
