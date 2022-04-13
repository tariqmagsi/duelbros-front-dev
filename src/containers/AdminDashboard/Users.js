import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import DashboardOutline from './DashboardOutline';
import DataTable from "./DataTable"
import { Service } from '../../config/service';
import { getToken } from '../../utils';
import FormDialog from './Modal';
import { toast } from 'react-toastify';

const Users = () => {
    const [loading, setLoading] = useState(false)
    const [loadingBtn, setLoadingBtn] = useState(false)
    const [loadingDltBtn, setLoadingDltBtn] = useState(false)
    const [data, setData] = useState([])
    const columns = ["Username", "Email", "Coins", "Edit"]
    const [open, setOpen] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)

    const getUsers = async () => {
        setLoading(true);
        try {
            const result = await Service.getUsers(getToken())
            setData(result.data)
        } catch (error) {
            // alert(error)
            console.log('Inside Catch => ', error);
        } finally {
            setLoading(false)
        }
    };

    const addUser = async (data) => {
        console.log("ok")
        setLoadingBtn(true)
        try {
            const result = await Service.register(data, getToken())
            toast.success("User added successfully")
            handleClose()
            getUsers()
        } catch (error) {
            // alert(error)
            console.log('Inside Catch => ', error);
        } finally {
            setLoadingBtn(false)
        }
    }

    const updateUser = async (data, id) => {
        console.log("ok")
        setLoadingBtn(true)
        try {
            const result = await Service.updateUser(data, getToken())
            toast.success("User updated successfully")
            handleCloseUpdate()
            getUsers()
        } catch (error) {
            // alert(error)
            console.log('Inside Catch => ', error);
        } finally {
            setLoadingBtn(false)
        }
    }

    const deleteUser = async (data, id) => {
        setLoadingDltBtn(true)
        try {
            const result = await Service.deleteUser(data, getToken())
            toast.success("User deleted successfully")
            handleCloseUpdate()
            getUsers()
        } catch (error) {
            // alert(error)
            console.log('Inside Catch => ', error);
        } finally {
            setLoadingDltBtn(false)
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
        getUsers()
    }, [])

    return (
        <div>
            <div style={{ textAlign: "center", fontSize: "16px", color: 'white' }}>Users</div>

            <DashboardOutline ChildComponent={() => {
                return loading ? <div style={{ textAlign: "center" }}><CircularProgress /></div>
                    :
                    <div>
                        <div style={{ textAlign: "center", fontSize: "24px", fontWeight: 'bold', color: 'white' }}>Users</div>
                        <FormDialog type="User" handleOpen={handleOpen} loading={loadingBtn} handleClose={handleClose} add={addUser} open={open} />
                        <br />
                        <DataTable data={data} columns={columns} role="user" type="User" handleOpen={handleOpenUpdate} loadingDltButton={loadingDltBtn} loading={loadingBtn} handleClose={handleCloseUpdate} update={updateUser} open={openUpdate} deleteRow={deleteUser} />
                    </div>
            }}
            />
        </div>
    )
}

export default Users