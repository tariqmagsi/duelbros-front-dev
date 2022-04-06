import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems, secondaryListItems, SignOutListItem } from "./ListItem";
import DashboardContainer from "./DashboardContainer";
import { colors } from "../res/colors";
import { makeStyles } from "@mui/styles";
import images from "../assets";
import { Button } from "@mui/material";
import { PersonRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CoinDialog from "../containers/Coin/Dialog";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

const useStyles = makeStyles({
  paper: {
    backgroundColor: `${colors.backgroundInput} !important`,
    color: "white !important",
  },
});

function DashboardOutline({ ChildComponent }) {
  const [open, setOpen] = React.useState(false);
  const [openD, setOpenD] = React.useState(false)
  const navigate = useNavigate()
  const classes = useStyles();
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          style={{ backgroundColor: colors.backgroundInput }}
          position="absolute"
          open={open}
        >
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon style={{ color: "white" }} />
            </IconButton>

            <img src={images.logo} alt="" style={{ height: "30px" }} />

            <div
              style={{ display: "flex", textAlign: "center", marginLeft: "20%" }}
            >
              <div
                style={{
                  backgroundColor: "#2c2c36",
                  padding: 5,
                  borderRadius: 5,
                  display: "flex",
                  alignItems: "center",
                  margin: "auto",
                  height: 40,
                }}
              >
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
            <div style={{float: 'right', right: 20, position: 'absolute'}}>
              <IconButton color="inherit">
                <PersonRounded />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{ paper: classes.paper }}
          open={open}
        >
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon style={{ color: "white" }} />
            </IconButton>
          </Toolbar>
          <Divider
            classes={{ root: classes.divider }}
            sx={{ bgcolor: "#454857" }}
          />
          <List component="nav">
            {mainListItems(open)}
            <Divider sx={{ my: 1, backgroundColor: "#454857" }} classes={classes.dividerStyle} />
            {secondaryListItems(open)}
            <Divider sx={{ my: 1, backgroundColor: "#454857" }} classes={classes.dividerStyle} />
            {SignOutListItem(navigate)}
          </List>
        </Drawer>
        <CoinDialog open={openD} handleOpen={() => setOpenD(true)} handleClose={() => setOpenD(false)} />
        <DashboardContainer ChildComponent={ChildComponent} />
      </Box>
    </ThemeProvider>
  );
}

export default DashboardOutline;
