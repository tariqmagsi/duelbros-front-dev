import React, { useState } from 'react';
import { colors } from '../../res/colors';
import {
    makeStyles,
} from "@mui/styles";
import { Button, CircularProgress, Grid, TextField, Container, Typography, TextareaAutosize } from '@mui/material';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingTop: 30,
        height: '400px',
        backgroundColor: colors.backgroundPrimary,
    },
    depositContainer: {
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
    depositForm: {
        backgroundColor: colors.backgroundPrimary,
        paddingHorizontal: 20,
        alignItems: 'center',
        // height: '100%',
        display: "flex",
        // justifyContent: "center",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 10,
    },
    input: {
        padding: 5,
        borderColor: colors.backgroundInput,
        width: '90%',
        backgroundColor: colors.backgroundInput,
        borderRadius: 5
    },
    button: {
        alignItems: 'center',
    }
}))

const Deposit = ({ handleSubmit, loading }) => {
    const classes = useStyles();
    const [amount, setAmount] = useState('');
    const [gameName, setGameName] = useState('');
    const [comment, setComment] = useState('');

    const handleData = async (event) => {
        event.preventDefault();

    }

    return (
        <div className={classes.root}>
            <Container>
                <div style={{ marginBottom: 20, textAlign: "left", color: 'white' }}>
                    Deposit with OSRS
                </div>
                <form onSubmit={handleData}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <span style={{ paddingBottom: 8, textAlign: "left", color: colors.textColor }} className="fontSizeChange">
                                AMOUNT
                            </span>
                            <TextField
                                type="number"
                                name="amount"
                                variant="outlined"
                                value={amount}
                                placeholder="0"
                                fullWidth
                                onChange={(event) => setAmount(event.target.value)}
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
                                YOUR IN-GAME NAME
                            </span>
                            <TextField
                                type="text"
                                name="gameName"
                                variant="outlined"
                                value={gameName}
                                placeholder="Type in here"
                                fullWidth
                                onChange={(event) => setGameName(event.target.value)}
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
                                COMMENT(OPTIONAL)
                            </span>
                            <TextareaAutosize
                                aria-label="minimum height"
                                minRows={3}
                                name="comment"
                                value={comment}
                                onChange={(event) => setComment(event.target.value)}
                                placeholder="Type in here"
                                className={classes.input}
                                style={{ width: "100%", color: 'white', fontSize: "12px" }}
                            />
                            {/* <TextField
                                type="text"
                                name="comment"
                                variant="outlined"
                                value={comment}
                                onChange={(event) => setComment(event.target.value)}
                                required
                                color="info"
                                fullWidth
                                className={classes.input}
                                sx={{ input: { color: 'white', fontSize: "12px" } }}
                                size="small"
                            /> */}
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
                                        'Deposit'
                                }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </div>
    );
};


export default Deposit;


