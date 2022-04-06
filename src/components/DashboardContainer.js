import { Box, Container, Grid, Toolbar } from "@mui/material"
import { colors } from "../res/colors"


const DashboardContainer = ({ChildComponent}) => {
    return (
        <Box
            component="main"
            sx={{
                backgroundColor: colors.backgroundPrimary,
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
        >
            <Toolbar />
            
            <ChildComponent />
                    
        </Box>
    )
}

export default DashboardContainer