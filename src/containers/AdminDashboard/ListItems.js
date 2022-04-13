import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import { LogoutOutlined, PeopleAlt, PeopleAltOutlined, Person } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { logout } from '../../utils';

const color = () => { return ({ color: 'white' }) }

export const mainListItems = (
  <React.Fragment>
    <Link to="/admin_dashboard/users" className='linkStyle'>
      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon style={color()} />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>
    </Link>
    <Link to="/admin_dashboard/players" className='linkStyle'>
      <ListItemButton>
        <ListItemIcon>
          <PeopleAltOutlined style={color()} />
        </ListItemIcon>
        <ListItemText primary="Players" />
      </ListItemButton>
    </Link>
    <Link to="/admin_dashboard/moderators" className='linkStyle'>
      <ListItemButton>
        <ListItemIcon>
          <PeopleAlt style={color()} />
        </ListItemIcon>
        <ListItemText primary="Moderators" />
      </ListItemButton>
    </Link>
    <Link to="/admin_dashboard/userRole" className='linkStyle'>
      <ListItemButton>
        <ListItemIcon>
          <PeopleAlt style={color()} />
        </ListItemIcon>
        <ListItemText primary="User Role" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (navigate) => {
  return (
    <React.Fragment>
      <Link to="/admin_dashboard/profile" className='linkStyle'>
        <ListItemButton>
          <ListItemIcon>
            <Person style={color()} />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItemButton>
      </Link>
      <ListItemButton onClick={() => { logout(); navigate('/') }}>
        <ListItemIcon>
          <LogoutOutlined style={color()} />
        </ListItemIcon>
        <ListItemText primary="Sign Out" />
      </ListItemButton>
    </React.Fragment>
  );
}