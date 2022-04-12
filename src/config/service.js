import { post, get, put, zendesk_post, Apis, delete_post } from '.';
import { getToken } from '../utils';

const token = localStorage.getItem('@userToken');



export const Service = {
    login: async (data) => {
        let result = await post(Apis.login, data);
        if (result.status === 200) return result.data;
        else throw result;
    },
    register: async (data) => {
        let result = await post(Apis.CRUDUser, data);
        if (result.status === 200) return result.data;
        else throw result;
    },
    registerPlayer: async (data, token) => {
        let result = await post(Apis.CRUDPlayer, data, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    registerModerator: async (data, token) => {
        let result = await post(Apis.CRUDModerator, data, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    updatePlayer: async (data, token) => {
        let result = await put(`${Apis.CRUDPlayer}${data.id}`, data, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    deletePlayer: async (data, token) => {
        let result = await delete_post(`${Apis.CRUDPlayer}${data.id}`, null, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    deleteModerator: async (data, token) => {
        let result = await delete_post(`${Apis.CRUDModerator}${data.id}`, null, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    updateModerator: async (data, token) => {
        let result = await put(`${Apis.CRUDModerator}${data.id}`, data, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    updateUser: async (data, token) => {
        let result = await put(`${Apis.CRUDUser}${data.id}`, data, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    updateUserRole: async (data, token) => {
        let result = await put(`${Apis.updateUserRole}${data.id}`, data, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    deleteUser: async (data, token) => {
        let result = await delete_post(`${Apis.CRUDUser}${data.id}`, null, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    verifyToken: async (data) => {
        let result = await post(Apis.verifyToken, data, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    getUsers: async (token) => {
        let result = await get(Apis.CRUDUser, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    getAllUsers: async (token) => {
        let result = await get(Apis.getAllUsers, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    getModerators: async (token) => {
        let result = await get(Apis.CRUDModerator, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    getPlayers: async (token) => {
        let result = await get(Apis.CRUDPlayer, token);
        if (result.status === 200) return result.data;
        else throw result;
    },
    getProfile: async (token) => {
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


