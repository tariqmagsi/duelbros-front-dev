import { toast } from 'react-toastify';
import Axios from '../axios';
import axios from 'axios'

import { errorHandler } from './errorHandler';

export const Apis = {
    login: 'users/auth',
    register: 'users',
    verifyToken: 'users/auth/verifyToken',
    registerPlayer: 'users/players',
    registerModerator: 'users/moderators',
    getUsers: 'users',
    getModerators: 'users/moderators',
    getPlayers: 'users/players',
    getProfile: 'users/profile',
    updateAdminProfile: 'users/admins',
    zendeskTicket: 'tickets.json',
    updatePlayer: 'users/players/',
    updateModerator: 'users/moderator/'
};

export const headers = {
    'content-type': 'application/json',
};

export const get = async (endPoint, token) => {
    try {
        const result = await Axios.get(endPoint, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return result;
    } catch (e) {
        console.log('post -> e', e);
        throw errorHandler(e);
    }
};

export const post = async (endPoint, data, token) => {
    try {
        const result = await Axios.post(endPoint, data, { headers: { Authorization: `Bearer ${token}` } });
        return result;
    } catch (e) {
        throw errorHandler(e);
    }
};

export const zendesk_post = async (endPoint, data) => {
    try {
        const result = await axios.post(`${process.env.REACT_APP_ZENDESK_URL}${endPoint}`, data, { auth: { username: `${process.env.REACT_APP_ZENDESK_USERNAME}/token`, password: process.env.REACT_APP_ZENDESK_TOKEN } });
        return result;
    } catch (e) {
        throw errorHandler(e);
    }
};

export const put = async (endPoint, data, token) => {
    try {
        const result = await Axios.put(endPoint, data, { headers: { Authorization: `Bearer ${token}` } });
        return result;
    } catch (e) {
        throw errorHandler(e);
    }
};

export const patch = async (endPoint, data, token, headers) => {
    try {
        const result = await Axios.patch(endPoint, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                ...headers,
            },
        });
        return result;
    } catch (e) {
        throw errorHandler(e);
    }
};

