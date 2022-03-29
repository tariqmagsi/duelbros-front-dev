import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { isLogin } from '../utils';



const PrivateRoute = () => {
    const auth = isLogin(); // determine if authorized, from context or however you're doing it
    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;