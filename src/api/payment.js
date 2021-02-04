import Axios from 'axios';
import { URL } from '../utils/url';

const BASE_URL = URL;

const PaymentAPI = {
    getUsersInfo: async (cookie) => {
        try {
            const res = await Axios.get(`${BASE_URL}/api/users/getUsersInfo`, {headers: {"Authorization": cookie.x_auth}});

            return res;
        } catch (error) {
            console.error(error);
        }
    },
    getItemsById: async (ids, cookie) => {
        try {
            const res = await Axios.post(`${BASE_URL}/api/users/getItemsById`, ids, {headers: {"Authorization": cookie.x_auth}});

            return res;
        } catch (error) {
            console.error(error)
        }
    },
    paymentToBank: async (payload, cookie) => {
        try {
            const res = await Axios.post(`${BASE_URL}/api/payments/paymentToBank`, payload, {headers: {"Authorization": cookie.x_auth}});

            return res;
        } catch (error) {
            console.error(error);
        }
    },
    
}

export default PaymentAPI;

// BootPay
    // addPaymentInfo: async (payload, cookie) => {
    //     try {
    //         const res = await Axios.post(`${BASE_URL}/api/payments/addPaymentInfo`, payload, {headers: {"Authorization": cookie.x_auth}});

    //         return res;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // },
    // verifyPayment: async (payload, cookie) => {
    // verifyPayment: async (cookie) => {
    //     try {
    //         // const res = await Axios.get(`${BASE_URL}/api/payments/verifyPayment?receipt_id=${payload.receipt_id}&order_id=${payload.orderId}`, {headers: {"Authorization": cookie.x_auth}});
    //         // const res = await Axios.get(`${BASE_URL}/api/payments/verifyPayment?receipt_id=${payload.receipt_id}&order_id=${payload.orderId}`, {headers: {"Authorization": cookie.x_auth}});
    //         const res = await Axios.get(`${BASE_URL}/api/payments/verifyPayment`, {headers: {"Authorization": cookie.x_auth}});

    //         return res;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // },