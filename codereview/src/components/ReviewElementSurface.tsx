import Paper from "@mui/material/Paper"

const ReviewElementSurface = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <Paper elevation={10}>
            {children}
        </Paper>
    )
}

export default ReviewElementSurface