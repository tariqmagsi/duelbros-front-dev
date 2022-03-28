import { Box, Container, Grid, Toolbar } from "@mui/material"
import { colors } from "../../res/colors"


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
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <ChildComponent />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default DashboardContainer