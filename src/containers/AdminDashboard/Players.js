import { Button, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import DashboardOutline from './DashboardOutline';
import DataTable from "./DataTable"
import { Service } from '../../config/service';
import { getToken } from '../../utils';
import FormDialog from './Modal';
import { toast } from 'react-toastify';

const Players = () => {
    const [loading, setLoading] = useState(false)
    const [loadingBtn, setLoadingBtn] = useState(false)
    const [open, setOpen] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)
    const [data, setData] = useState([])
    const columns = ["Username", "Nickname", "Email", "Coins", "Total Match Count", "Total Lose Count", "Total Wins Count", "Edit"]

    const getPlayers = async () => {
        setLoading(true);
        try {
            const result = await Service.getPlayers(getToken())
            setData(result.data)
        } catch (error) {
            // alert(error)
            console.log('Inside Catch => ', error);
        } finally {
            setLoading(false)
        }
    };

    const addPlayer = async (data) => {
        console.log("ok")
        setLoadingBtn(true)
        try {
            const result = await Service.registerPlayer(data, getToken())
            toast.success("Player added successfully")
            handleClose()
            getPlayers()
        } catch (error) {
            // alert(error)
            console.log('Inside Catch => ', error);
        } finally {
            setLoadingBtn(false)
        }
    }

    const updatePlayer = async (data, id) => {
        console.log('file: Players.js => line 48 => updatePlayer => data', data);
        setLoadingBtn(true)
        try {
            const result = await Service.updatePlayer(data, getToken())
            console.log('file: Players.js => line 52 => updatePlayer => result', result);
            toast.success("Player updated successfully")
            handleCloseUpdate()
            getPlayers()
        } catch (error) {
            // alert(error)
            console.log('Inside Catch => ', error);
        } finally {
            setLoadingBtn(false)
        }
    }

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleOpenUpdate = () => {
        setOpenUpdate(true)
    }

    const handleCloseUpdate = () => {
        setOpenUpdate(false)
    }

    useEffect(() => {
        getPlayers()
    }, [])

    return (
        <div>
            <DashboardOutline ChildComponent={() => {
                return loading ? <div style={{ textAlign: "center" }}><CircularProgress /></div>
                    :
                    <div>
                        <div style={{ textAlign: "center", fontSize: "24px", fontWeight: 'bold', color: 'white' }}>Players</div>
                        <FormDialog type="Player" handleOpen={handleOpen} loading={loadingBtn} handleClose={handleClose} add={addPlayer} open={open} />
                        <br />
                        <DataTable data={data} columns={columns} role="player" type="Player" handleOpen={handleOpenUpdate} loading={loadingBtn} handleClose={handleCloseUpdate} update={updatePlayer} open={openUpdate} />
                    </div>
            }}

            />

        </div>
    )
}

export default Players