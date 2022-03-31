import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { isLogin } from '../utils';

const PrivateRoute = () => {
    const auth = useAuth();
    console.log('file: PrivateRoute.js => line 8 => PrivateRoute => auth', auth.user);
    return auth?.user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;