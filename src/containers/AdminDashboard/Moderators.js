import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import DashboardOutline from './DashboardOutline';
import DataTable from "./DataTable"
import { Service } from '../../config/service';
import { getToken } from '../../utils';
import FormDialog from './Modal';
import { toast } from 'react-toastify';

const Moderators = () => {
    const [loading, setLoading] = useState(false)
    const [loadingBtn, setLoadingBtn] = useState(false)
    const [loadingDltBtn, setLoadingDltBtn] = useState(false)
    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)
    const columns = ["Username", "Email", "Coins", "Total Match Count", 'Edit']

    const getModerators = async () => {
        setLoading(true);
        try {
            const result = await Service.getModerators(getToken())
            setData(result.data)
        } catch (error) {
            // alert(error)
            console.log('Inside Catch => ', error);
        } finally {
            setLoading(false)
        }
    };

    const updateModerator = async (data) => {
        console.log('file: Players.js => line 48 => updatePlayer => data', data);
        setLoadingBtn(true)
        try {
            const result = await Service.updateModerator(data, getToken())
            toast.success("Moderator updated successfully")
            handleCloseUpdate()
            getModerators()
        } catch (error) {
            // alert(error)
            console.log('Inside Catch => ', error);
        } finally {
            setLoadingBtn(false)
        }
    }

    const addModerator = async (data) => {
        setLoadingBtn(true)
        try {
            const result = await Service.registerModerator(data, getToken())
            toast.success("Moderator added successfully")
            handleClose()
            getModerators()
        } catch (error) {
            // alert(error)
            console.log('Inside Catch => ', error);
        } finally {
            setLoadingBtn(false)
        }
    }

    const deleteModerator = async (data) => {
        setLoadingDltBtn(true)
        try {
            const result = await Service.deleteModerator(data, getToken())
            toast.success("Moderator deleted successfully")
            handleCloseUpdate()
            getModerators()
        } catch (error) {
            // alert(error)
            console.log('Inside Catch => ', error);
        } finally {
            setLoadingDltBtn(false)
        }
    }



    const handleOpenUpdate = () => {
        setOpenUpdate(true)
    }


    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleCloseUpdate = () => {
        setOpenUpdate(false)
    }



    useEffect(() => {
        getModerators()
    }, [])

    return (
        <div>
            <div style={{ textAlign: "center", fontSize: "16px", color: 'white' }}>Moderators</div>
            <DashboardOutline ChildComponent={() => {
                return loading ? <div style={{ textAlign: "center" }}><CircularProgress /></div>
                    :
                    <div>
                        <div style={{ textAlign: "center", fontSize: "24px", fontWeight: 'bold', color: 'white' }}>Moderators</div>
                        <FormDialog type="Moderator" handleOpen={handleOpen} loading={loadingBtn} handleClose={handleClose} add={addModerator} open={open} />
                        <br />
                        <DataTable data={data} columns={columns} role="moderator" type="Moderator" handleOpen={handleOpenUpdate} loading={loadingBtn} handleClose={handleCloseUpdate} update={updateModerator} open={openUpdate} deleteRow={deleteModerator} loadingDltButton={loadingDltBtn} />

                    </div>
            }} />
        </div>
    )
}

export default Moderators