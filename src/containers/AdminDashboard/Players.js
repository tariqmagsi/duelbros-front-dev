import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import DashboardOutline from './DashboardOutline';
import DataTable from "./DataTable"
import { Service } from '../../config/service';

const Players = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const columns = ["Username", "Nickname", "Email", "Coins", "Total Match Count", "Total Lose Count", "Total Wins Count"]

    const getPlayers = async () => {
        setLoading(true);
        try {
            const result = await Service.getPlayers()
            setData(result.data)
        } catch (error) {
            // alert(error)
            console.log('Inside Catch => ', error);
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        getPlayers()
    }, [])

    return (
        <DashboardOutline ChildComponent={() => {return loading ? <div style={{textAlign: "center"}}><CircularProgress /></div> : <DataTable data={data} columns={columns} role="player"/>}} />
    )
}

export default Players