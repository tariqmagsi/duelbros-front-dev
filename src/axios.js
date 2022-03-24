import axios from 'axios';

const baseURL = 'https://duelbros-dev-server.herokuapp.com/';

const instance = axios.create({
    baseURL,
});

export default instance;
