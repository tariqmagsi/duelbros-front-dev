import { post, get, put, zendesk_post, Apis } from '.';
import { getToken } from '../utils';

const token = localStorage.getItem('@userToken');



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
        let result = await post(Apis.verifyToken, data, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    getUsers: async (token) => {
        let result = await get(Apis.getUsers, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    getModerators: async (token) => {
        let result = await get(Apis.getModerators, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    getPlayers: async (token) => {
        let result = await get(Apis.getPlayers, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    getProfile: async () => {
        let result = await get(Apis.getProfile, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    updateAdminProfile: async (data, token) => {
        let result = await put(Apis.updateAdminProfile, data, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    createTicketZendesk: async (data) => {
        let result = await zendesk_post(Apis.zendeskTicket, data)
        if (result.status === 200 || result.status === 201) return result.data;
        else throw result;
    }
};


