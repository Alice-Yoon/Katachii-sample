import Axios from 'axios';
import { URL } from '../utils/url';

const BASE_URL = URL;

const UserAPI = {
    signup: async (payload) => {
        try {
            const res = await Axios.post(`${BASE_URL}/api/users/register`, payload);

            return res;
        } catch (error) {
            console.error(error);
        }
    },
    login: async (payload) => {
        try {
            const res = await Axios.post(`${BASE_URL}/api/users/login`, payload);

            return res;
        } catch (error) {
            console.error(error);
        }
    },
    logout: async (cookie) => {
        try {
            const res = await Axios.get(`${BASE_URL}/api/users/logout`, {headers: {"Authorization": cookie.x_auth}});
            
            return res;
        } catch (error) {
            console.error(error);
        }
    },
    auth: async (cookie) => {
        try {
            const res = await Axios.get(`${BASE_URL}/api/users/auth`, {headers: {"Authorization": cookie.x_auth}});

            return res;
        } catch (error) {
            console.error(error);
        }
    },
    deleteAccount: async (cookie) => {
        try {
            const res = await Axios.delete(`${BASE_URL}/api/users/deleteAccount`, {headers: {"Authorization": cookie.x_auth}});

            return res;
        } catch (error) {
            console.error(error);
        }
    }
};

export default UserAPI;