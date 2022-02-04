import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export interface PublicUserDto {
    id: string;
    name: string;
    createdOn: Date;
}

const getCurrentUser = () => {
    return axios.get(API_URL + '/user', {
        withCredentials: true,
    });
};

const changePassword = (newPassword: string) => {
    return axios.put(
        API_URL + '/user/password',
        { password: newPassword },
        { withCredentials: true },
    );
};

const functions = { getCurrentUser, changePassword };
export default functions;
