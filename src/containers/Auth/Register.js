import React, { useState } from 'react';
import { colors } from '../../res/colors';
import {
    makeStyles,
} from "@mui/styles";
import { Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import { Service } from '../../config/service';
import { login } from '../../utils';

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
        backgroundColor: colors.backgroundPrimary,
    },
    imageLogo: {
        width: '100%',
    },
    loginForm: {
        backgroundColor: colors.backgroundPrimary,
        paddingHorizontal: 20,
        alignItems: 'center',
        height: '100%'
    },
    input: {
        padding: 0,
        width: '90%',
    },
    button: {
        width: '90%',
        alignItems: 'center',
        backgroundColor: 'green',
    }
}))

const Register = ({ handleSubmit, loading }) => {
    const classes = useStyles();
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');


    const handleData = async (event) => {
        event.preventDefault();

        if (password !== repeatPassword) alert('Password do not matched!')

        let obj = {
            username: userName,
            email: email,
            password: password,
        };
        handleSubmit(obj);
    }
    return (
        <div className={classes.loginForm}>
            <form onSubmit={handleData}>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <Typography component="h1" variant="body1" style={{ paddingBottom: 8 }}>
                            USER NAME*
                        </Typography>
                        <TextField
                            type="text"
                            placeholder="User Name"
                            name="Password"
                            variant="outlined"
                            value={userName}
                            onChange={(event) => setUserName(event.target.value)}
                            required
                            autoFocus
                            className={classes.input}
                            color="secondary"
                        />
                    </Grid>
                    <Grid item>
                        <Typography component="h1" variant="body1" style={{ paddingBottom: 8 }}>
                            EMAIL*
                        </Typography>
                        <TextField
                            type="text"
                            placeholder="EMAIL*"
                            name="Email"
                            variant="outlined"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            required
                            autoFocus
                            className={classes.input}
                            color="secondary"
                        />
                    </Grid>
                    <Grid item>
                        <Typography component="h1" variant="body1" style={{ paddingBottom: 8 }}>
                            PASSWORD*
                        </Typography>
                        <TextField
                            type="password"
                            placeholder="PASSWORD*"
                            name="password"
                            variant="outlined"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                            color="secondary"
                            className={classes.input}
                        />
                    </Grid>
                    <Grid item>
                        <Typography component="h1" variant="body1" style={{ paddingBottom: 8 }}>
                            REPEAT PASSWORD*
                        </Typography>
                        <TextField
                            type="password"
                            placeholder="PASSWORD*"
                            name="password"
                            variant="outlined"
                            value={repeatPassword}
                            onChange={(event) => setRepeatPassword(event.target.value)}
                            required
                            color="secondary"
                            className={classes.input}
                        />
                    </Grid>
                    <Grid item>
                        <Button
                            variant="contained"
                            type="submit"
                            className={classes.button}
                        >
                            {
                                loading ?
                                    <CircularProgress size={24} style={{ color: 'white' }} />
                                    :
                                    'Register'
                            }
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
};


export default Register;


