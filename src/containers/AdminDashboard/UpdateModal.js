import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { CircularProgress, FormControl, InputLabel, MenuItem, OutlinedInput } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';
import { colors } from "../../res/colors";

const roleDefine = 'user_role';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'user',
    'moderator',
    'admin',
    'player',
];

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


export default function UpdateDialog({
    type,
    handleClose,
    open,
    loading,
    loadingDltButton,
    update,
    deleteRow,
    data,
    id
}) {
    console.log(data)
    const [username, setUsername] = React.useState(data?.user_id?.username);
    const [email, setEmail] = React.useState(data?.user_id?.email);
    const [nickname, setNickname] = React.useState(data?.nickname);
    const [coins, setCoins] = React.useState(data?.user_id?.coins);
    const [personName, setPersonName] = React.useState(data?.user_id?.role);
    const [totalMatchCount, setTotalMatchCount] = React.useState(data?.total_match_count);
    const [totalWinsCount, setTotalWinsCount] = React.useState(data?.total_wins_count);
    const [totalLoseCount, setTotalLoseCount] = React.useState(data?.total_lose_count);
    const theme = useTheme();

    const updatePlayer = () => {

        const objData = {
            id: data?.user_id?._id,
            username,
            email,
            nickname,
            total_match_count: totalMatchCount ? totalMatchCount : 0,
            total_wins_count: totalWinsCount ? totalWinsCount : 0,
            total_lose_count: totalLoseCount ? totalLoseCount : 0,
            coins: coins ? coins : 0,
        };
        update(objData);
    };

    const deletePlayer = () => {
        const objData = {
            id: data?.user_id?._id,
        };
        deleteRow(objData);
    };

    const updateModeratorAndUser = () => {
        let objData = {
            id: data?.user_id?._id,
            username,
            email,
            coins: coins ? coins : 0,
            totalMatchCount
        };

        if (type === 'User Role') {
            console.log(personName)
            objData = {
                id: data?.user_id?._id,
                role: personName
            };
        }
        update(objData);
    };


    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{type}</DialogTitle>
                <DialogContent>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            type === "Player" ? updatePlayer() : updateModeratorAndUser();
                        }}
                    >
                        {
                            type !== 'User Role' && (
                                <>
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
                                        id="coins"
                                        label="Coins"
                                        type="number"
                                        fullWidth
                                        value={coins}
                                        onChange={(e) => setCoins(e.target.value)}
                                        variant="standard"
                                    />
                                </>
                            )
                        }
                        {
                            type === 'User Role' && (
                                <div style={{ backgroundColor: 'red' }}>
                                    {
                                        personName.map((name) => {
                                            console.log('file: UpdateModal.js => line 174 => personName.map => name', name);
                                            <span style={{ color: colors.black }}>{name}</span>

                                        })
                                    }
                                </div>
                            )
                        }
                        {
                            type === 'User Role' && (
                                <div>
                                    <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
                                        <Select
                                            multiple
                                            displayEmpty
                                            value={personName}
                                            onChange={handleChange}
                                            input={<OutlinedInput />}
                                            renderValue={(selected) => {
                                                if (selected.length === 0) {
                                                    return <em>Select User Role</em>;
                                                }
                                                return selected.join(', ');
                                            }}
                                            MenuProps={MenuProps}
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem disabled value="">
                                                <em>Select User Role</em>
                                            </MenuItem>
                                            {names.map((name) => (
                                                <MenuItem
                                                    key={name}
                                                    value={name}
                                                    style={getStyles(name, personName, theme)}
                                                >
                                                    {name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                            )}
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
                        {type !== "User Role" && <Button variant="contained" size="small" style={{ marginLeft: 10 }} onClick={deletePlayer}>
                            {loadingDltButton ? (
                                <CircularProgress size={24} style={{ color: "white", }} />
                            ) : (
                                "Delete"
                            )}
                        </Button>}
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
