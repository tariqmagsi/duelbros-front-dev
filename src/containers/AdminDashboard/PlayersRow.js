import { TableCell, TableRow } from "@mui/material"


const PlayersRow = ({row}) => {
    return (
        <TableRow key={row._id}>
            <TableCell component="th" scope="row">
                {row.user_id ? row.user_id.username : ""}
            </TableCell>
            <TableCell component="th" scope="row">
                {row.nickname}
            </TableCell>
            <TableCell >
                {row.user_id ? row.user_id.email : ""}
            </TableCell>
            <TableCell >
                {row.user_id ? row.user_id.coins : ""}
            </TableCell>
            <TableCell >
                {row.total_match_count}
            </TableCell>
            <TableCell >
                {row.total_lose_count}
            </TableCell>
            <TableCell >
                {row.total_wins_count}
            </TableCell>
        </TableRow>
    )
}

export default PlayersRow