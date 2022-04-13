/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, TextField } from '@mui/material';
import { colors } from '../res/colors';
import CloseIcon from '@mui/icons-material/Close';
import images from '../assets';
import { MessageOutlined } from '@mui/icons-material';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';

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
        backgroundColor: colors.backgroundSecondary,
        padding: 0,
        border: 'none',
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottom: colors.backgroundSecondary,
        },
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

const Chat = () => {
    const classes = useStyles();
    const [message, setMessage] = React.useState('');

    return (
        <Container sx={{ mt: 4, mb: 4, width: '22%', backgroundColor: colors.backgroundSecondary, height: '100vh', position: 'fixed', right: 15, top: 30 }}>
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
                <Typography color={colors.white}>
                    <Button variant="text" style={{padding: 10, borderRadius: 10, backgroundColor: 'rgba(25, 118, 210, 0.1)', textTransform: 'none'}}>
                        <MessageOutlined />
                        <span style={{paddingTop: -20, paddingLeft: 10, fontSize: 16,}}>Chat</span>
                    </Button>
                </Typography>
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
                <div 
                    style={{
                        backgroundColor: colors.backgroundSecondary,
                        position: 'fixed',
                        bottom: 0,
                        marginLeft: -23,
                        padding: 10,
                        width: "21.8%"
                    }}
                >
                    <div style={{
                        alignItems: 'center',
                        display: 'flex',
                        marginBottom: 10,
                        borderTop: '1px solid gray',
                        paddingTop: 10,
                    }}>
                        <img src={images.coin} alt="" style={{ height: "20px", }} />
                        <span style={{ fontSize: 12, fontWeight: 'bold', color: 'white', marginLeft: 10 }} > john_doeeteest</span>
                    </div>
                    <div style={{
                        alignItems: 'center',
                        display: 'flex',
                        borderTop: '1px solid gray',
                        paddingTop: 10
                        // justifyContent: 'space-between'
                    }}>

                        <InsertEmoticonIcon style={{ color: "white" }} />
                        <TextField
                            type="text"
                            name="message"
                            variant="standard"
                            placeholder='Start typing...'
                            value={message}
                            fullWidth
                            onChange={(event) => setMessage(event.target.value)}
                            required
                            sx={{ input: { color: 'white', fontSize: "12px", marginLeft: 1 } }}
                            className={classes.input}
                            color="info"
                            size="small"
                        />
                        <span style={{ fontSize: 16, fontWeight: 'bold', color: 'white', }} >@</span>
                        <SendIcon style={{ color: "white", marginLeft: 5 }} />

                    </div>
                </div>
            </tbody>
        </Container>
    )
}

export default Chat