//import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"

//import "@fontsource/roboto"

import ReviewElementSurface from "../components/ReviewElementSurface"

const CreateReview = () => {
    return (
        <Paper elevation={5} style={{ height: "90vh"}}>
            <Grid 
                container
                alignItems="center"
                justifyContent="space-evenly"
            >
                <Grid item>
                    <ReviewElementSurface>
                        <Typography variant="h4">Code</Typography>
                    </ReviewElementSurface>
                </Grid>

                <Grid item>
                    <ReviewElementSurface>
                        <Typography variant="h4">Code</Typography>
                    </ReviewElementSurface>
                </Grid>

                <Grid item>
                    <ReviewElementSurface>
                        <Typography>Errors</Typography>
                    </ReviewElementSurface>
                </Grid>

                <Grid item>
                    <ReviewElementSurface>
                        <Typography>Screenshots</Typography>
                    </ReviewElementSurface>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default CreateReview