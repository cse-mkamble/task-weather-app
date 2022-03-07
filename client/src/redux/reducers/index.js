import { combineReducers } from 'redux';
import auth from './authReducer';
import weather from './weatherReducer';

export default combineReducers({
    auth,
    weather
})