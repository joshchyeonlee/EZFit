import { Box, Button, IconButton, Modal, Snackbar, TextField, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Close } from '@mui/icons-material';
import { useState, useEffect } from "react";
import UncondensedDashboardGraph from "./UncondensedDashboardGraph";
import steps from "../../mockData/Steps";
import sevenDaysArray from "../../mockData/Dates";
import { DatePicker } from "@mui/x-date-pickers";

const moment = require("moment");

function UncondensedDashboard(props: { open: boolean; setOpen: any; }) {
    // need to set this to false first
    const [date, setDate] = useState(moment());
    const [stepIndex, setStepIndex] = useState(6);
    const [avgSteps, setAvgSteps] = useState(0)
    const [isUpdateManually, setIsUpdateManually] = useState((false));
    const [step, setStep] = useState(steps[stepIndex])
    const [isTyped, setIsTyped] = useState(false);
    const [inputValue, setInputValue] = useState(0);
    const [openUpdateConfirmation, setOpenUpdateConfirmation] = useState(false);

    const handleClose = () => {
        setStepIndex(6);
        setDate(sevenDaysArray[6]);
        props.setOpen(false);
        setIsUpdateManually(false);
    }

    const calculateAverage = () => {
        const initVal = 0;
        const sum = steps.reduce((acc, curr) => acc + curr, initVal);
        setAvgSteps(Math.round(sum/steps.length))
    }
    
    function handleSetDate(index: number){
        setDate(sevenDaysArray[index]);
        setStepIndex(index);
        setStep(steps[index]);
    }

    function handleSetCalendarDate(newDate: moment.Moment){
        const nextStepIndex = stepIndex + newDate.diff(date, "days");
        setDate(newDate);
        setStepIndex(nextStepIndex);
        setStep(steps[nextStepIndex]);
        setIsTyped(false);
        setInputValue(steps[nextStepIndex]);
    }

    function getSteps(index: number){
        return steps[index];
    }

    const handleChevronClick = (setDiff : number) => {
        const nextStepIndex = stepIndex + setDiff;
        setDate(sevenDaysArray[nextStepIndex]);
        setStepIndex(nextStepIndex);
        setStep(steps[nextStepIndex]);
        setIsTyped(false);
        setInputValue(steps[nextStepIndex]);
    }

    const handleTextFieldUpdate = (val: number) => {
        if(isNaN(val)) val = 0;
        setIsTyped(true);
        setInputValue(val);
        console.log(val);
    }

    const handleUpdateValue = () => {
        steps[stepIndex] = inputValue;
        setIsUpdateManually(false);
        calculateAverage();
        setOpenUpdateConfirmation(true);
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
        width: 700,
        height: 500,
    };

    const handleConfirmationClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return;
        setOpenUpdateConfirmation(false);
    };

    useEffect(() => {
        calculateAverage();
    }, [])

    return(
        <div>
        <Snackbar
            open={openUpdateConfirmation}
            autoHideDuration={3000}
            onClose={handleConfirmationClose}
            message="Updated Steps!"
        />
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
                    
                    {isUpdateManually ?
                    <div>
                        <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                            <Typography variant="h5"  sx={{ fontWeight: 'bold' }}>Manual Update</Typography>
                        </Box>
                        <Box padding={4} display="flex" justifyContent="center" alignItems="center">
                            <IconButton onClick={() => {handleChevronClick(-1)}} disabled={stepIndex === 0}>
                                <ChevronLeft/>
                            </IconButton>
                                <DatePicker
                                    format="MMM DD, YYYY"
                                    value={date}
                                    onChange={(newDate) => handleSetCalendarDate(newDate)}
                                    minDate={sevenDaysArray[0]}
                                    maxDate={sevenDaysArray[6]}
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
                            <IconButton onClick={() => {handleChevronClick(1)}} disabled={stepIndex === 6}>
                                <ChevronRight/>
                            </IconButton>
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center" padding={8}>
                            <TextField 
                                variant="standard"
                                InputProps={{ endAdornment:"steps" }}
                                value={!isTyped ? step : inputValue}
                                onChange={(e) => {handleTextFieldUpdate(parseInt(e.target.value))}}
                                />
                        </Box>
                        <Box padding={8} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <Box padding={1} width={250} display="flex" justifyContent="center" alignItems="center">
                                <Button fullWidth variant="contained" onClick={() => {handleUpdateValue()}}>
                                    Confirm
                                </Button>
                            </Box>
                            <Box padding={1} width={250} display="flex" justifyContent="center" alignItems="center">
                                <Button fullWidth variant="contained" color="secondary" onClick={() => { setIsUpdateManually(false) }}>
                                    Cancel
                                </Button>
                            </Box>
                        </Box>
                    </div>
                    :
                    <div>
                    <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                        <Typography variant="h5"  sx={{ fontWeight: 'bold' }} >Step Count</Typography>
                        <Typography variant="subtitle1" sx={{paddingTop:1}}>Average: {avgSteps} steps</Typography>
                        <Box padding={2}>
                            <UncondensedDashboardGraph steps={steps} handleSetDate={handleSetDate} currentIndex={stepIndex} setCurrentIndex={setStepIndex} handleChevronClick={handleChevronClick} setStep={setStep}/>
                        </Box>
                        <Box display="flex" alignItems="center" padding={1}>
                            <DatePicker
                                format="MMM DD, YYYY"
                                value={date}
                                minDate={sevenDaysArray[0]}
                                maxDate={sevenDaysArray[6]}
                                onChange={(newDate) => handleSetCalendarDate(newDate)}
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
                        <Button variant="contained" onClick={() => {setIsUpdateManually(true)}}>Update Manually</Button>
                    </Box>
                </div>
                    }
            </Box>
        </Modal>
        </div>
    );
}

export default UncondensedDashboard;