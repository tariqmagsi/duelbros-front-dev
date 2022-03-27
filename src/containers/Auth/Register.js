import React, { useState } from 'react';
import { colors } from '../../res/colors';
import {
    makeStyles,
} from "@mui/styles";
import { Button, CircularProgress, Grid, TextField, Container, Typography } from '@mui/material';
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
        // height: '100%',
        display: "flex",
        justifyContent: "center",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 50,
    },
    input: {
        padding: 0,
        width: '90%',
        backgroundColor: colors.backgroundInput,
    },
    button: {
        alignItems: 'center',
    }
}))

const Register = ({ handleSubmit, loading }) => {
    const classes = useStyles();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');


    const handleData = async (event) => {
        event.preventDefault();

        if (password !== repeatPassword) alert('Password do not matched!')

        let obj = {
            username,
            email,
            password,
        };
        handleSubmit(obj);
    }
    return (
        <div className={classes.loginForm}>
            <Container>
                <form onSubmit={handleData}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <span style={{ paddingBottom: 8, textAlign: "left", color: colors.textColor }} className="fontSizeChange">
                                USERNAME*
                            </span>
                            <TextField
                                type="text"
                                name="username"
                                variant="outlined"
                                value={username}
                                fullWidth
                                onChange={(event) => setUsername(event.target.value)}
                                required
                                sx={{ input: { color: 'white', fontSize: "12px" } }}
                                autoFocus
                                className={classes.input}
                                style={{ color: "white !important" }}
                                color="info"
                                size="small"
                            />
                        </Grid>
                        <Grid item>
                            <span style={{ paddingBottom: 8, textAlign: "left", color: colors.textColor }} className="fontSizeChange">
                                EMAIL*
                            </span>
                            <TextField
                                type="text"
                                name="Email"
                                variant="outlined"
                                value={email}
                                fullWidth
                                onChange={(event) => setEmail(event.target.value)}
                                required
                                sx={{ input: { color: 'white', fontSize: "12px" } }}
                                className={classes.input}
                                style={{ color: "white !important" }}
                                color="info"
                                size="small"
                            />
                        </Grid>
                        <Grid item>
                            <span style={{ paddingBottom: 8, textAlign: "left", color: colors.textColor }} className="fontSizeChange">
                                PASSWORD*
                            </span>
                            <TextField
                                type="password"
                                name="password"
                                variant="outlined"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                                color="info"
                                fullWidth
                                className={classes.input}
                                sx={{ input: { color: 'white', fontSize: "12px" } }}
                                size="small"
                            />
                        </Grid>
                        <Grid item>
                            <span style={{ paddingBottom: 8, textAlign: "left", color: colors.textColor }} className="fontSizeChange">
                                REPEAT PASSWORD*
                            </span>
                            <TextField
                                type="password"
                                name="password"
                                variant="outlined"
                                value={repeatPassword}
                                onChange={(event) => setRepeatPassword(event.target.value)}
                                required
                                fullWidth
                                className={classes.input}
                                sx={{ input: { color: 'white', fontSize: "12px" } }}
                                size="small"
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                type="submit"
                                className={`${classes.button} textTransformChange`}
                                size="small"
                                fullWidth
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
                <div style={{ marginTop: 50, bottom: 0, textAlign: 'center' }} className="fontSizeChange">
                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </div>
            </Container>
        </div>
    );
};


export default Register;


