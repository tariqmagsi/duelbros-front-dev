import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import NotFound from './NotFound';
import Home from '../containers/App/index';
import Profile from '../containers/UserAccount/index';
import Players from '../containers/AdminDashboard/Players';
import Users from '../containers/AdminDashboard/Users';
import Moderators from '../containers/AdminDashboard/Moderators';
import AdminProfile from '../containers/AdminDashboard/AdminProfile';
import AuthDialog from '../containers/Auth/Dialog';
import UsersRole from '../containers/AdminDashboard/UserRole'
import useAuth from '../hooks/useAuth';

const AppRoutes = () => {

    const auth = useAuth();

    useEffect(auth.verifyToken, []);

    if (auth.loading) {
        return <div></div>
    } else {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/' element={<PrivateRoute />}>
                        {/* <Route exact path='/dashboard' element={<Dashboard />} /> */}
                        {/* <Route exact path='/home' element={<Home />} /> */}
                        <Route exact path='/profile' element={<Profile />} />
                        <Route exact path='/admin_dashboard/users' element={<Users />} />
                        <Route exact path='/admin_dashboard/players' element={<Players />} />
                        <Route exact path='/admin_dashboard/moderators' element={<Moderators />} />
                        <Route exact path='/admin_dashboard/profile' element={<AdminProfile />} />
                        <Route exact path='/admin_dashboard/userRole' element={<UsersRole />} />
                    </Route>
                    {/* <Route exact path='/login' element={<AuthDialog open={true} />} /> */}
                    <Route path='/' element={<NotFound />} />
                </Routes>
            </Fragment>
        </BrowserRouter>

    );
    }
}

export default AppRoutes;