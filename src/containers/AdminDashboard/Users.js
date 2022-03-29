import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import DashboardOutline from './DashboardOutline';
import DataTable from "./DataTable"
import { Service } from '../../config/service';
import { getToken } from '../../utils';

const Users = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const columns = ["Username", "Email", "Coins"]

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

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <DashboardOutline ChildComponent={() => {return loading ? <div style={{textAlign: "center"}}><CircularProgress /></div> : <DataTable data={data} columns={columns} role="user"/>}} />
    )
}

export default Users