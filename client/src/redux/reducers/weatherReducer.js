import { GLOBALTYPES } from '../actions/globalTypes';
import { WEATHER_TYPES } from '../actions/weatherAction';

const initialState = {}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GLOBALTYPES.WEATHER:
            return action.payload;
        case WEATHER_TYPES.GET_WEATHERS:
            return action.payload;
        default:
            return state;
    }
}


export default weatherReducer;