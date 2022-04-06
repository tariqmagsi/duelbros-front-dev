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

const drawerWidth = 240;

const chatData = [
    { id: 0, heading: 'user_example', text: 'Testing testing testing testing testing testing', image: images.history },
    { id: 1, heading: 'user_example', text: 'Testing testing testing testing testing testing', image: images.history },
    { id: 2, heading: 'user_example', text: 'Testing testing testing testing testing testing', image: images.history },
    { id: 3, heading: 'user_example', text: 'Testing testing testing testing testing testing', image: images.history },
]

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
        width: '100%',
        borderRadius: 10,
        height: 50
    },
}))


function Home() {
    const classes = useStyles();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [openD, setOpenD] = React.useState(false);


    React.useEffect(() => {
        // getUserProfileHandler();
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
            <div style={{ display: 'flex' }}>
                <div style={{
                    width: '78%',
                }}>
                    <Typography align="center" sx={{ fontSize: 18, color: colors.white, marginTop: 3 }} color="text.secondary" gutterBottom>
                        NEXT DUEL FORMAT
                    </Typography>
                    <Typography align="center" sx={{ fontSize: 18, color: colors.white, fontWeight: 'bold' }} color="text.secondary" gutterBottom>
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
                            <Typography align="center" sx={{ fontSize: 16, color: colors.white, paddingTop: 2, }} color="text.secondary" gutterBottom>
                                NEXT DUEL
                            </Typography>
                            <div style={{
                                display: 'flex', flexDirection: 'row', padding: 2
                            }}>
                                <div style={{ width: '33.33%' }}>
                                    <Typography align="center" sx={{ fontSize: 18, color: colors.white }} color="text.secondary" gutterBottom>
                                        12
                                    </Typography>
                                    <Typography align="center" sx={{ fontSize: 12, color: '#5a5c67' }} color="text.secondary" gutterBottom>
                                        HOURS
                                    </Typography>
                                </div>
                                <div style={{ width: '33.33%' }}>
                                    <Typography align="center" sx={{ fontSize: 18, color: colors.white }} color="text.secondary" gutterBottom>
                                        25
                                    </Typography>
                                    <Typography align="center" sx={{ fontSize: 12, color: '#5a5c67' }} color="text.secondary" gutterBottom>
                                        MINUTES
                                    </Typography>
                                </div>
                                <div style={{ width: '33.33%' }}>
                                    <Typography align="center" sx={{ fontSize: 18, color: colors.white }} color="text.secondary" gutterBottom>
                                        42
                                    </Typography>
                                    <Typography align="center" sx={{ fontSize: 12, color: '#5a5c67' }} color="text.secondary" gutterBottom>
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
                        marginLeft: "10%",
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    }}>
                        {["Zamorak", "Saradomin"].map((item, i) => <div style={{ width: '50%' }}>
                            <Typography align="center" sx={{ fontSize: 18, color: i === 0 ? colors.red : colors.blue, textAlign: 'center', marginLeft: -10}} color="text.secondary" gutterBottom>
                                {item}
                            </Typography>
                            <div style={{
                                backgroundColor: colors.cartBackground,
                                borderRadius: 10,
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
                                            style={{backgroundColor: i === 0 ? colors.red : colors.blue}}
                                            className={`${classes.cartButton} textTransformChange`}
                                            size="small"
                                            fullWidth
                                        >
                                            Place your bet
                                        </Button>

                                        <img src={images.armorRed} alt="" style={{ height: '25vh', alignItems: 'center', display: 'flex', Width: '25vw', marginTop: 10, }} />
                                    </div>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}>
                                    <img src={images.coin} alt="" style={{ height: 30, width: 30 }} />
                                    <div style={{
                                        width: '90%'
                                    }}>
                                        <div style={{ marginBottom: -1, color: "#555863", fontSize: 14 }}>4000/5000</div>
                                        <Slider
                                            size="medium"
                                            defaultValue={50}
                                            // aria-label="Small"
                                            valueLabelDisplay="auto"
                                        // color={colors.red}
                                        />
                                    </div>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <div style={{ marginBottom: -1, color: "#555863", fontSize: 14 }}>Team </div>
                                    <Typography color={colors.white}>  </Typography>
                                    <div style={{color: colors.white, marginLeft: 10}}>  Zamorak Bets</div>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <div style={{ marginBottom: -1, color: "#555863", fontSize: 14 }}>[5000 MAX]</div>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>

                    <div style={{
                        marginTop: 20,
                        marginBottom: 20,
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                    }}>
                        <Typography align="center" sx={{ fontSize: 18, color: colors.white }} color="text.secondary" gutterBottom>
                            PREVIOUS DUEL 20
                        </Typography>
                    </div>

                    <div style={{
                        backgroundColor: colors.cartBackground,
                        width: '85%',
                        margin: 5,
                        padding: 10,
                        borderRadius: 10,
                        marginLeft: "10%",
                        // marginRight: "30%"
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <img src={images.armorRed} alt="" style={{ height: 25 }} />
                            <img src={images.armorGreen} alt="" style={{ height: 25 }} />
                            <img src={images.armorRed} alt="" style={{ height: 25 }} />
                            <img src={images.armorGreen} alt="" style={{ height: 25 }} />
                            <img src={images.armorRed} alt="" style={{ height: 25 }} />
                            <img src={images.armorGreen} alt="" style={{ height: 25 }} />
                            <img src={images.armorRed} alt="" style={{ height: 25 }} />
                            <img src={images.armorGreen} alt="" style={{ height: 25 }} />
                            <img src={images.armorRed} alt="" style={{ height: 25 }} />
                            <img src={images.armorGreen} alt="" style={{ height: 25 }} />
                            <img src={images.armorRed} alt="" style={{ height: 25 }} />
                            <img src={images.armorGreen} alt="" style={{ height: 25 }} />
                            <img src={images.armorRed} alt="" style={{ height: 25 }} />
                            <img src={images.armorGreen} alt="" style={{ height: 25 }} />
                            <img src={images.armorRed} alt="" style={{ height: 25 }} />
                            <img src={images.armorGreen} alt="" style={{ height: 25 }} />
                            <img src={images.armorRed} alt="" style={{ height: 25 }} />
                            <img src={images.armorGreen} alt="" style={{ height: 25 }} />
                            <img src={images.armorRed} alt="" style={{ height: 25 }} />
                            <img src={images.armorGreen} alt="" style={{ height: 25 }} />
                            <img src={images.armorRed} alt="" style={{ height: 25 }} />
                            <img src={images.armorGreen} alt="" style={{ height: 20 }} />
                            <img src={images.armorRed} alt="" style={{ height: 20 }} />
                            <img src={images.armorGreen} alt="" style={{ height: 20 }} />

                        </div>
                    </div>

                    <Divider sx={{ marginTop: 4, marginBottom: 1, backgroundColor: '#454857', width: '85%', marginLeft: '10%' }} />

                    <div style={{
                        marginTop: 50,
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                    }}>
                        <Typography align="center" sx={{ fontSize: 18, color: colors.white }} color="text.secondary" gutterBottom>
                            WATCH DUEL LIVE
                        </Typography>
                    </div>


                    <div style={{
                        // width: '100%',
                        borderRadius: 20,
                        // backgroundColor: 'red',
                        marginTop: 10,
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '85%', marginLeft: '10%'
                    }}>
                        {[1,2].map((item, i) => <div style={{
                            width: '50%',
                            height: 200,
                            backgroundColor: colors.cartBackground,
                            marginLeft: i===0 ? '10%' : 10,
                            borderRadius: 10,
                            margin: 5,
                            padding: 10,
                        }}>

                        </div>)}
                    </div>


                    <Divider sx={{ marginTop: 4, marginBottom: 1, backgroundColor: '#454857', width: '85%', marginLeft: '10%' }} />

                    <div style={{
                        marginTop: 50,
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                    }}>
                        <Typography align="center" sx={{ fontSize: 18, color: colors.white }} color="text.secondary" gutterBottom>
                            DETAILED DUEL HISTORY
                        </Typography>
                    </div>


                    <div style={{
                        // width: '100%',
                        borderRadius: 20,
                        // backgroundColor: 'red',
                        marginTop: 10,
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '85%', marginLeft: '10%'
                    }}>
                        <div style={{
                            width: '25%',
                            backgroundColor: '#303441',
                            borderRadius: 10,
                            margin: 5,
                            padding: 10,
                        }}>
                            <Typography align="center" color={colors.red}>Zamorak</Typography>
                            <Typography align="center" color={colors.white}>won 54%</Typography>
                            <Typography align="center" color="#c4c5c9">of past 100 duels</Typography>
                        </div>
                        <div style={{
                            width: '25%',
                            backgroundColor: '#252837',
                            borderRadius: 10,
                            margin: 5,
                            padding: 10,
                        }}>
                            <Typography align="center" color={colors.red}>Zamorak</Typography>
                            <Typography align="center" color={colors.white}>won 54%</Typography>
                            <Typography align="center" color="#c4c5c9">of past 100 duels</Typography>

                        </div>
                        <div style={{
                            width: '25%',
                            backgroundColor: '#303441',
                            borderRadius: 10,
                            margin: 5,
                            padding: 10,
                        }}>
                            <Typography align="center" color={colors.red}>Zamorak</Typography>
                            <Typography align="center" color={colors.white}>won 54%</Typography>
                            <Typography align="center" color="#c4c5c9">of past 100 duels</Typography>

                        </div>
                        <div style={{
                            width: '25%',
                            backgroundColor: '#252837',
                            borderRadius: 10,
                            margin: 5,
                            padding: 10,
                        }}>
                            <Typography align="center" color={colors.red}>Zamorak</Typography>
                            <Typography align="center" color={colors.white}>won 54%</Typography>
                            <Typography align="center" color="#c4c5c9">of past 100 duels</Typography>

                        </div>
                    </div>

                    <div style={{
                        // width: '100%',
                        borderRadius: 20,
                        // backgroundColor: 'red',
                        marginTop: 10,
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '85%', marginLeft: '10%'
                    }}>
                        <div style={{
                            width: '25%',
                            backgroundColor: '#252837',
                            borderRadius: 10,
                            margin: 5,
                            padding: 10,
                        }}>
                            <Typography align="center" color={colors.blue}>Zamorak</Typography>
                            <Typography align="center" color={colors.white}>won 54%</Typography>
                            <Typography align="center" color="#c4c5c9">of past 100 duels</Typography>

                        </div>
                        <div style={{
                            width: '25%',
                            backgroundColor: '#303441',
                            borderRadius: 10,
                            margin: 5,
                            padding: 10,
                        }}>
                            <Typography align="center" color={colors.blue}>Zamorak</Typography>
                            <Typography align="center" color={colors.white}>won 54%</Typography>
                            <Typography align="center" color="#c4c5c9">of past 100 duels</Typography>
                        </div>
                        <div style={{
                            width: '25%',
                            backgroundColor: '#252837',
                            borderRadius: 10,
                            margin: 5,
                            padding: 10,
                        }}>
                            <Typography align="center" color={colors.blue}>Zamorak</Typography>
                            <Typography align="center" color={colors.white}>won 54%</Typography>
                            <Typography align="center" color="#c4c5c9">of past 100 duels</Typography>

                        </div>
                        <div style={{
                            width: '25%',
                            backgroundColor: '#303441',
                            borderRadius: 10,
                            margin: 5,
                            padding: 10,
                        }}>
                            <Typography align="center" color={colors.blue}>Zamorak</Typography>
                            <Typography align="center" color={colors.white}>won 54%</Typography>
                            <Typography align="center" color="#c4c5c9">of past 100 duels</Typography>

                        </div>
                    </div>
                    <Divider sx={{ marginTop: 4, marginBottom: 4, backgroundColor: '#454857', width: '85%', marginLeft: '10%' }} />
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
                <CoinDialog open={openD} handleClose={() => setOpenD(false)} />
            </div>
    );
}

export default Home;