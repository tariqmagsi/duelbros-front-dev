import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import DashboardOutline from './DashboardOutline';
import DataTable from "./DataTable"
import { Service } from '../../config/service';
import { getToken } from '../../utils';
import FormDialog from './Modal';
import { toast } from 'react-toastify';

const UsersRole = () => {
    const [loading, setLoading] = useState(false)
    const [loadingBtn, setLoadingBtn] = useState(false)
    const [loadingDltBtn, setLoadingDltBtn] = useState(false)
    const [data, setData] = useState([])
    const columns = ["Username", "Email", "Coins", "Role", "Edit"]
    const [open, setOpen] = useState(false)
    const [openUpdate, setOpenUpdate] = useState(false)

    const getUsers = async () => {
        setLoading(true);
        try {
            const result = await Service.getUsers(getToken())
            console.log('file: UserRole.js => line 23 => getUsers => result', result.data);
            setData(result.data)
        } catch (error) {
            // alert(error)
            console.log('Inside Catch => ', error);
        } finally {
            setLoading(false)
        }
    };

    const getAllUsers = async () => {
        setLoading(true);
        try {
            const result = await Service.getAllUsers(getToken())
            console.log('file: UserRole.js => line 37 => getAllUsers => result', result);
            setData(result.data)
        } catch (error) {
            // alert(error)
            console.log('Inside Catch => ', error);
        } finally {
            setLoading(false)
        }
    };

    const addUser = async (data) => {
        setLoadingBtn(true)
        try {
            const result = await Service.register(data, getToken())
            toast.success("Moderator added successfully")
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
        console.log('file: UserRole.js => line 63 => updateUser => data', data);
        setLoadingBtn(true)
        try {
            const result = await Service.updateUserRole(data, getToken())
            toast.success("Player updated successfully")
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
            toast.success("Player deleted successfully")
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
        getAllUsers();
    }, [])

    return (
        <div>
            {/* <div style={{ textAlign: "center", fontSize: "16px", color: 'white' }}>Users Role</div> */}

            <DashboardOutline ChildComponent={() => {
                return loading ? <div style={{ textAlign: "center" }}><CircularProgress /></div>
                    :
                    <div>
                        <div style={{ textAlign: "center", fontSize: "24px", fontWeight: 'bold', color: 'white' }}>Users Role</div>
                        <FormDialog type="User" handleOpen={handleOpen} loading={loadingBtn} handleClose={handleClose} add={addUser} open={open} />
                        <br />
                        <DataTable data={data} columns={columns} role="user_role" type="user_role" handleOpen={handleOpenUpdate} loadingDltButton={loadingDltBtn} loading={loadingBtn} handleClose={handleCloseUpdate} update={updateUser} open={openUpdate} deleteRow={deleteUser} />
                    </div>
            }}
            />
        </div>
    )
}

export default UsersRole;