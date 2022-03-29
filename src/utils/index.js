// import { Service } from "../config/service";
import { Apis } from "../config";
import Axios from '../axios'

const TOKEN_KEY = 'jwt';
const TYPE_KEY = 'type';

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
}

export const isType = (token) => {
    localStorage.setItem(TYPE_KEY, token);
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(TYPE_KEY);
}

export const isLogin = async () => {
    // let auth = false
    if(localStorage.getItem(TOKEN_KEY)) {
        return true
    }
    return false
    // try {
    //     await Axios.post(Apis.verifyToken, {}, getToken())
    //     auth = true
    // } catch(e) {
    //     auth = false
    // }
    // return auth
}

export const isGetType = () => {
    if (localStorage.getItem(TYPE_KEY)) {
        return true;
    }
    return false;
}

export const getValue = (value) => {
    let result = '';
    if (typeof value === 'string') {
        if (value.includes('_')) {
            let splitValue = value.split('_');
            for (const part in splitValue) {
                let element = splitValue[part];
                element = element.charAt(0).toUpperCase() + element.slice(1);
                result = result + ' ' + element;
            }
            return result;
        }
        else if (value.includes('-')) {
            let splitValue = value.split('-');
            for (const part in splitValue) {
                let element = splitValue[part];
                element = element.charAt(0).toUpperCase() + element.slice(1);
                result = result + ' ' + element;
            }
            return result;
        }
        else {
            result = value.replace(/([A-Z])/g, ' $1');
            return result.charAt(0).toUpperCase() + result.slice(1);
        }
    } else return value;
};

export const enterPressed = (ev) => {
    let result = false;
    if (ev.key === 'Enter') {
        ev.preventDefault();
        result = true;
    }
    return result;
};

export const getRandomColor = () => {
    var letters = '01234567';
    var color = '#aa';
    for (var i = 0; i < 2; i++) {
        color += letters[Math.floor(Math.random() * 8)];
    }
    color += 'aa';
    return color;
}
