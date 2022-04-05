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
    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)
    const columns = ["Username", "Email", "Coins", "Total Match Count"]

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

    const addModerator = async (data) => {
        console.log("ok")
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

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        getModerators()
    }, [])

    return (
        <div>
            <div style={{textAlign: "center", fontSize: "16px", color: 'white'}}>Moderators</div>
            <DashboardOutline ChildComponent={() => {
                return loading ? <div style={{textAlign: "center"}}><CircularProgress /></div> 
                : 
                <div>
                    <div style={{textAlign: "center", fontSize: "24px", fontWeight: 'bold', color: 'white'}}>Moderators</div>
                    <FormDialog type="Moderator" handleOpen={handleOpen} loading={loadingBtn} handleClose={handleClose} add={addModerator} open={open}/>
                    <br/>
                    <DataTable data={data} columns={columns} role="moderator"/>
                </div>
                    }} />
        </div>
    )
}

export default Moderators