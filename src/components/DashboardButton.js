import React from 'react';
import { Grid, makeStyles, Paper, Typography } from '@mui/material';
import { colors } from '../res/colors';
import { getValue } from '../utils';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 100,
        padding: theme.spacing(2),
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

const DashboardButton = ({ title, value, background, sm, md, lg }) => {
    const classes = useStyles();
    return (
        <Grid item sm={sm ? sm : 12} md={md ? md : 6} lg={lg ? lg : 3}>
            <Paper className={classes.root} style={{ backgroundColor: background }}>
                <Typography style={{ fontSize: 35, color: colors.white }} variant="h4">{value}</Typography>
                <Typography style={{ fontSize: 22, color: colors.white + 'dd' }} variant="body1">{getValue(title)}</Typography>
            </Paper>
        </Grid>
    );
}

export default DashboardButton;