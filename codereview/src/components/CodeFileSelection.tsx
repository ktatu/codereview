import Button from "@mui/material/Button"
import FormControl from "@mui/material/FormControl"
import FormControlLabel from "@mui/material/FormControlLabel"
import Grid from "@mui/material/Grid"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"

import handleInputFiles from "../logic/FileHandler"

import { useState } from "react"

import { UploadType } from "../types"

const CodeFileSelection = () => {

    const [fileOrFolder, setFileOrFolder] = useState<UploadType>("file")

    const handleRadioToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFileOrFolder(event.target.value as UploadType)
    }

    const handleSelection = async (event: React.ChangeEvent<HTMLInputElement>) => {

    }

    return (
        <Grid item xs={12}>
            <FormControl>
                <RadioGroup
                    row
                    value={fileOrFolder}
                    onChange={handleRadioToggle}
                >
                    <FormControlLabel
                        value="file"
                        control={<Radio />}
                        label="File"
                    />
                    <FormControlLabel
                        value="folder"
                        control={<Radio />}
                        label="Folder"
                    />
                </RadioGroup>
                <Button 
                    variant="contained"
                    component="label"
                >
                    { // @ts-ignore
                    } {fileOrFolder === "file" ? <input type="file" onChange={handleSelection} hidden multiple /> : <input type="file" onChange={handleSelection} hidden directory="" webkitdirectory="" /> }
                    Select
                </Button>
            </FormControl>
        </Grid>
    )
}

export default CodeFileSelection