import Axios from 'axios';
import { URL } from '../utils/url';

const BASE_URL = URL;

const ManageOrdersAPI = {
    manageOrders: async (cookie, pageNumber) => {
        try {
            const res = await Axios.get(`${BASE_URL}/api/payments/manageOrders?pageNumber=${pageNumber}`, {headers: {"Authorization": cookie.x_auth}});

            return res;
        } catch (error) {
            console.error(error);
        }
    },
    updateOrderStatus: async (payload, cookie) => {
        try {
            const res = await Axios.post(`${BASE_URL}/api/payments/updateOrderStatus`, payload, {headers: {"Authorization": cookie.x_auth}});

            return res;
        } catch (error) {
            console.error(error);
        }
    },
    updateDeliveryNumber: async (payload, cookie) => {
        try {
            const res = await Axios.post(`${BASE_URL}/api/payments/updateDeliveryNumber`, payload, {headers: {"Authorization": cookie.x_auth}});

            return res;
        } catch (error) {
            console.error(error);
        }
    },
    cancelThisOrder: async (payload, cookie) => {
        try {
            const res = await Axios.post(`${BASE_URL}/api/payments/cancelThisOrder`, payload, {headers: {"Authorization": cookie.x_auth}});

            return res;
        } catch (error) {
            console.error(error);
        }
    },
    removeOrderRecord: async (orderId, cookie) => {
        try {
            const res = await Axios.delete(`${BASE_URL}/api/payments/removeOrderRecord?orderId=${orderId}`, {headers: {"Authorization": cookie.x_auth}});

            return res;
        } catch (error) {
            console.error(error);
        }
    }
}

export default ManageOrdersAPI;