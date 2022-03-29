import React, { useState } from 'react';
import { colors } from '../../res/colors';
import {
    makeStyles,
} from "@mui/styles";
import images from '../../assets/index';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Login from './Login';
import Register from './Register';
import { Service } from '../../config/service';
import { login } from '../../utils';
import { useNavigate } from 'react-router-dom';
// import CustomizedDialogs from '../../components/Dialog';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        color: "white",
    },
    loginContainer: {
        // backgroundColor: colors.black,
        borderRadius: 0,
        height: '550px',
        overflow: 'hidden',
        flexDirection: 'row',
        display: 'flex',
    },
    tabs: {
        backgroundColor: colors.backgroundPrimary,
        color: "white",
        paddingTop: 10,
        paddingLeft: 50
    },
    imageLogo: {
        width: '100%',
        height: '550px'
    },
    loginForm: {
        backgroundColor: 'red',
        paddingHorizontal: 20,
        alignItems: 'center',
        height: '100%'
    },
    input: {
        padding: 0,
        width: '100%',
    }
}))

const Index = (props) => {

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
            if(result.data.user.role === 'admin') {
                navigate("/admin_dashboard/users", { replace: true });
            } else navigate("../profile", { replace: true });
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
            if(result.data.user.role === 'admin') {
                navigate("../admin_dashboard/users", { replace: true });
            } else navigate("../profile", { replace: true });
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
                    <Box>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            className={classes.tabs}
                            aria-label="secondary tabs example"
                            TabIndicatorProps={{ style: { background: colors.primary } }}
                        >
                            <Tab value="one" label="Login" className="fontSizeChange" style={{ color: value === 'one' ? colors.primary : "white" }} />
                            <Tab value="two" label="Register" className="fontSizeChange" style={{ color: value === 'two' ? colors.primary : "white" }} />
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
                    <img src={images.homeLogo} alt="" className={classes.imageLogo}/>
                </div>
            </div>
        </div>
    );
};


export default Index;


