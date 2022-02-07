import Box from "@mui/material/Box"
import Chip from "@mui/material/Chip"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs"

import ReviewInput from "./components/ReviewInput"

const App = () => {
    return (
        <Container maxWidth="xl">
            <Grid container direction="column" marginTop={5} border={1}>

                <Grid container item direction="row" padding={5} spacing={0} border={1} margin={0}>
                    <Grid item flexGrow={1}>aaaaaaa aaaaaaaaaa aaaaaa aaaaaaaaa aaaaaaaaa aaaaa</Grid>
                    <Grid item marginRight={3}><Chip label="submit" /></Grid>
                    <Grid item><Chip label="Instructions" /></Grid>
                </Grid>

                <Grid container item direction="row">
                    <Grid item xs={4} border={1}>
                        <ReviewInput />
                    </Grid>
                    <Grid item flexGrow={1} bgcolor={"lightblue"}>
                        <p>tähän tulee koodi</p>
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    )
}

export default App
