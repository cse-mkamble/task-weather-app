import { GLOBALTYPES } from './globalTypes';
import { postDataAPI, getDataAPI } from '../../utils/fetchData';

export const WEATHER_TYPES = {
    GET_WEATHERS: 'GET_WEATHERS'
}

export const addWeatherReq = async (data) => {
    try {
        let res = await postDataAPI('weather/add-weather', data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const getAllWeatherReq = () => async (dispatch) => {
    try {
        const res = await getDataAPI('weather/all-weather');
        dispatch({
            type: WEATHER_TYPES.GET_WEATHERS,
            payload: { ...res.data }
        })
    } catch (error) {
        console.log(error);
    }
}
