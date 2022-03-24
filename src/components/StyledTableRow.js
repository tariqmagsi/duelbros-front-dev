const { TableRow, withStyles } = require("@mui/material");

const StyledTableRow = withStyles((theme) => ({
    root: {
        // '&:nth-of-type(odd)': {
        //     backgroundColor: theme.palette.action.hover,
        // },

        '& > *': {
            borderBottom: 'unset',
        },
    },
}))(TableRow);

export default StyledTableRow;
