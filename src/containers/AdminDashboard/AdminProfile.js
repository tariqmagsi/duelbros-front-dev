import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import AdminProfileForm from '../../components/AdminProfileForm';
import DashboardOutline from './DashboardOutline';
import { Service } from '../../config/service';
import { getToken } from '../../utils';

const AdminProfile = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    const getProfile = async () => {
        setLoading(true);
        try {
            const result = await Service.getProfile(getToken())
            setData(result.data)
        } catch (error) {
            // alert(error)
            console.log('Inside Catch => ', error);
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <DashboardOutline ChildComponent={() => {return loading ? <div style={{textAlign: "center"}}><CircularProgress /></div> : <AdminProfileForm data={data} />}} />
    )
}

export default AdminProfile