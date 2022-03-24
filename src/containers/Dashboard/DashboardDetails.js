import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from "react-router-dom";
import { Service } from '../../config/service';
import {
    AppBar, Toolbar, makeStyles,
    Button,
} from '@mui/material';
import { colors } from '../../res/colors';
import clsx from 'clsx';
import MaterialTable from 'material-table'
import logo from '../../assets/images/Logo.png'
import { isGetType, logout } from '../../utils';
const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        backgroundColor: colors.white,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        borderBottom: "3px #F3292A solid"
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    table: {
        maxHeight: '85vh',
        maxWidth: '90vw'
    },
    loaderDiv: {
        display: 'flex',
        height: '85vh',
        justifyContent: 'center',
        alignItems: 'center',
    },
    close: {
        padding: theme.spacing(0.5),
    },
    tableContainer: {
        margin: 'auto',
        width: '90%',
        marginTop: '8%',
    },
}));


const DashboardDetails = (props) => {
    const location = useLocation();
    let { id, detail } = useParams();
    const typeCondition = location?.state?.detail === 'Services' || location?.state?.detail === 'Taxi' ? true : false;
    const classes = useStyles();

    // const result = isGetType()


    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getDashboardID()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [detail])

    const getDashboardID = async () => {
        setLoading(true);
        try {
            const { data } = await Service.getFormByID(id)
            console.log('file: DashboardDetails.js => line 116 => getDashboardID => data', data);
            setData(data)
        } catch (error) {
            console.log('Inside Catch => ', error);
        } finally {
            setLoading(true)
        }
    }

    const columns = [
        { title: 'Description', field: 'description' },
        { title: 'Quantity', field: 'quantity' },

    ]

    const logoutHandler = async () => {
        logout();
        props.history.push("/");
    };
    return (
        <div className={classes.root}>
            {/* <CssBaseline /> */}


            {
                typeCondition ? <div className={classes.tableContainer}>
                    <h1> Testing </h1>
                </div>
                    : <div className={classes.tableContainer}>
                        <MaterialTable title="Product Details"
                            data={data}
                            columns={columns}
                            options={{
                                search: false,
                                paging: false,
                                showTitle: false
                            }}
                        />
                    </div>
            }
        </div>
    )
}

export default DashboardDetails;
