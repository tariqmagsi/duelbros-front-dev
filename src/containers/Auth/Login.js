import React, { useState } from 'react';
import { colors } from '../../res/colors';
import {
    makeStyles,
} from "@mui/styles";
import { Button, CircularProgress, Container, Grid, TextField } from '@mui/material';

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
        height: '100%',
        display: "flex",
        justifyContent: "center",
        paddingLeft: 30,
        paddingRight: 30
    },
    input: {
        backgroundColor: colors.backgroundInput,
        color: "white",
        padding: 0,
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'green',
    },
    passwordLine: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}))

const Login = ({ handleSubmit, loading }) => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleData = async (event) => {
        event.preventDefault();

        let obj = {
            email: email,
            password: password,
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
                                autoFocus
                                className={classes.input}
                                style={{ color: "white !important" }}
                                color="info"
                                size="small"
                            />
                        </Grid>
                        <Grid item>
                            <div className={classes.passwordLine}>
                                <span style={{ color: colors.textColor }} className="fontSizeChange">
                                    PASSWORD*
                                </span>
                                <span onClick={() => alert('Forgot Password')} style={{ color: colors.textColor, cursor: 'pointer' }} className="fontSizeChange">
                                    Forgot Password?
                                </span>
                            </div>
                            <TextField
                                type="password"
                                name="password"
                                variant="outlined"
                                size='small'
                                sx={{ input: { color: 'white', fontSize: "12px" } }}
                                fullWidth
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                                color="info"
                                className={classes.input}
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
                                        'Login'
                                }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                <div style={{ marginTop: "calc(5% + 110px)", bottom: 0, textAlign: 'center' }} className="fontSizeChange">
                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </div>
            </Container>
        </div>
    );
};


export default Login;


