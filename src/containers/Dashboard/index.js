/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems, SignOutListItem } from './listItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Card, CardContent, ListSubheader, Slider, TextField } from '@mui/material';
import { colors } from '../../res/colors';
import {
    makeStyles,
} from "@mui/styles";
import images from '../../assets';
import { PersonRounded } from '@mui/icons-material';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


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
        padding: 0,
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'green',
    },
    passwordLine: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    paper: {
        backgroundColor: `${colors.backgroundInput} !important`,
        color: 'white !important'
    }
}))


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme();

function DashboardContent() {

    const classes = useStyles();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar style={{backgroundColor: colors.backgroundInput}} position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon style={{color: 'white'}}/>
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                        <img src={images.logo} alt="" style={{height: '30px'}}/>
                        </Typography>
                        <IconButton color="inherit">
                            <PersonRounded />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" classes={{ paper: classes.paper }} open={open}>
                    <Toolbar
                        sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon style={{color: 'white'}}/>
                        </IconButton>
                    </Toolbar>
                    <Divider style={{backgroundColor: colors.dividerColor}}/>
                    <List component="nav">
                        {mainListItems}
                        <Divider sx={{ my: 1 }}  style={{backgroundColor: colors.dividerColor}}/>
                        {secondaryListItems}
                        <Divider sx={{ my: 1 }}  style={{backgroundColor: colors.dividerColor}}/>
                        {SignOutListItem}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                        backgroundColor: colors.backgroundPrimary
                    }}
                >
                    <Toolbar />
                    <div style={{ display: 'flex' }}>

                        <List
                            sx={{ width: '10%', bgcolor: colors.backgroundSecondary }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader sx={{ color: 'white', bgcolor: colors.backgroundSecondary }} component="div" id="nested-list-subheader">
                                    USER ACCOUNT
                                </ListSubheader>
                            }
                        >
                            <ListItemButton>
                                <ListItemText sx={{ color: 'white' }} primary="Profile" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemText sx={{ color: 'white' }} primary="History" />
                            </ListItemButton>
                        </List>
                        <Container sx={{ mt: 4, mb: 4, width: '70%' }}>
                            <Grid spacing={3}>
                                <Grid item xs={12} md={8} lg={9}>
                                    <Paper
                                        sx={{
                                            p: 2,
                                            // display: 'flex',
                                            // flexDirection: 'column',
                                            // height: 700,
                                            // alignItems: 'center',
                                            backgroundColor: colors.backgroundProfile
                                        }}
                                    >
                                        <Typography align="center" sx={{ fontSize: 20, color: colors.white }} color="text.secondary" gutterBottom>
                                            PROFILE
                                        </Typography>
                                        <Card sx={{
                                            minWidth: '100%',
                                            backgroundColor: colors.cartBackground,
                                            height: 80,
                                            borderRadius: 3
                                        }}>
                                            <CardContent>
                                                <Typography align="center" sx={{ fontSize: 14, color: colors.primary }} color="text.secondary" gutterBottom>
                                                    Bluefox8899
                                                </Typography>
                                                <Typography variant="h5" component="div">

                                                </Typography>
                                                <Typography align="center" sx={{ fontSize: 14, }} color={colors.white} gutterBottom>
                                                    Member since 10.10.2020
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <Typography align="left" sx={{ fontSize: 12, color: colors.white, padding: 2 }} color="text.secondary" gutterBottom>
                                            Overview
                                        </Typography>
                                        <div style={{ display: 'flex', }}>
                                            <div style={{
                                                width: '30%',
                                                backgroundColor: colors.cartBackground,
                                                height: 70,
                                                padding: 10,
                                                borderRadius: 3,
                                                display: 'flex'
                                            }}>
                                                <div style={{ width: 30, height: 30 }}>
                                                    <img src={images.history}
                                                        className={classes.imageLogo}
                                                    />
                                                </div>
                                                <div style={{ marginLeft: 20 }}>
                                                    <Typography align="left" sx={{ fontSize: 14, color: colors.textPrimary }} color="text.secondary" gutterBottom>
                                                        TOTAL WAGERED
                                                    </Typography>
                                                    <Typography align="left" sx={{ fontSize: 16 }} color={colors.white} gutterBottom>
                                                        0.00
                                                    </Typography>
                                                </div>
                                            </div>
                                            <div style={{
                                                width: '30%',
                                                backgroundColor: colors.cartBackground,
                                                height: 70,
                                                padding: 10,
                                                borderRadius: 3,
                                                display: 'flex',
                                                marginLeft: 30,
                                            }}>
                                                <div style={{ width: 30, height: 30 }}>
                                                    <img src={images.history}
                                                        className={classes.imageLogo}
                                                    />
                                                </div>
                                                <div style={{ marginLeft: 20 }}>
                                                    <Typography align="left" sx={{ fontSize: 14, color: colors.textPrimary }} color="text.secondary" gutterBottom>
                                                        TOTAL WAGERED
                                                    </Typography>
                                                    <Typography align="left" sx={{ fontSize: 16 }} color={colors.white} gutterBottom>
                                                        0.00
                                                    </Typography>
                                                </div>
                                            </div>
                                        </div>

                                        <Typography align="left" sx={{ fontSize: 12, color: colors.white, padding: 2 }} color="text.secondary" gutterBottom>
                                            LEVEL PROGRESS
                                        </Typography>
                                        <Card sx={{
                                            width: '100%',
                                            backgroundColor: colors.cartBackground,
                                            height: 70,
                                            borderRadius: 3
                                        }}>
                                            <CardContent sx={{
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                display: 'flex',

                                            }} >
                                                <div style={{
                                                    width: 30,
                                                    height: 30,
                                                    borderRadius: 15,
                                                    backgroundColor: colors.primary,
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}>
                                                    <Typography align="center" color={colors.white} >1</Typography>
                                                </div>
                                                <div style={{
                                                    width: '90%',
                                                }}>
                                                    <Typography color={colors.white}>510/1000</Typography>
                                                    <Slider
                                                        size="medium"
                                                        defaultValue={50}
                                                        // aria-label="Small"
                                                        valueLabelDisplay="auto"
                                                        color='primary'
                                                    />
                                                </div>
                                                <div style={{
                                                    width: 30,
                                                    height: 30,
                                                    borderRadius: 15,
                                                    backgroundColor: colors.primary,
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                    <Typography align="center" color={colors.white} >2</Typography>
                                                </div>
                                            </CardContent>
                                        </Card>


                                        <Container>
                                            <form>
                                                <Grid container direction="column" spacing={2} sx={{ marginTop: 3 }}>
                                                    <Grid item>
                                                        <div>
                                                            <Typography style={{ color: colors.textColor, fontSize: 12, marginTop: 10 }}>
                                                                EMAIL*
                                                            </Typography>

                                                        </div>
                                                        <TextField
                                                            type="text"
                                                            name="Email"
                                                            variant="outlined"
                                                            value={email}
                                                            // fullWidth
                                                            onChange={(event) => setEmail(event.target.value)}
                                                            required
                                                            sx={{ input: { color: 'white', fontSize: "12px", } }}
                                                            className={classes.input}
                                                            style={{ color: "white !important", width: '30%' }}
                                                            color="info"
                                                            size="small"
                                                        />

                                                    </Grid>
                                                    <Grid item>
                                                        <div className={classes.passwordLine}>
                                                            <Typography style={{ color: colors.textColor, fontSize: 12, marginTop: 10 }}>
                                                                PASSWORD*
                                                            </Typography>

                                                        </div>
                                                        <TextField
                                                            type="password"
                                                            name="password"
                                                            variant="outlined"
                                                            size='small'
                                                            sx={{ input: { color: 'white', fontSize: "12px" } }}
                                                            // fullWidth
                                                            value={password}
                                                            onChange={(event) => setPassword(event.target.value)}
                                                            required
                                                            color="info"
                                                            className={classes.input}
                                                            style={{ color: "white !important", width: '30%' }}

                                                        />
                                                    </Grid>
                                                </Grid>
                                            </form>
                                            <div style={{ marginTop: "calc(5% + 110px)", bottom: 0, textAlign: 'center' }} className="fontSizeChange">
                                                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                                            </div>
                                        </Container>
                                    </Paper>

                                </Grid>
                            </Grid>
                        </Container>
                        <Container sx={{ mt: 4, mb: 4, width: '20%', backgroundColor: colors.backgroundSecondary }}>
                            <Grid spacing={3}>
                                <Typography color={colors.white}>chat</Typography>
                            </Grid>
                        </Container>
                    </div>

                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <DashboardContent />;
}