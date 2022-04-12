import React, { useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import { Slide } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import { colors } from '../res/colors';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: 2,
    },
    closeButton: {
        position: 'absolute',
        right: 1,
        top: 1,
        color: 'grey',
    },
});


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomizedDialogs({ open, handleClose, title, children, component, size, footer, noFooter, fullScreen }) {

    return (
        <div>
            <Dialog fullScreen={fullScreen}
                maxWidth={size ? size : 'md'}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                TransitionComponent={Transition}
            >
                <CloseOutlined onClick={handleClose} style={{position: 'absolute', right: 10, top: 10, cursor: 'pointer', color: colors.buttonGray}}/>
                {children}
            </Dialog>
        </div>
    );
}