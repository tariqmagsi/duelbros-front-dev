import React, { useState } from 'react';
import { colors } from '../../res/colors';
import {
    makeStyles,
} from "@mui/styles";
import images from '../../assets/index';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button, CircularProgress, Grid, Paper, TextField, Typography } from '@mui/material';
import Login from './Login';
import Register from './Register';
import { Service } from '../../config/service';
import { login } from '../../utils';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: colors.backgroundPrimary,
    },
    loginContainer: {
        backgroundColor: colors.black,
        borderRadius: 10,
        overflow: 'hidden',
        flexDirection: 'row',
        display: 'flex',
        width: '50%'
    },
    tabs: {
        backgroundColor: 'red',
    },
    imageLogo: {
        width: '100%',
    },
    loginForm: {
        backgroundColor: 'red',
        paddingHorizontal: 20,
        alignItems: 'center',
        height: '100%'
    },
    input: {
        padding: 0,
        width: '90%',
    }
}))

const Index = (props) => {

    console.log('file: Index.js => line 48 => Index => props', props);
    let navigate = useNavigate();

    const classes = useStyles();
    const [value, setValue] = useState('one');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleLogin = async (data) => {
        setLoading(true);
        try {
            const result = await Service.login(data)
            console.log('file: Index.js => line 66 => handleSubmit => result', result);
            login(result.token);
            navigate("../dashboard", { replace: true });
        } catch (error) {
            // alert(error)
            console.log('Inside Catch => ', error);
        } finally {
            setLoading(false)
        }
    };

    const handleRegister = async (data) => {
        setLoading(true);
        try {
            const result = await Service.register(data)
            console.log('file: Index.js => line 66 => handleSubmit => result', result);
            login(result.token);
            navigate("../dashboard", { replace: true });
        } catch (error) {
            // alert(error)
            console.log('Inside Catch => ', error);
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className={classes.root}>
            <div className={classes.loginContainer}>
                <div style={{ width: '50%' }}>
                    <Box >
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            className={classes.tabs}
                            // indicatorColor="secondary"
                            aria-label="secondary tabs example"
                            TabIndicatorProps={{ style: { background: colors.primary } }}
                        >
                            <Tab value="one" label="Login" />
                            <Tab value="two" label="Register" />
                        </Tabs>
                    </Box>
                    {
                        value === 'one' ?
                            <Login
                                loading={loading}
                                handleSubmit={handleLogin}
                            /> :
                            <Register
                                loading={loading}
                                handleSubmit={handleRegister}
                            />
                    }
                </div>

                <div style={{ width: '50%' }}>
                    <img src={images.homeLogo}
                        className={classes.imageLogo}
                    />
                </div>
            </div>
        </div>
    );
};


export default Index;


