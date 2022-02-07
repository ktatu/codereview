import TextField from "@mui/material/TextField"

const DescriptionInput = ({ description, setDescription }: { description: any, setDescription: any }) => {

    const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value)
    }

    return (
        <TextField
            fullWidth
            minRows={5}
            multiline
            onChange={handleFieldChange}
            placeholder="Here you can provide additional information to make reviewing easier"
            value={description}
        />
    )
}

export default DescriptionInput