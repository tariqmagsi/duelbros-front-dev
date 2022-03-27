import { TableCell, TableRow } from "@mui/material"


const UsersRow = ({row}) => {
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
        </TableRow>
    )
}

export default UsersRow