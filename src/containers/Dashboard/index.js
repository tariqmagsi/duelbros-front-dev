/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import {
    makeStyles,
} from '@mui/styles';
import { colors } from '../../res/colors';

const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({

}));

const Dashboard = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>Dashboard</h1>
        </div>
    )

}

export default Dashboard;
