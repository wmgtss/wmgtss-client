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

const register = (user: RegisterDto) => {
    return axios.post(API_URL + '/auth/signup', user, {
        withCredentials: true,
    });
};

const login = (user: LoginDto) => {
    console.log(API_URL);
    return axios.post(API_URL + '/auth/login', user, { withCredentials: true });
};

export default { register, login };
