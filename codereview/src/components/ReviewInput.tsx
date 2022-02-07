import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Container from "@mui/material/Container"
import Chip from "@mui/material/Chip"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"

import TextField from "@mui/material/TextField"

import ReviewCreationSurface from "./ReviewCreationSurface"

import DescriptionInput from "./DescriptionInput"
import FileInput from "./FileInput"

import InputPaperSection from "./InputPaperSection"

import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs"

import { useState } from "react"
import { ReviewTabValue } from "../types"

/*
const SelectedTab = ({currentTab, setDescription}: {currentTab: ReviewTabValue, setDescription: any}) => {
    switch (currentTab) {
        case "files":
            return <FileInput />
        case "description":
            return <DescriptionInput setDescription={setDescription}/>
        case "errors":
            return <p>errors</p>
        case "screenshots":
            return <p>screenshots</p>
        default:
            return <p>should never happen</p>
    }

}
*/
const ReviewInput = () => {
    const [currentTab, setCurrentTab] = useState<ReviewTabValue>("files")

    const handleTabChange = (event: React.SyntheticEvent, newTabValue: ReviewTabValue) => {
        setCurrentTab(newTabValue)
    }

    return (
        <Box sx={{ width: "100%"}}>
            <Box sx={{ borderBottom: 1, borderColor: "divider", marginBottom: "20px"}}>
                <Tabs value={currentTab} onChange={handleTabChange}>
                    <Tab label="Files" value="files" />
                    <Tab label="Description" value="description" />
                    <Tab label="Errors / Logs" value="errors"/>
                    <Tab label="Screenshots" value="screenshots" />
                </Tabs>
            </Box>

            {currentTab === "files" && (<FileInput />)}
            {currentTab === "description" && (<DescriptionInput description={description} setDescription={setDescription}/>)}
            {/*currentTab === "errorsAndLogs" && (<FileInput />)*/}
            {/*currentTab === "screenshots" && (<FileInput />)*/}

        </Box>
    )
}

export default ReviewInput

//<SelectedTab currentTab={currentTab} setDescription={setDescription} />