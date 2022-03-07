import { GLOBALTYPES } from './globalTypes';
import { postDataAPI } from '../../utils/fetchData';

export const isAuthenticate = () => {
    localStorage.getItem("jwt") ? JSON.parse(localStorage.getItem("jwt")) : false;
}

export const isAdmin = () => {
    localStorage.getItem("jwt") ? JSON.parse(localStorage.getItem("jwt")).user.role === 1 : false;
}

export const loginReq = async (data) => {
    console.log(data);
    try {

    } catch (error) {
        console.log(error);
    }
}

export const registerReq = async (data) => {
    try {
        let res = await postDataAPI('auth/register', data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const logoutReq = async () => {
    try {

    } catch (error) {
        console.log(error);
    }
}