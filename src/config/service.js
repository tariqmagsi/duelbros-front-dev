import { getToken } from '../utils';
import { Apis, get, post, patch } from './';


export const Service = {
    login: async (data) => {
        let result = await post(Apis.login, data);
        if (result.status === 200) return result.data;
        else throw result;
    },
    register: async (data) => {
        let result = await post(Apis.register, data);
        if (result.status === 200) return result.data;
        else throw result;
    },
    verifyToken: async (data) => {
        let result = await post(Apis.verifyToken, data);
        if (result.status === 200) return result.data;
        else throw result;
    },
};


