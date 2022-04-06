import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { CircularProgress } from '@mui/material';

export default function FormDialog({type, handleOpen, handleClose, open, loading, add}) {
  const [username, setUsername] = React.useState("") 
  const [email, setEmail] = React.useState("") 
  const [password, setPassword] = React.useState("") 
  const [nickname, setNickname] = React.useState("") 
  
    const addPlayer = () => {
      const data = {
          username,
          email,
          password,
          nickname
      }
      add(data)
    }

    const addModeratorAndUser = () => {
        const data = {
            username,
            email,
            password
        }
        add(data)
    }

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        Add {type}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{type}</DialogTitle>
        <DialogContent>
            <form onSubmit={(e) => {
                e.preventDefault()
                type === "Player" ? addPlayer() : addModeratorAndUser()}}>
                <TextField
                    autoFocus
                    margin="dense"
                    id="username"
                    label="Username"
                    type="text"
                    fullWidth
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email Address"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="password"
                    label="Password"
                    type="password"
                    fullWidth
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    variant="standard"
                />
                {type === "Player" &&
                    <TextField
                        autoFocus
                        margin="dense"
                        id="nickname"
                        label="Nickname"
                        type="text"
                        fullWidth
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        variant="standard"
                    />
                }
                <br/>
                <br/>
                <Button type="submit" variant="contained" size='small'>
                {
                    loading ?
                        <CircularProgress size={24} style={{ color: 'white' }} /> 
                        : 
                        "Add"
                }
                </Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}