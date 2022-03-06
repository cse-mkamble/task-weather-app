import React from 'react';
import { Redirect } from 'react-router-dom';

import { getDataAPI } from '../../../utils/fetchData';
import { deauthenticateUser } from "../../../redux/Actions/authAction";

export default class Logout extends React.Component {
    componentWillMount() {
        deauthenticateUser();
        localStorage.removeItem('username');
        getDataAPI('auth/logout');
    }

    render() {
        return (<Redirect push to='/' />);
    }
}