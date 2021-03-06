import React, { useState } from 'react';
import { colors } from '../../res/colors';
import {
    makeStyles,
} from "@mui/styles";
import images from '../../assets/index';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Withdraw from './Withdraw';
import Deposit from './Deposit';
import { useNavigate } from 'react-router-dom';
import { Service } from '../../config/service';
import { toast } from 'react-toastify';
import { ZendeskWidget } from 'use-zendesk-widget';
import { getToken } from '../../utils';
// import CustomizedDialogs from '../../components/Dialog';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white",
        color: "white",
        borderRadius: 10
    },
    withdrawContainer: {
        backgroundColor: colors.black,
        borderRadius: 0,
        overflow: 'hidden',
        flexDirection: 'row',
        display: 'flex',
        width: '60%',
    },
    tabs: {
        backgroundColor: colors.backgroundPrimary,
        color: "white",
        paddingTop: 10,
        paddingLeft: 50
    },
    imageLogo: {
        width: '100%',
    },
    withdrawForm: {
        backgroundColor: 'red',
        paddingHorizontal: 20,
        alignItems: 'center',
        height: '100%'
    },
    input: {
        padding: 0,
        width: '90%',
    }
}))

const Index = (props) => {

    let navigate = useNavigate();

    const classes = useStyles();
    const [value, setValue] = useState('one');
    const [loading, setLoading] = useState('');


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const zendeskChat = (data) => {
        ZendeskWidget('webWidget', 'show')
        ZendeskWidget('webWidget', 'open')
        // ZendeskWidget('webWidget', 'prefill', {
        //     name: {
        //       value: 'isamu',
        //       readOnly: true // optional
        //     },
        //     email: {
        //       value: 'isamu@voltron.com',
        //       readOnly: true // optional
        //     }
        // })
        ZendeskWidget('webWidget', 'chat:send', data)
    }

    const handleWithdraw = async (data, setAllEmpty) => {
        setLoading(true);
        try {
            const result = await Service.createTicketZendesk(data, getToken())
            console.log('file: Index.js => line 66 => handleSubmit => result', result);
            zendeskChat(`${data?.ticket?.comment?.body}`)
            setAllEmpty()
            // toast.success("Requested Successfully")
        } catch (error) {
            // alert(error)
            console.log('Inside Catch => ', error);
        } finally {
            setLoading(false)
        }
    };

    const handleDeposit = async (data, setAllEmpty) => {
        setLoading(true);
        try {
            const result = await Service.createTicketZendesk(data, getToken())
            console.log('file: Index.js => line 66 => handleSubmit => result', result);
            zendeskChat(data?.ticket?.comment?.body)
            setAllEmpty()
            // toast.success("Requested Successfully")
        } catch (error) {
            // alert(error)
            console.log('Inside Catch => ', error);
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className={classes.root}>
            {/* <CustomizedDialogs children={<Register/>} open={true}/> */}
            {/* <div className={classes.withdrawContainer}> */}
                <div style={{ width: '100%', borderRadius: 0 }}>
                    <Box>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            className={classes.tabs}
                            aria-label="secondary tabs example"
                            TabIndicatorProps={{ style: { background: colors.primary } }}
                        >
                            <Tab value="one" label="Deposit" className="fontSizeChange" style={{ color: value === 'one' ? colors.primary : "white" }} />
                            <Tab value="two" label="Withdraw" className="fontSizeChange" style={{ color: value === 'two' ? colors.primary : "white" }} />
                        </Tabs>
                    </Box>
                    {
                        value === 'two' ?
                            <Withdraw
                                loading={loading}
                                handleSubmit={handleWithdraw}
                            /> :
                            <Deposit
                                loading={loading}
                                handleSubmit={handleDeposit}
                            />
                    }
                </div>
            {/* </div> */}
        </div>
    );
};


export default Index;


