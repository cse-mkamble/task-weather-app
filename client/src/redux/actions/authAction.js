import { GLOBALTYPES } from './globalTypes'
import { postDataAPI } from '../../utils/fetchData'
import valid from '../../utils/valid'
import validator from 'validator';

export const login = (data) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } })
        const res = await postDataAPI('login', data)
        dispatch({
            type: GLOBALTYPES.AUTH,
            payload: {
                token: res.data.access_token,
                user: res.data.user
            }
        })

        localStorage.setItem("firstLogin", true)
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                success: res.data.msg
            }
        })

    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response.data.msg
            }
        })
    }
}

export const register = (data) => async (dispatch) => {
    try {
        dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
        const res = await postDataAPI('register', data);
        dispatch({ type: GLOBALTYPES.AUTH, payload: { token: res.data.access_token, user: res.data.user } });
        localStorage.setItem("firstLogin", true);
        dispatch({ type: GLOBALTYPES.ALERT, payload: { success: res.data.msg } });
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response.data.msg
            }
        })
    }
}

export const logout = () => async (dispatch) => {
    try {
        localStorage.removeItem('firstLogin')
        await postDataAPI('logout')
        window.location.href = "/"
    } catch (err) {
        dispatch({
            type: GLOBALTYPES.ALERT,
            payload: {
                error: err.response.data.msg
            }
        })
    }
}