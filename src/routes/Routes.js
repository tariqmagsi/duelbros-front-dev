import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../containers/Dashboard'
import Login from '../containers/Auth/Index';
import NotFound from './NotFound';
import Home from '../containers/App/Home';
import Profile from '../containers/UserAccount/Profile';
import Players from '../containers/AdminDashboard/Players';
import Users from '../containers/AdminDashboard/Users';
import Moderators from '../containers/AdminDashboard/Moderators';
import AdminProfile from '../containers/AdminDashboard/AdminProfile';
import AuthDialog from '../containers/Auth/Dialog';
import useAuth from '../hooks/useAuth';
import Loader from '../components/ui/Loader';
import MatchComponent from '../containers/Match/Match';

const AppRoutes = () => {

    const auth = useAuth();
    console.log('file: Routes.js => line 20 => AppRoutes => auth', auth);

    useEffect(auth.verifyToken, []);

    if (auth.loading) {
        return <Loader />
    } else {
        return (
            <BrowserRouter>
                <Fragment>
                    <Routes>
                        <Route exact path='/' element={<MatchComponent />}/>
                        <Route exact path='/' element={<PrivateRoute />}>
                            {/* <Route exact path='/dashboard' element={<Dashboard />} /> */}
                            <Route exact path='/admin_dashboard/users' element={<Users />} />
                            <Route exact path='/admin_dashboard/players' element={<Players />} />
                            <Route exact path='/admin_dashboard/moderators' element={<Moderators />} />
                            <Route exact path='/admin_dashboard/profile' element={<AdminProfile />} />
                            <Route exact path='/profile' element={<Profile />} />
                        </Route>
                        <Route exact path='/login' element={<AuthDialog open={true} />} />
                        <Route exact path='/home' element={<Home />} />
                        <Route exact path='/home' element={<Home />} />
                        <Route path='/' element={<NotFound />} />
                    </Routes>
                </Fragment>
            </BrowserRouter>

        );
    }
}

export default AppRoutes;