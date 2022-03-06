import React from 'react';
import { API_KEY, API_URL } from '../../config';
import "./index.scss";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    render() {
        return (<div>Home</div>);
    }
}
