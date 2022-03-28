import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';


export const mainListItems = (
    <React.Fragment>
        {/* <ListItemButton>
            <ListItemText primary="GAMES" />
        </ListItemButton> */}
        {/* <Link to="/admin_dashboard/users" className='linkStyle'> */}
            <ListItemButton>
                <ListItemIcon>
                    <DashboardIcon style={{color: 'white'}}/>
                </ListItemIcon>
                <ListItemText primary="Duel Host" />
            </ListItemButton>
        {/* </Link> */}
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <Link to='/profile' className='listStyle'>
            <ListItemButton>
                <ListItemIcon>
                    <AssignmentIcon style={{color: 'white'}}/>
                </ListItemIcon>
                <ListItemText primary="User Account" />
            </ListItemButton>
        </Link>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon style={{color: 'white'}}/>
            </ListItemIcon>
            <ListItemText primary="Cashier" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon style={{color: 'white'}}/>
            </ListItemIcon>
            <ListItemText primary="History" />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon style={{color: 'white'}}/>
            </ListItemIcon>
            <ListItemText primary="Support" />
        </ListItemButton>
    </React.Fragment>
);


export const SignOutListItem = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <AssignmentIcon style={{color: 'white'}}/>
            </ListItemIcon>
            <ListItemText primary="Sign Out" />
        </ListItemButton>

    </React.Fragment>
);