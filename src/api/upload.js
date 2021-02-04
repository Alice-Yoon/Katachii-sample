import Axios from 'axios';
import { URL } from '../utils/url';

const BASE_URL = URL;

const UploadAPI = {
    uploadImage: async (formData, config) => {
        try {
            const res = await Axios.post(`${BASE_URL}/api/products/uploadImage`, formData, config);
            // console.log("upload 이미지??", res)
            return res;
        } catch (error) {
            console.error(error);
        }
    },
    uploadProduct: async (payload, cookie) => {
        try {
            const res = await Axios.post(`${BASE_URL}/api/products/uploadProduct`, payload, {headers: {"Authorization": cookie.x_auth}});
            // console.log("upload 상품??", res);

            return res;
        } catch (error) {
            console.error(error);
        }
    },
}

export default UploadAPI;