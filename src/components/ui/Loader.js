import { CircularProgress } from '@mui/material';
import React from 'react';
import { colors } from '../../res/colors';
import styles from './ui.module.css'

const Loader = (props) => {
    return (
        <div className={styles.loader} >
            <CircularProgress size={24} style={{ color: colors.primary }} />
        </div>
    );
};

export default Loader;
