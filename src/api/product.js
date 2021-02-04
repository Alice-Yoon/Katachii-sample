import Axios from 'axios';
import { URL } from '../utils/url';

const BASE_URL = URL;

const ProductAPI = {
    // getProducts: async (pageNumber) => {
    getProducts: async () => {
        try {
            // const res = await Axios.get(`${BASE_URL}/api/products/getProducts?pageNumber=${pageNumber}`);
            const res = await Axios.get(`${BASE_URL}/api/products/getProducts`);

            return res;
        } catch (error) {
            console.error(error);
        }
    },
    getCategorizedProducts: async (category) => {
        try {
            const res = await Axios.get(`${BASE_URL}/api/products/getCategorizedProducts?category=${category}`);

            return res;
        } catch (error) {
            console.error(error);
        }
    },
    getProductById: async (productId) => {
        try {
            const res = await Axios.get(`${BASE_URL}/api/products/product_by_id?id=${productId}`);

            return res;
        } catch (error) {
            console.error(error);
        }
    },
    deleteProduct: async (productId, cookie) => {
        try {
            const res = await Axios.delete(`${BASE_URL}/api/products/deleteProduct?productId=${productId}`, {headers: {"Authorization": cookie.x_auth}});

            return res;
        } catch (error) {
            console.error(error);
        }
    }
}

export default ProductAPI;