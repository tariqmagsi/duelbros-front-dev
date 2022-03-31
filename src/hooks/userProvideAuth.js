/* eslint-disable no-unused-expressions */
import { useState } from "react";
import { Service } from "../config/service";

export default function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signin = (data) => {
        console.log('file: userProvideAuth.js => line 10 => signin => data', data);
        setUser(data);
    };

    const signout = () => {
        localStorage.removeItem('@userToken');
        user ? setUser(null) : null;
    };

    const verifyToken = async () => {
        try {
            const token = localStorage.getItem('@userToken');
            console.log('file: userProvideAuth.js => line 22 => verifyToken => token', token);
            if (!token) return user ? setUser(null) : null;
            const result = await Service.verifyToken(token);
            console.log('file: userProvideAuth.js => line 25 => verifyToken => result', result);
            if (result) signin(result.data);
            else signout();
        } catch (err) {
            if (user) setUser(null);
        } finally {
            setLoading(false);
        }
    };

    return {
        user,
        loading,
        signin,
        signout,
        verifyToken,
    };
}
