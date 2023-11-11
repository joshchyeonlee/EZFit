import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import { Close } from '@mui/icons-material';
import { useState } from "react";
import UncondensedDashboardGraph from "./UncondensedDashboardGraph";
import steps from "../../mockData/Steps";
import sevenDaysArray from "../../mockData/Dates";
import React from "react";
import { DatePicker } from "@mui/x-date-pickers";

const moment = require("moment");

function UncondensedDashboard(props: { open: boolean; setOpen: any; }) {
    // need to set this to false first
    const [date, setDate] = useState(moment());
    const [stepIndex, setStepIndex] = useState(6);
    const [avgSteps, setAvgSteps] = useState(() => { 
        const initVal = 0;
        const sum = steps.reduce((acc, curr) => acc + curr, initVal);
        return Math.round(sum/steps.length)
    })

    const handleClose = () => {
        setStepIndex(6);
        setDate(sevenDaysArray[6]);
        props.setOpen(false);
    }
    
    function handleSetDate(newDate: moment.Moment){
        const nextStepIndex = stepIndex + newDate.diff(date, "days")
        setStepIndex(nextStepIndex);
        setDate(newDate);
    }

    function getSteps(index: number){
        return steps[index];
    }

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'primaryBkg',
        border: '2px solid #000',
        borderRadius: "50px",
        boxShadow: 24,
        p: 4,
        display: 'flex',
    };

    return(
        <Modal
            open={props.open}
            onClose={handleClose}
            aria-labelledby="uncondensed-dashboard"
            aria-describedby="uncondensed-dashboard-modal"
        >
            <Box sx={style} justifyContent="center">
                <Box position="absolute" display="flex" justifyContent="flex-end" right="10px" top="10px" padding="10px">
                    <IconButton onClick={() => handleClose()}><Close/></IconButton>
                </Box>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                    <Typography variant="h5"  sx={{ fontWeight: 'bold' }} >Step Count</Typography>
                    <Typography variant="subtitle1" sx={{paddingTop:1}}>Average: {avgSteps} steps</Typography>
                    <Box padding={2}>
                        <UncondensedDashboardGraph steps={steps} handleSetDate={handleSetDate} currentIndex={stepIndex} setCurrentIndex={setStepIndex}/>
                    </Box>
                    <Box display="flex" alignItems="center" padding={1}>
                        <DatePicker
                            format="MMM DD, YYYY"
                            value={date}
                            disableFuture
                            onChange={(newDate) => handleSetDate(newDate)}
                            slotProps={{ openPickerButton: { color: "primary" } }}
                            sx={{
                            backgroundColor: (theme) => theme.palette.textFieldBkg,
                            borderRadius: "10px",
                            width: "100%",
                            "& .MuiInputBase-input": {
                                padding: "5px",
                                textAlign: "center",
                            },
                            "& .MuiInputBase-root": {
                                borderRadius: "10px",
                            },
                            }}
                        />
                    </Box>
                    <Box paddingTop={1} paddingBottom={4}>
                        <Typography variant="h6">{getSteps(stepIndex)} steps</Typography>
                    </Box>
                    <Button variant="contained">Update Manually</Button>
                </Box>
            </Box>
        </Modal>
    );
}

export default UncondensedDashboard;