import Axios from 'axios';
import { URL } from '../utils/url';

const BASE_URL = URL;

const API = {
    // deletePaymentInfo: async (payload) => {
    //     try {
    //         const res = await Axios.delete(`${BASE_URL}/api/payments/deletePaymentInfo?paymentId=${payload}`);

    //         return res;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // },
};

export default API;