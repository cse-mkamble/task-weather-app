import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Alert, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

import { isUserAuthenticated, login } from "../../../redux/Actions/authAction";
import { GLOBALTYPES } from "../../../redux/Actions/globalTypes";

class Login extends React.Component {
    constructor(props) {
        super(props);
        const storedMessage = localStorage.getItem('successMessage');
        let successMessage = '';
        if (storedMessage) {
            successMessage = storedMessage;
            localStorage.removeItem('successMessage');
        }
        this.state = {
            errors: {},
            successMessage,
            user: { username: '', password: '' },
            userData: {}
        }
    }

    handleChange = (event) => {
        const field = event.target.id;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
            user: user
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const username = encodeURIComponent(this.state.user.username);
        const password = encodeURIComponent(this.state.user.password);
        const formData = `username=${username}&password=${password}`;
        this.props.onLogin(formData);
    }

    render() {

        if (isUserAuthenticated()) {
            return (
                <Redirect to={{
                    pathname: "/",
                    state: { referrer: this.state.userData }
                }} />
            );
        }

        var message = "";
        var usernameError = "";
        var passwordError = "";

        if (this.state.successMessage) {
            message = <Alert color="success">{this.state.successMessage}</Alert>;
        }

        if (this.state.errors.login) {
            message = <Alert color="danger">{this.state.errors.login}</Alert>;
        }

        if (this.state.errors.username) {
            usernameError = this.state.errors.username;
        }

        if (this.state.errors.password) {
            passwordError = this.state.errors.password;
        }

        if (this.props.auth.successLogin) {
            window.location.reload();
        }

        return (<form onSubmit={this.handleSubmit} className="form login-form">
            <h3>Login</h3>
            <div className="reg-wrapper">
                <div className='control-labels'>
                    <p>Username</p>
                    <p>Password</p>
                </div>
                <div className='form-groups'>
                    <FormGroup className="formgroup" controlId="username">
                        <FormControl type="text" value={this.state.user.username} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup className="formgroup" controlId="password">
                        <FormControl type="password" value={this.state.user.password} onChange={this.handleChange} />
                    </FormGroup>
                </div>
                <div className='reg-errors'>
                    <p>{usernameError}</p>
                    <p>{passwordError}</p>
                </div>
            </div>
            <Button className="form-button" type="submit">Submit</Button>
        </form>);
    }
}


const mapStateToProps = state => ({
    auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
    onLogin: (formData) => dispatch(login(formData))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
