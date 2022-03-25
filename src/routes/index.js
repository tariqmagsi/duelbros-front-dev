import React, { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../containers/Dashboard'
import Login from '../containers/Auth/Index';
import NotFound from './NotFound';
import Home from '../containers/App/Home';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path='/' element={<PrivateRoute />}>
                        <Route exact path='/dashboard' element={<Dashboard />} />
                    </Route>
                    <Route exact path='/home' element={<Home />} />
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='/' element={<NotFound />} />
                </Routes>
            </Fragment>
        </BrowserRouter>

    );
}

export default AppRoutes;