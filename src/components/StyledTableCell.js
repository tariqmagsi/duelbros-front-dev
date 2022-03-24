import { colors } from "../res/colors";

const { withStyles, TableCell } = require("@mui/material");

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: colors.secondary,
        color: theme.palette.common.white,
        textAlign: 'center',
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

export default StyledTableCell;
