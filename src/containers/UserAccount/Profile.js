/* eslint-disable jsx-a11y/alt-text */
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
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems, SignOutListItem } from "./listItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import {
  Button,
  Card,
  CardContent,
  InputAdornment,
  ListSubheader,
  Slider,
  TextField,
} from "@mui/material";
import { colors } from "../../res/colors";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import images from "../../assets";
import { PersonRounded, Visibility, VisibilityOff } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
import { useNavigate } from "react-router-dom";
import CoinDialog from "../Coin/Dialog";
import { Service } from "../../config/service";
import { getToken } from "../../utils";
import Chat from "../../components/Chat";

const drawerWidth = 240;

const chatData = [
  {
    id: 0,
    heading: "user_example",
    text: "Testing testing testing testing testing testing",
    image: images.history,
  },
  {
    id: 1,
    heading: "user_example",
    text: "Testing testing testing testing testing testing",
    image: images.history,
  },
  {
    id: 2,
    heading: "user_example",
    text: "Testing testing testing testing testing testing",
    image: images.history,
  },
  {
    id: 3,
    heading: "user_example",
    text: "Testing testing testing testing testing testing",
    image: images.history,
  },
];

const useStyles = makeStyles((theme) => ({
  divider: {
    // Theme Color, or use css color in quote
    background: "red",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: colors.backgroundPrimary,
  },
  loginContainer: {
    backgroundColor: colors.black,
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
    display: "flex",
    width: "50%",
  },
  tabs: {
    backgroundColor: colors.backgroundPrimary,
  },
  imageLogo: {
    width: "100%",
  },
  loginForm: {
    backgroundColor: colors.backgroundPrimary,
    paddingHorizontal: 20,
    alignItems: "center",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    paddingLeft: 30,
    paddingRight: 30,
  },
  input: {
    backgroundColor: colors.backgroundInput,
    padding: 0,
  },
  button: {
    alignItems: "center",
    backgroundColor: "green",
  },
  passwordLine: {
    display: "flex",
    justifyContent: "space-between",
  },
  paper: {
    backgroundColor: `${colors.backgroundInput} !important`,
    color: "white !important",
  },
  dividerStyle: {
    backgroundColor: colors.dividerColor,
    marginLeft: 10,
    marginRight: 10,
  },
  highlightBox: {
    margin: 10,
    background: colors.backgroundProfile,
    borderRadius: 5,
  },
}));

const checkPage = (path) => {
    return path === window.location.pathname;
};

function Profile() {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const [openD, setOpenD] = React.useState(false);
  const [isEmail, setIsEmail] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  React.useEffect(() => {
    getUserProfileHandler();
  }, []);

  const getUserProfileHandler = async () => {
    try {
      const { data } = await Service.getProfile(getToken());
      setEmail(data.email);
      setPassword(data.password);
      setName(data.username);
      console.log(
        "file: Profile.js => line 187 => getUserProfileHandler => result",
        data
      );
    } catch (error) {
      console.log(
        "file: Profile.js => line 193 => getUserProfileHandler => error",
        error
      );
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <List
        sx={{
          width: "10%",
          bgcolor: colors.backgroundInput,
          height: "100vh",
          position: "fixed",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        // subheader={
        //     <ListSubheader sx={{ color: 'white', bgcolor: colors.backgroundSecondary }} component="div" id="nested-list-subheader">
        //         USER ACCOUNT
        //     </ListSubheader>
        // }
      >
        <ListItemText
          sx={{ color: "white" }}
          primaryTypographyProps={{ fontSize: "14px", marginLeft: "15px" }}
          primary="USER ACCOUNT"
        />

        <ListItemButton
            classes={checkPage("/profile") ? classes.highlightBox : {}}
        >
          <ListItemText
            sx={{ color: "white", fontSize: "12px" }}
            primaryTypographyProps={{ fontSize: "12px" }}
            primary="Profile"
          />
        </ListItemButton>
        <ListItemButton>
          <ListItemText
            sx={{ color: "white", fontSize: "12px" }}
            primaryTypographyProps={{ fontSize: "12px" }}
            primary="History"
          />
        </ListItemButton>
      </List>
      <Container sx={{ mt: 4, mb: 4, width: "70%", marginLeft: "10%" }}>
        <Grid>
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                backgroundColor: colors.backgroundProfile,
                border: "none",
                boxShadow: 0,
              }}
            >
              <Typography
                align="center"
                sx={{ fontSize: 20, color: colors.white, marginBottom: 3 }}
                color="text.secondary"
                gutterBottom
              >
                PROFILE
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid
                  container
                  spacing={2}
                  style={{
                    backgroundColor: "#3c4154",
                    borderRadius: "50%",
                    width: 80,
                    height: 80,
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1,
                    marginBottom: -25,
                    marginLeft: 5,
                    // position: 'absolute',
                    // shadow: ''
                  }}
                  justify="center"
                >
                  <img src={images.gallery} alt="" style={{ height: "25px" }} />
                </Grid>
              </div>
              <Card
                sx={{
                  minWidth: "100%",
                  backgroundColor: colors.cartBackground,
                  height: 120,
                  borderRadius: 3,
                  boxShadow: 0,
                }}
              >
                <CardContent>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <img src={images.edit} onClick={() => setIsEmail(true)} style={{ color: colors.white, marginLeft: 20, height: 20, cursor: 'pointer' }}/>
                    {/* <EditIcon style={{ color: colors.white }} /> */}
                  </div>
                  <Typography
                    align="center"
                    sx={{ fontSize: 14, color: colors.primary }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {name}
                  </Typography>
                  <Typography variant="h5" component="div"></Typography>
                  <Typography
                    align="center"
                    sx={{ fontSize: 14 }}
                    color={colors.white}
                    gutterBottom
                  >
                    Member since 10.10.2020
                  </Typography>
                </CardContent>
              </Card>
              <Typography
                align="left"
                sx={{
                  fontSize: 12,
                  color: colors.white,
                  paddingTop: 2,
                  paddingBottom: 1,
                }}
                color="text.secondary"
                gutterBottom
              >
                Overview
              </Typography>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "30%",
                    backgroundColor: colors.cartBackground,
                    height: 70,
                    padding: 10,
                    borderRadius: 10,
                    display: "flex",
                  }}
                >
                  <div style={{ width: 30, height: 35 }}>
                    <img src={images.blueCoin} className={classes.imageLogo} />
                  </div>
                  <div style={{ marginLeft: 20 }}>
                    <Typography
                      align="left"
                      sx={{ fontSize: 14, color: colors.textPrimary }}
                      color="text.secondary"
                      gutterBottom
                    >
                      TOTAL WAGERED
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        // alignItems: 'center'
                      }}
                    >
                      <div style={{ width: 18, height: 18 }}>
                        <img
                          src={images.dollar}
                          className={classes.imageLogo}
                        />
                      </div>
                      <Typography
                        variant="caption"
                        align="left"
                        sx={{ fontSize: 16, marginLeft: 1 }}
                        color={colors.white}
                        gutterBottom
                      >
                        0.00
                      </Typography>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    width: "30%",
                    backgroundColor: colors.cartBackground,
                    height: 70,
                    padding: 10,
                    borderRadius: 10,
                    display: "flex",
                    marginLeft: 30,
                  }}
                >
                  <div style={{ width: 30, height: 30 }}>
                    <img src={images.gift} className={classes.imageLogo} />
                  </div>
                  <div style={{ marginLeft: 20 }}>
                    <Typography
                      align="left"
                      sx={{ fontSize: 14, color: colors.textPrimary }}
                      color="text.secondary"
                      gutterBottom
                    >
                      TOTAL BETS
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        // alignItems: 'center'
                      }}
                    >
                      <div style={{ width: 18, height: 18 }}>
                        <img
                          src={images.dollar}
                          className={classes.imageLogo}
                        />
                      </div>
                      <Typography
                        variant="caption"
                        align="left"
                        sx={{ fontSize: 16, marginLeft: 1 }}
                        color={colors.white}
                        gutterBottom
                      >
                        0.00
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <Divider
                sx={{
                  marginTop: 3.5,
                  marginBottom: 1,
                  backgroundColor: "#454857",
                }}
              />
              <Typography
                align="left"
                sx={{
                  fontSize: 12,
                  color: colors.white,
                  paddingTop: 2,
                  paddingBottom: 1,
                }}
                color="text.secondary"
                gutterBottom
              >
                LEVEL PROGRESS
              </Typography>
              <Card
                sx={{
                  width: "100%",
                  backgroundColor: colors.cartBackground,
                  height: 70,
                  borderRadius: 3,
                  boxShadow: 0,
                }}
              >
                <CardContent
                  sx={{
                    alignItems: "center",
                    justifyContent: "space-between",
                    display: "flex",
                    marginTop: -0.5,
                  }}
                >
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      backgroundColor: colors.primary,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      align="center"
                      color={colors.white}
                      sx={{ paddingTop: 0.5 }}
                    >
                      1
                    </Typography>
                  </div>
                  <div
                    style={{
                      width: "90%",
                    }}
                  >
                    <Typography color={colors.white} sx={{ marginBottom: -1 }}>
                      510/1000
                    </Typography>
                    <Slider
                      size="medium"
                      defaultValue={50}
                      // aria-label="Small"
                      valueLabelDisplay="auto"
                      color="primary"
                    />
                  </div>
                  <div
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 15,
                      backgroundColor: colors.primary,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      align="center"
                      color={colors.white}
                      sx={{ paddingTop: 0.5 }}
                    >
                      2
                    </Typography>
                  </div>
                </CardContent>
              </Card>

              <Divider
                sx={{
                  marginTop: 4,
                  marginBottom: 1,
                  backgroundColor: "#454857",
                }}
              />
              {/* <Container> */}
              <form>
                <Grid
                  container
                  direction="column"
                  spacing={2}
                  sx={{ marginTop: -1 }}
                >
                  <Grid item>
                    <div>
                      <Typography
                        style={{
                          color: colors.textColor,
                          fontSize: 12,
                          marginTop: 10,
                        }}
                      >
                        EMAIL*
                      </Typography>
                    </div>
                    <div className="row">
                      <TextField
                        type="text"
                        name="Email"
                        variant="outlined"
                        value={email}
                        // fullWidth
                        onChange={(event) => {}}
                        required
                        sx={{ input: { color: "white", fontSize: "12px" } }}
                        className={classes.input}
                        style={{ color: "white !important", width: "30%" }}
                        color="info"
                        size="small"
                        inputProps={{
                          readOnly: isEmail === true ? false : true,
                        }}
                      />
                      <img src={images.edit} onClick={() => setIsEmail(true)} style={{ color: colors.white, marginLeft: 20, height: 20, cursor: 'pointer' }}/>
                      {/* <EditIcon
                        style={{ color: colors.white, marginLeft: 20 }}
                        onClick={() => setIsEmail(true)}
                      /> */}
                    </div>
                  </Grid>
                  <Grid item>
                    <div className={classes.passwordLine}>
                      <Typography
                        style={{
                          color: colors.textColor,
                          fontSize: 12,
                          marginTop: 10,
                        }}
                      >
                        PASSWORD*
                      </Typography>
                    </div>
                    <div className="row">
                      <TextField
                        type="password"
                        name="password"
                        variant="outlined"
                        size="small"
                        sx={{ input: { color: "white", fontSize: "12px" } }}
                        // fullWidth
                        value={password}
                        onChange={(event) => {}}
                        required
                        color="info"
                        className={classes.input}
                        style={{ color: "white !important", width: "30%" }}
                        inputProps={{
                          readOnly: isPassword === true ? false : true,
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        suffix="%"
                      />
                      <img src={images.edit} onClick={() => setIsPassword(true)} style={{ color: colors.white, marginLeft: 20, height: 20, cursor: 'pointer' }}/>
                      {/* <EditIcon
                        style={{ color: colors.white, marginLeft: 20 }}
                        onClick={() => setIsPassword(true)}
                      /> */}
                    </div>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Chat />
      <CoinDialog open={openD} handleOpen={() => setOpenD(true)} handleClose={() => setOpenD(false)} />
    </div>
  );
}

export default Profile;
