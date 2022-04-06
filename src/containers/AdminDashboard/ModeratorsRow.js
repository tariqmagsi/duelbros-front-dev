import { Edit } from "@mui/icons-material";
import { TableCell, TableRow } from "@mui/material"


const ModeratorsRow = ({ row, handleOpen, setSelectedRow, }) => {
    return (
        <TableRow key={row._id}>
            <TableCell component="th" scope="row">
                {row.user_id ? row.user_id.username : ""}
            </TableCell>
            <TableCell>
                {row.user_id ? row.user_id.email : ""}
            </TableCell>
            <TableCell >
                {row.user_id ? row.user_id.coins : ""}
            </TableCell>
            <TableCell >
                {row.total_match_count}
            </TableCell>
            <TableCell style={{ cursor: 'pointer' }}>
                <Edit fontSize="small" onClick={() => {
                    setSelectedRow(row);
                    handleOpen()
                }} />
            </TableCell>
        </TableRow>
    )
}

export default ModeratorsRow