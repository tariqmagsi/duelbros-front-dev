import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { isLogin } from '../utils';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {

    const auth = null;
    return (
        auth ? <Outlet /> : <Navigate to="/login" />

    );
};

export default PublicRoute;