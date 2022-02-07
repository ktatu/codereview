import Paper from "@mui/material/Paper"

const ReviewCreationSurface = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <Paper elevation={10}>
            {children}
        </Paper>
    )
}

export default ReviewCreationSurface