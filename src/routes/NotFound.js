import React, { useEffect } from 'react';
import images from '../assets';
import { colors } from '../res/colors';

export default function NotFound(props) {

    useEffect(() => {
        setTimeout(() => {
            props.history.push('/dashboard')
        }, 3000);
    }, [])

    return (
        <div
            style={{
                display: 'flex',
                height: '100vh',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: colors.buttonBlue
            }}
        >
            {/* <img
                src={images.logo}
            /> */}
            <h1
                style={{
                    color: colors.textPrimary
                }}
            >
                404 Not Found
            </h1>
            <h3
                style={{
                    color: colors.textPrimary
                }}
            >
                Redirecting ...
            </h3>
        </div>
    )
}
