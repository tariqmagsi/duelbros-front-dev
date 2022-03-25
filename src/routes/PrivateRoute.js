import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { isLogin } from '../utils';


console.log('file: PrivateRoute.js => line 4 => isLogin', isLogin());


const PrivateRoute = () => {
    const auth = null; // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return isLogin() ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;