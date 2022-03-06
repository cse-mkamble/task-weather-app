import { GLOBALTYPES } from './globalTypes';
import { postDataAPI } from '../../utils/fetchData';

export const register = (data) => async (dispatch) => {
    try {
        console.log(data);
        await postDataAPI('auth/reg', data).then((response) => {
            if (response.status === 200) {
                dispatch({ type: GLOBALTYPES.AUTH, payload: { successRegister: response.data.message } });
                localStorage.setItem('successMessage', response.data.message);
            }
        })
            .catch((error) => {
                console.log(error);
            });
    } catch (error) {

    }
}

export const login = (data) => async (dispatch) => {
    try {
        await postDataAPI('auth/login', data).then((response) => {
            if (response.status === 200) {
                dispatch({ type: GLOBALTYPES.AUTH, payload: { successLogin: response.data.message } });
                localStorage.setItem('successMessage', response.data.message);
                localStorage.setItem('username', response.data.userData.username)
                localStorage.setItem('token', response.data.token);
            }
        })
            .catch((error) => {
                console.log(error);
            });
    } catch (error) {

    }
}

export const authenticateUser = () => {
    localStorage.setItem('token', token);
}

export const isUserAuthenticated = () => {
    return localStorage.getItem('token') !== null;
}

export const deauthenticateUser = () => {
    localStorage.removeItem('token');
}

export const getToken = () => {
    return localStorage.getItem('token');
}
