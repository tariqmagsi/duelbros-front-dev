import { Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core';
import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';
import React, { Fragment, useState } from 'react';
import colors from 'res/colors';

const CollapsableRow = ({
    cells = [],
    details = {},
    collapsable = true,
}) => {
    const [open, setOpen] = useState(false);

    return (
        <Fragment>
            <TableRow >
                {
                    !collapsable ? null :
                        <TableCell>
                            <IconButton size="small" onClick={setOpen.bind(this, !open)}>
                                {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                            </IconButton>
                        </TableCell>
                }
                {cells.map((item, index) => <TableCell key={`collapsableRowCell${index}`} align="center">{item}</TableCell>)}

            </TableRow>
            {
                !collapsable ? null :
                    <TableRow>
                        <TableCell colSpan={cells.length + 1} style={{ paddingBottom: 0, paddingTop: 0 }}>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                {
                                    Object.entries(details).map(([key, value], index) => {
                                        if (!value?.length) return null
                                        return (
                                            <Fragment key={`detail${index}`}>
                                                <Typography variant="h6" gutterBottom component="div">{key}</Typography>
                                                <Table style={{ marginBottom: 10 }} size="small" aria-label="purchases">
                                                    <TableBody>
                                                        {
                                                            value.map((detailRow, _index) => (
                                                                <TableRow >
                                                                    {detailRow.map((detailRowCell, detailRowCellIndex) => (
                                                                        <TableCell align="center" key={`detailedRowCell${detailRowCellIndex}`}>
                                                                            {detailRowCell}
                                                                        </TableCell>
                                                                    ))}
                                                                </TableRow>
                                                            ))
                                                        }
                                                    </TableBody>
                                                </Table>
                                            </Fragment>
                                        )
                                    })
                                }
                            </Collapse>
                        </TableCell>
                    </TableRow>
            }
        </Fragment>
    );
};

export default CollapsableRow;
