import Button from "@mui/material/Button"
import FormControl from "@mui/material/FormControl"
import FormControlLabel from "@mui/material/FormControlLabel"
import Grid from "@mui/material/Grid"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import Typography from "@mui/material/Typography"

import handleInputFiles from "../logic/FileHandler"

import { useState } from "react"

import { UploadType } from "../types"
import FileTree from "./FileTree"

const FileInput = () => {
    const [uploadType, setUploadType] = useState<UploadType>("file")

    const handleRadioToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUploadType(event.target.value as UploadType)
    }

    const handleSelection = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) {
            return
        }

        const fileList: FileList = event.target.files

        const isIndividualFiles = Boolean(uploadType === "file" ? true : false)
        const inputFileData = await handleInputFiles(fileList, isIndividualFiles)

        if (isIndividualFiles) {
            // @ts-ignore
            setFileUploadArray(fileUploadArray.concat(...inputFileData))
        } else {
            // @ts-ignore
            setFolderUploadArray(folderUploadArray.concat(inputFileData))
        }
    }

    const FileList = ({ dataArray, title }: { dataArray: any, title: string }) => {
        return (
            <div>
                <Typography variant="h6" component="h6">{title}</Typography>
                <ul style={{ listStyle: "none" }}>
                    {dataArray.map((dataset: any) => {
                        return (
                            <li 
                                key={dataset.name}
                            >
                                <FileTree
                                    data={dataset}
                                    setCode={null}
                                />
                            </li>
                        )
                    }
                    )}
                </ul>
            </div>
        )
    }

    return (
        <div>
            <Grid item xs={12}>
                <FormControl>
                    <RadioGroup
                        row
                        value={uploadType}
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
                        } {uploadType === "file" ? <input type="file" onChange={handleSelection} hidden multiple /> : <input type="file" onChange={handleSelection} hidden directory="" webkitdirectory="" /> }
                        Select
                    </Button>
                </FormControl>
            </Grid>

            <Grid item xs={12}>
                {(fileUploadArray.length > 0) && <FileList dataArray={fileUploadArray} title="Files" />}
                {(folderUploadArray.length > 0) && <FileList dataArray={folderUploadArray} title="Folders" />}
            </Grid>
        </div>
    )
}

export default FileInput