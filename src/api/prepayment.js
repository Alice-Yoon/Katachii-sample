import Axios from 'axios';
import { URL } from '../utils/url';

const BASE_URL = URL;

const PrepaymentAPI = {
    addToPrePayment: async (productIdList, cookie) => {
        try {
            const res = await Axios.post(`${BASE_URL}/api/users/addToPrePayment`, productIdList, {headers: {"Authorization": cookie.x_auth}});
                
            return res;
        } catch (error) {
            console.error(error);
        }
    },
    removeFromPrepayment: async (productId, cookie) => {
        try {
            const res = await Axios.delete(`${BASE_URL}/api/users/removeFromPrepayment?productId=${productId}`, {headers: {"Authorization": cookie.x_auth}});

            return res;
        } catch (error) {
            console.error(error)
        }
    },
    removeAllPrepaymentItems: async (cookie) => {
        try {
            const res = await Axios.delete(`${BASE_URL}/api/users/removeAllPrepaymentItems`, {headers: {"Authorization": cookie.x_auth}});

            return res;
        } catch (error) {
            console.error(error)
        }
    },
}

export default PrepaymentAPI;