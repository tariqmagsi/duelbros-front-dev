/* eslint-disable jsx-a11y/alt-text */
import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {
  Card,
  CardContent,
  Slider,
  TextField,
} from "@mui/material";
import { colors } from "../../res/colors";
import { makeStyles } from "@mui/styles";
import images from "../../assets";

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

const useStyles = makeStyles((theme) => ({
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

function MatchComponent() {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      <Container sx={{ mt: 4, mb: 4, marginLeft: "10%" }}>
        <Grid spacing={0}>
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
                sx={{ fontSize: 20, color: colors.white }}
                color="text.secondary"
                gutterBottom
              >
                NEXT DUEL FORMAT
                <div>
                  <strong>WHIP</strong>
                </div>
              </Typography>
              <Card
                sx={{
                  backgroundColor: colors.cartBackground,
                  height: 80,
                  borderRadius: 3,
                  boxShadow: 0,
                }}
              >
                <CardContent>
                  <Typography
                    align="center"
                    sx={{ fontSize: 14 }}
                    color={colors.white}
                    gutterBottom
                  >
                    NEXT DUEL
                  </Typography>
                  <Grid
                    container
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ marginTop: -1 }}
                  >
                    <Grid item>
                      <Typography
                        align="center"
                        sx={{ fontSize: 14 }}
                        color={colors.white}
                        gutterBottom
                      >
                        12
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        align="center"
                        sx={{ fontSize: 14 }}
                        color={colors.white}
                        gutterBottom
                      >
                        25
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        align="center"
                        sx={{ fontSize: 14 }}
                        color={colors.white}
                        gutterBottom
                      >
                        45
                      </Typography>
                    </Grid>
                  </Grid>
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
                  <div style={{ width: 30, height: 30 }}>
                    <img src={images.history} className={classes.imageLogo} />
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
                    <Typography
                      align="left"
                      sx={{ fontSize: 16 }}
                      color={colors.white}
                      gutterBottom
                    >
                      0.00
                    </Typography>
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
                    <img src={images.history} className={classes.imageLogo} />
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
                    <Typography
                      align="left"
                      sx={{ fontSize: 16 }}
                      color={colors.white}
                      gutterBottom
                    >
                      0.00
                    </Typography>
                  </div>
                </div>
              </div>
              <Divider
                sx={{
                  marginTop: 3.5,
                  marginBottom: 1,
                  backgroundColor: "white",
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
                sx={{ marginTop: 4, marginBottom: 1, backgroundColor: "white" }}
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
                    <TextField
                      type="text"
                      name="Email"
                      variant="outlined"
                      value={email}
                      // fullWidth
                      onChange={(event) => setEmail(event.target.value)}
                      required
                      sx={{ input: { color: "white", fontSize: "12px" } }}
                      className={classes.input}
                      style={{ color: "white !important", width: "30%" }}
                      color="info"
                      size="small"
                    />
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
                    <TextField
                      type="password"
                      name="password"
                      variant="outlined"
                      size="small"
                      sx={{ input: { color: "white", fontSize: "12px" } }}
                      // fullWidth
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                      color="info"
                      className={classes.input}
                      style={{ color: "white !important", width: "30%" }}
                    />
                  </Grid>
                </Grid>
              </form>
              {/* </Container> */}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MatchComponent;
