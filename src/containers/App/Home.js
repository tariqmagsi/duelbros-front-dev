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
// import { mainListItems, secondaryListItems, SignOutListItem } from './listItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Button, Card, CardContent, InputAdornment, ListSubheader, Slider, TextField } from '@mui/material';
import { colors } from '../../res/colors';
import CloseIcon from '@mui/icons-material/Close';
import {
    makeStyles,
} from "@mui/styles";
import images from '../../assets';
import { PersonRounded, Visibility, VisibilityOff } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import { useNavigate } from 'react-router-dom';
import CoinDialog from '../Coin/Dialog';
import { Service } from '../../config/service';
import { mainListItems, secondaryListItems, SignOutListItem } from '../UserAccount/listItem';

const drawerWidth = 240;

const chatData = [
    { id: 0, heading: 'user_example', text: 'Testing testing testing testing testing testing', image: images.history },
    { id: 1, heading: 'user_example', text: 'Testing testing testing testing testing testing', image: images.history },
    { id: 2, heading: 'user_example', text: 'Testing testing testing testing testing testing', image: images.history },
    { id: 3, heading: 'user_example', text: 'Testing testing testing testing testing testing', image: images.history },
]

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
    divider: {
        // Theme Color, or use css color in quote
        background: 'red',
    },
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
    },
    dividerStyle: {
        backgroundColor: colors.dividerColor,
        marginLeft: 10,
        marginRight: 10
    },
    highlightBox: {
        margin: 10,
        background: colors.backgroundProfile,
        borderRadius: 5,
    },
    cartButton: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: colors.red,
        width: '100%',
        borderRadius: 10,
        height: 50
    },
}))

const checkPage = (path) => {
    return path === window.location.pathname;
};

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

function Home() {
    const navigate = useNavigate()
    const classes = useStyles();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');

    const [open, setOpen] = React.useState(false);
    const [openD, setOpenD] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const [isEmail, setIsEmail] = React.useState(false)
    const [isPassword, setIsPassword] = React.useState(false)
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);


    React.useEffect(() => {
        getUserProfileHandler();
    }, [])

    const getUserProfileHandler = async () => {
        try {
            const { data } = await Service.getProfile()
            setEmail(data.email);
            setPassword(data.password);
            setName(data.username);
            console.log('file: Profile.js => line 187 => getUserProfileHandler => result', data);
        } catch (error) {
            console.log('file: Profile.js => line 193 => getUserProfileHandler => error', error);
        }
    }

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar style={{ backgroundColor: colors.backgroundInput }} position="absolute" open={open}>
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
                            <MenuIcon style={{ color: 'white' }} />
                        </IconButton>

                        <img src={images.logo} alt="" style={{ height: '30px' }} />

                        <div style={{ display: 'flex', textAlign: 'center', margin: "auto" }}>
                            <div style={{ backgroundColor: '#2c2c36', padding: 5, borderRadius: 5, display: 'flex', alignItems: 'center', margin: "auto", height: 40, }}>
                                {/* <span><CurrencyExchangeOutlinedIcon style={{ color: colors.yellow, }} /></span> */}
                                <img src={images.dollar} alt="" style={{ height: 20 }} />
                                <span style={{ color: "#40aa77", marginLeft: 4 }}>5150M</span>
                            </div>
                            <div>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    className={`${classes.button} textTransformChange`}
                                    size="medium"
                                    fullWidth
                                    onClick={() => setOpenD(true)}
                                >
                                    Cashier
                                </Button>
                            </div>
                        </div>
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
                            <ChevronLeftIcon style={{ color: 'white' }} />
                        </IconButton>
                    </Toolbar>
                    <Divider classes={{ root: classes.divider }} sx={{ bgcolor: "red" }} />
                    <List component="nav">
                        {mainListItems(open)}
                        <Divider sx={{ my: 1 }} classes={classes.dividerStyle} />
                        {secondaryListItems(open)}
                        <Divider sx={{ my: 1 }} classes={classes.dividerStyle} />
                        {SignOutListItem(navigate)}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                        backgroundColor: colors.backgroundPrimary,
                    }}
                >
                    <Toolbar />
                    <div style={{ display: 'flex' }}>
                        <div style={{
                            width: '78%',
                        }}>
                            <Typography align="center" sx={{ fontSize: 20, color: colors.white, marginTop: 3 }} color="text.secondary" gutterBottom>
                                NEXT DUEL FORMAT
                            </Typography>
                            <Typography align="center" sx={{ fontSize: 20, color: colors.white }} color="text.secondary" gutterBottom>
                                WHIP
                            </Typography>
                            <div style={{
                                // width: '100%',
                                borderRadius: 20,
                                // backgroundColor: 'red',
                                marginTop: 20,
                                display: 'flex', justifyContent: 'center', alignItems: 'center',
                            }}>
                                <div style={{
                                    backgroundColor: colors.cartBackground,
                                    width: '20%',
                                    borderRadius: 20,
                                    padding: 5
                                }}>
                                    <Typography align="center" sx={{ fontSize: 20, color: colors.white, paddingTop: 2, }} color="text.secondary" gutterBottom>
                                        NEXT DUEL
                                    </Typography>
                                    <div style={{
                                        display: 'flex', flexDirection: 'row', padding: 2
                                    }}>
                                        <div style={{ width: '33%' }}>
                                            <Typography align="center" sx={{ fontSize: 25, color: colors.white }} color="text.secondary" gutterBottom>
                                                12
                                            </Typography>
                                            <Typography align="center" sx={{ fontSize: 14, color: '#5a5c67' }} color="text.secondary" gutterBottom>
                                                HOURS
                                            </Typography>
                                        </div>
                                        <div style={{ width: '33%' }}>
                                            <Typography align="center" sx={{ fontSize: 25, color: colors.white }} color="text.secondary" gutterBottom>
                                                25
                                            </Typography>
                                            <Typography align="center" sx={{ fontSize: 14, color: '#5a5c67' }} color="text.secondary" gutterBottom>
                                                MINUTES
                                            </Typography>
                                        </div>
                                        <div style={{ width: '33%' }}>
                                            <Typography align="center" sx={{ fontSize: 25, color: colors.white }} color="text.secondary" gutterBottom>
                                                42
                                            </Typography>
                                            <Typography align="center" sx={{ fontSize: 14, color: '#5a5c67' }} color="text.secondary" gutterBottom>
                                                SECONDS
                                            </Typography>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div style={{
                                // width: '100%',
                                borderRadius: 20,
                                // backgroundColor: 'red',
                                marginTop: 50,
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            }}>
                                <div style={{ width: '50%' }}>
                                    <Typography align="center" sx={{ fontSize: 20, color: colors.red, }} color="text.secondary" gutterBottom>
                                        Zamorak
                                    </Typography>
                                    <div style={{
                                        backgroundColor: colors.cartBackground,
                                        width: '80%',
                                        margin: 5,
                                        padding: 10,
                                    }}>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <div style={{
                                                width: '50%'
                                            }}>

                                                <Button
                                                    variant="contained"
                                                    type="submit"
                                                    className={`${classes.cartButton} textTransformChange`}
                                                    size="small"
                                                    fullWidth
                                                >
                                                    Place your bet
                                                </Button>

                                                <img src={images.armorRed} alt="" style={{ height: '25vh', alignItems: 'center', display: 'flex', Width: '25vw', marginTop: 10, }} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ width: '50%' }}>
                                    <Typography align="center" sx={{ fontSize: 20, color: colors.blue, marginTop: 3 }} color="text.secondary" gutterBottom>
                                        Saradomin
                                    </Typography>
                                </div>
                            </div>
                        </div>


                        <Container sx={{ mt: 4, mb: 4, width: '20%', backgroundColor: colors.backgroundSecondary, height: '100vh', position: 'fixed', right: 15, top: 30 }}>
                            <Grid spacing={3} sx={{
                                backgroundColor: colors.chatBackground,
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                display: 'flex',
                                padding: 2,
                                marginLeft: -3,
                                marginRight: -3
                            }}>
                                <Typography color={colors.white}></Typography>
                                <Typography color={colors.white}>User chat</Typography>
                                <CloseIcon style={{ color: '#696975' }} />
                            </Grid>
                            <tbody>
                                {chatData && chatData.map(user =>
                                    <Grid spacing={3} sx={{
                                        backgroundColor: colors.chatBackground,
                                        // justifyContent: 'space-between',
                                        display: 'flex',
                                        padding: 2,
                                        borderRadius: 5,
                                        marginTop: 2,
                                    }}>
                                        <img src={user.image} alt="" style={{ height: "20px", margin: 8 }} />
                                        <Typography color={colors.white} >
                                            <span style={{ fontSize: 12, fontWeight: 'bold' }} color="white">{user.heading}</span>
                                            <span style={{ marginLeft: 8, fontSize: 12, }}>
                                                {user.text}
                                            </span>
                                        </Typography>
                                    </Grid>
                                )}
                            </tbody>
                        </Container>
                    </div>
                    <CoinDialog open={openD} handleClose={() => setOpenD(false)} />
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default Home;