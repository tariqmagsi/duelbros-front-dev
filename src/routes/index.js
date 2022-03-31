import React from 'react';
import AuthProvider from '../hoc/authProvider';
import RouteStack from './Routes';

const Routes = () => {
    return (
        <AuthProvider>
            <RouteStack />
        </AuthProvider>
    );
};

export default Routes;


