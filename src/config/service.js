import { getToken } from '../utils';
import { Apis, get, post, put } from './';

const token = getToken()

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
    verifyToken: async (data, token) => {
        let result = await post(Apis.verifyToken, data, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    getUsers: async () => {
        let result = await get(Apis.getUsers, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    getModerators: async () => {
        let result = await get(Apis.getModerators, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    getPlayers: async () => {
        let result = await get(Apis.getPlayers, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    getProfile: async () => {
        let result = await get(Apis.getProfile, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    updateAdminProfile: async (data) => {
        let result = await put(Apis.updateAdminProfile, data, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
};


