/* eslint-disable no-unused-expressions */
import { useState } from "react";
import { Service } from "../config/service";

export default function useProvideAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signin = (data) => {
        setUser(data);
    };

    const signout = () => {
        localStorage.removeItem('@userToken');
        user ? setUser(null) : null;
    };

    const verifyToken = async () => {
        try {
            const token = localStorage.getItem('@userToken');
            if (!token) return user ? setUser(null) : null;
            const result = await Service.verifyToken(token);
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
