import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export interface LoginDto {
    email: string;
    password: string;
}

export interface RegisterDto {
    name: string;
    email: string;
    password: string;
}

// Submit provided data to create an account
const register = (user: RegisterDto) => {
    return axios.post(API_URL + '/auth/signup', user, {
        withCredentials: true,
    });
};

// Submit credentials to log in
const login = (user: LoginDto) => {
    return axios.post(API_URL + '/auth/login', user, { withCredentials: true });
};

// Log out - this essentially just sets the JWT cookie to null, so isn't truly
// invalidating the session
const logout = () => {
    return axios.post(API_URL + '/auth/logout', {}, { withCredentials: true });
};

const functions = { register, login, logout };
export default functions;
