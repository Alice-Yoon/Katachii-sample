import Axios from 'axios';
import { URL } from '../utils/url';

const BASE_URL = URL;

const CartAPI = {
    addToCart: async (payload, cookie) => {
        try {
            const res = await Axios.post(`${BASE_URL}/api/users/addToCart`, payload, {headers: {"Authorization": cookie.x_auth}});

            return res;
        } catch (error) {
            console.error(error);
        }
    },
    getCartItems: async (cookie) => {
        try {
            const res = await Axios.get(`${BASE_URL}/api/users/getCartItems`, {headers: {"authorization": cookie.x_auth}});

            return res;
        } catch (error) {
            console.error(error);
        }
    },
    deleteCartItem: async (productId, cookie) => {
        try {
            const res = await Axios.delete(`${BASE_URL}/api/users/deleteCartItem?productId=${productId}`, {headers: {"authorization": cookie.x_auth}});

            return res;
        } catch (error) {
            console.error(error);
        }
    }
}

export default CartAPI;