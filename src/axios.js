import axios from 'axios';

const baseURL = process.env.REACT_APP_SERVER_BASE_URL;

const instance = axios.create({
    baseURL,
});

export default instance;
