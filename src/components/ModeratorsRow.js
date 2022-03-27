import { TableCell, TableRow } from "@mui/material"


const ModeratorsRow = ({row}) => {
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
        </TableRow>
    )
}

export default ModeratorsRow