import React from 'react';
import useProvideAuth from "../hooks/userProvideAuth";
import authContext from "../context/authContext";

export default function AuthProvider({ children }) {
    const auth = useProvideAuth();
    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}