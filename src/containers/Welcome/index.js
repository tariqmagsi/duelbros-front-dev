import { makeStyles, Typography } from '@mui/material';
import React from 'react';
import images from '../../assets/'

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        flexDirection: 'column'
    },
    heading: {
        marginTop: theme.spacing(5),
        textAlign: 'center'
    },
}))

const Welcome = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img src={images.logo} alt="logo" />
            <Typography variant="h4" className={classes.heading}>Welcome to Seerhi</Typography>
            <Typography variant="body1" className={classes.heading}>
                The application has been developed to help people to find job in different category
            </Typography>
        </div>
    );
};


export default Welcome;
