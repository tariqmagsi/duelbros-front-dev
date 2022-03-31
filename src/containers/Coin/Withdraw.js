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
        // alignItems: 'center',
        paddingTop: 30,
        height: '400px',
        backgroundColor: colors.backgroundPrimary,
    },
    DepositContainer: {
        backgroundColor: colors.black,
        borderRadius: 10,
        overflow: 'hidden',
        flexDirection: 'row',
        display: 'flex',
        width: '100%'
    },
    tabs: {
        backgroundColor: colors.backgroundPrimary,
    },
    imageLogo: {
        width: '100%',
    },
    DepositForm: {
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

const Withdraw = ({ handleSubmit, loading }) => {
    const classes = useStyles();
    const [osrs, setOsrs] = useState('');
    const [username, setUsername] = useState('');


    const handleData = async (event) => {
        event.preventDefault();
        const data = {
            ticket: {
              subject: `Withdraw Request from ${username}`,
              comment: { body: `Hi. I want to withraw ${osrs} coins` },
            },
          };
          handleSubmit(data);
    }
    return (
        <div className={classes.root}>
            <Container>
                <form onSubmit={handleData}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <span style={{ paddingBottom: 8, textAlign: "left", color: colors.textColor }} className="fontSizeChange">
                                WITHDRAW OSRS GOLD
                            </span>
                            <TextField
                                type="text"
                                name="osrs"
                                variant="outlined"
                                value={osrs}
                                placeholder="Type in here"
                                fullWidth
                                onChange={(event) => setOsrs(event.target.value)}
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
                                    RUNESCAPE USERNAME
                                </span>
                            </div>
                            <TextField
                                type="text"
                                name="username"
                                variant="outlined"
                                size='small'
                                sx={{ input: { color: 'white', fontSize: "12px" } }}
                                placeholder="Type in here"
                                fullWidth
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
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
                            >
                                {
                                    loading ?
                                        <CircularProgress size={24} style={{ color: 'white' }} />
                                        :
                                        'Withdraw'
                                }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </div>
    );
};


export default Withdraw;


