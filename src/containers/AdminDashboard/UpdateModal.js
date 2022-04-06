import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { CircularProgress } from "@mui/material";

export default function UpdateDialog({
  type,
  handleClose,
  open,
  loading,
  update,
  data,
  id
}) {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [nickname, setNickname] = React.useState("");
  const [coins, setCoins] = React.useState(0);
  const [totalMatchCount, setTotalMatchCount] = React.useState(0);
  const [totalWinsCount, setTotalWinsCount] = React.useState(0);
  const [totalLoseCount, setTotalLoseCount] = React.useState(0);

  React.useEffect(() => {
    console.log(id)
    setUsername(data && data.username ? data.username : "");
    setEmail(data && data.email ? data.email : "");
    setPassword(data && data.password ? data.password : "");
    setNickname(data && data.nickname ? data.nickname : "");
    setCoins(data && data.coins ? data.coins : 0);
    setTotalMatchCount(
      data && data.total_match_count ? data.total_match_count : 0
    );
    setTotalWinsCount(
      data && data.total_wins_count ? data.total_wins_count : 0
    );
    setTotalLoseCount(
      data && data.total_lose_count ? data.total_lose_count : 0
    );
  }, []);
  const updatePlayer = () => {
    const data = {
      username,
      email,
      password,
      nickname,
      total_match_count: totalMatchCount ? totalMatchCount : 0,
      total_wins_count: totalWinsCount ? totalWinsCount : 0,
      total_lose_count: totalLoseCount ? totalLoseCount : 0,
      coins: coins ? coins : 0,
    };
    update(data);
  };

  const updateModeratorAndUser = () => {
    const data = {
      username,
      email,
      password,
      coins: coins ? coins : 0,
    };
    update(data);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{type}</DialogTitle>
        <DialogContent>
          <form
            onSubmit={(e) => {
              type === "Player" ? updatePlayer() : updateModeratorAndUser();
            }}
          >
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
            <TextField
              autoFocus
              margin="dense"
              id="coins"
              label="Coins"
              type="number"
              fullWidth
              value={coins}
              onChange={(e) => setCoins(e.target.value)}
              variant="standard"
            />
            {type === "Player" && (
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
            )}
            {(type === "Player" || type === "Moderator") && (
              <TextField
                autoFocus
                margin="dense"
                id="totalMatchCount"
                label="Total Match Count"
                type="number"
                fullWidth
                value={totalMatchCount}
                onChange={(e) => setTotalMatchCount(e.target.value)}
                variant="standard"
              />
            )}
            {type === "Player" && (
              <>
                <TextField
                  autoFocus
                  margin="dense"
                  id="totalLoseCount"
                  label="Total Lose Count"
                  type="number"
                  fullWidth
                  value={totalLoseCount}
                  onChange={(e) => setTotalLoseCount(e.target.value)}
                  variant="standard"
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="totalWinsCount"
                  label="Total Wins Count"
                  type="number"
                  fullWidth
                  value={totalWinsCount}
                  onChange={(e) => setTotalWinsCount(e.target.value)}
                  variant="standard"
                />
              </>
            )}
            <br />
            <br />
            <Button type="submit" variant="contained" size="small">
              {loading ? (
                <CircularProgress size={24} style={{ color: "white" }} />
              ) : (
                "Update"
              )}
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
