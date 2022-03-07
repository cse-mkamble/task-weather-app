import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import { Box, CircularProgress, Typography } from '@mui/material';

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
    {weather ? weather.weathers.map((item, key) => {
      return (<Box>
        <Typography>{item.country}</Typography>
      </Box>)
    }) : (<Box sx={{ width: '100%', my: 4 }}>
      <Typography component='h3' variant='h5' textAlign='center'>NO Data</Typography>
    </Box>)}
  </Box>);
};
