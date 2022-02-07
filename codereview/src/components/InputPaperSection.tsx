import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import { InputSectionTitle } from "../types"

const InputPaperSection = ({ inputChild, inputTitle }: { inputChild: JSX.Element, inputTitle: InputSectionTitle }) => {

    return (
        <div style={{ backgroundColor: "red"}}>
            <Grid item xs={12}>
                <Paper elevation={10}>
                    <Typography variant="h5">{inputTitle}</Typography>
                    {inputChild}
                </Paper>
            </Grid>
        </div>
    )
}

export default InputPaperSection