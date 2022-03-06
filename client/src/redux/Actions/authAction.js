
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
