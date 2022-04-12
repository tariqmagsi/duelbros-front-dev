import { Edit } from "@mui/icons-material";
import { TableCell, TableRow } from "@mui/material"


const UsersRoleRow = ({ row, handleOpen, setSelectedRow, }) => {
    return (
        <TableRow key={row._id}>
            <TableCell component="th" scope="row">
                {row.username}
            </TableCell>
            <TableCell >
                {row.email}
            </TableCell>
            <TableCell>
                {row.coins}
            </TableCell>
            <TableCell>
                {row.role}
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

export default UsersRoleRow