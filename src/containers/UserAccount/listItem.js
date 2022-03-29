import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Link } from "react-router-dom";
import {
  ContactSupportOutlined,
  ExpandMore,
  LogoutOutlined,
  PersonOutline,
  SportsEsportsOutlined,
  UpdateOutlined,
} from "@mui/icons-material";
import { AccordionSummary } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import { colors } from "../../res/colors";
import { styled } from "@mui/styles";
import images from "../../assets";
import { logout } from "../../utils";

const Accordion = styled((props) => (
  <MuiAccordion
    defaultExpanded={true}
    disableGutters
    elevation={0}
    square
    {...props}
  />
))(({ theme }) => ({
  border: `none`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const styles = (theme) => ({
  listItemText: {
    fontSize: "12px", //Insert your required size
  },
  highlightBox: {
    margin: 10,
    background: colors.backgroundProfile,
    borderRadius: 5,
  },
  marginIcon: {
    marginLeft: -3,
  },
});

const classes = styles();

const checkPage = (path) => {
  return path === window.location.pathname;
};

export const mainListItems = (open) => {
  return (
    <React.Fragment>
      <Accordion
        style={{ backgroundColor: colors.backgroundInput, color: "white" }}
      >
        <AccordionSummary
          expandIcon={open && <ExpandMore style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={classes.listItemText}
        >
          GAMES
        </AccordionSummary>
        <Link to="/admin_dashboard/users" className="linkStyle">
          <ListItemButton
            style={checkPage("/duel_host") ? classes.highlightBox : {}}
          >
            <ListItemIcon
              style={checkPage("/duel_host") ? classes.marginIcon : {}}
            >
              <SportsEsportsOutlined style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText
              primary="Duel Host"
              primaryTypographyProps={classes.listItemText}
            />
          </ListItemButton>
        </Link>
      </Accordion>
    </React.Fragment>
  );
};

export const secondaryListItems = (open) => {
  return (
    <React.Fragment>
      <Accordion
        style={{ backgroundColor: colors.backgroundInput, color: "white" }}
      >
        <AccordionSummary
          expandIcon={open && <ExpandMore style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={classes.listItemText}
        >
          MORE
        </AccordionSummary>
        <Link to="/profile" className="linkStyle">
          <ListItemButton
            style={checkPage("/profile") ? classes.highlightBox : {}}
          >
            <ListItemIcon
              style={checkPage("/profile") ? classes.marginIcon : {}}
            >
              <PersonOutline style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText
              primary="User Account"
              primaryTypographyProps={classes.listItemText}
            />
          </ListItemButton>
        </Link>
        <ListItemButton
          style={checkPage("/cashier") ? classes.highlightBox : {}}
        >
          <ListItemIcon style={checkPage("/cashier") ? classes.marginIcon : {}}>
            <img src={images.cashier} style={{ height: 16 }} />
          </ListItemIcon>
          <ListItemText
            primary="Cashier"
            primaryTypographyProps={classes.listItemText}
          />
        </ListItemButton>
        <ListItemButton
          style={checkPage("/history") ? classes.highlightBox : {}}
        >
          <ListItemIcon style={checkPage("/history") ? classes.marginIcon : {}}>
            <UpdateOutlined style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText
            primary="History"
            primaryTypographyProps={classes.listItemText}
          />
        </ListItemButton>
        <ListItemButton
          style={checkPage("/support") ? classes.highlightBox : {}}
        >
          <ListItemIcon style={checkPage("/support") ? classes.marginIcon : {}}>
            <ContactSupportOutlined style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText
            primary="Support"
            primaryTypographyProps={classes.listItemText}
          />
        </ListItemButton>
      </Accordion>
    </React.Fragment>
  );
};

export const SignOutListItem = (navigate) => {
  return (
    <React.Fragment>
      <ListItemButton onClick={() => {logout(); navigate('/login')}}>
        <ListItemIcon>
          <LogoutOutlined style={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText
          primary="Sign Out"
          primaryTypographyProps={classes.listItemText}
        />
      </ListItemButton>
    </React.Fragment>
  );
};
