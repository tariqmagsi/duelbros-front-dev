import React, { useState } from 'react';
import { colors } from '../res/colors';
import {
    makeStyles,
} from "@mui/styles";
import { Button, CircularProgress, Grid, TextField } from '@mui/material';
import { Service } from '../config/service';
import { getToken } from '../utils';
// import { Service } from '../../config/service';

const useStyles = makeStyles(theme => ({
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
        color: "white",
        padding: 0,
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'green',
    },
    usernameLine: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}))

const AdminProfileForm = ({data}) => {
    const classes = useStyles();
    const [email, setEmail] = useState(data && data.email ? data.email : '');
    const [username, setUsername] = useState(data && data.username ? data.username : '');
    const [loading, setLoading] = useState(false)

    const handleUpdate = async (event) => {
        event.preventDefault()
        setLoading(true);
        const data = {
          username, 
          email
        }
        try {
            const result = await Service.updateAdminProfile(data, getToken())
            console.log('file: Index.js => line 66 => handleSubmit => result', result);
        } catch (error) {
            // alert(error)
            console.log('Inside Catch => ', error);
        } finally {
            setLoading(false)
        }
    };

  return (
    <form onSubmit={handleUpdate}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <div className={classes.usernameLine}>
            <span
              style={{ color: colors.textColor }}
              className="fontSizeChange"
            >
              USERNAME*
            </span>
          </div>
          <TextField
            type="text"
            name="username"
            variant="outlined"
            size="small"
            sx={{ input: { color: "white", fontSize: "12px" } }}
            fullWidth
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
            color="info"
            className={classes.input}
          />
        </Grid>
        <Grid item>
          <span
            style={{
              paddingBottom: 8,
              textAlign: "left",
              color: colors.textColor,
            }}
            className="fontSizeChange"
          >
            EMAIL*
          </span>
          <TextField
            type="text"
            name="Email"
            variant="outlined"
            value={email}
            fullWidth
            onChange={(event) => setEmail(event.target.value)}
            required
            sx={{ input: { color: "white", fontSize: "12px" } }}
            autoFocus
            className={classes.input}
            style={{ color: "white !important" }}
            color="info"
            size="small"
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            type="submit"
            className={`${classes.button} textTransformChange`}
            size="small"
            fullWidth
          >
            {loading ? (
              <CircularProgress size={24} style={{ color: "white" }} />
            ) : (
              "Update Profile"
            )}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AdminProfileForm;
