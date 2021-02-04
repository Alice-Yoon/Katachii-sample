import Axios from 'axios';
import { URL } from '../utils/url';

const BASE_URL = URL;

const MyAPI = {
    getHistoryItems: async (cookie) => {
        try {
            const res = await Axios.get(`${BASE_URL}/api/users/getHistoryItems`, {headers: {"Authorization": cookie.x_auth}});

            return res;
        } catch (error) {
            console.error(error);
        }
    },
}

export default MyAPI;