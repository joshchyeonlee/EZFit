import { Box, Button, IconButton, Modal, Snackbar, TextField, Typography } from "@mui/material";
import { Close } from '@mui/icons-material';
import { useState, useEffect } from "react";
import UncondensedDashboardGraph from "./UncondensedDashboardGraph";
import modalData from "../../mockData/Steps";
import daysArray from "../../mockData/Dates";
import { DatePicker } from "@mui/x-date-pickers";

const moment = require("moment");

function UncondensedDashboard(props: { open: boolean; setOpen: any; selectedModal: string; }) {
    const [date, setDate] = useState(moment());
    const [stepIndex, setStepIndex] = useState(modalData[0].length - 1);
    const [splitIndex, setSplitIndex] = useState(modalData[0].length - 7);
    const [avgSteps, setAvgSteps] = useState(0)
    const [isUpdateManually, setIsUpdateManually] = useState((false));
    const [step, setStep] = useState(modalData[0][stepIndex])
    const [isTyped, setIsTyped] = useState(false);
    const [inputValue, setInputValue] = useState(0);
    const [openUpdateConfirmation, setOpenUpdateConfirmation] = useState(false);
    const [data, setData] = useState<number[]>(modalData[0]);

    const handleClose = () => {
        setStepIndex(daysArray.length - 1);
        setDate(daysArray[daysArray.length - 1]);
        props.setOpen(false);
        console.log("set open false");
        setIsUpdateManually(false);
    }

    const calculateAverage = (start: number) => {
        const initVal = 0;
        const sum = data.slice(start, start + 7).reduce((acc, curr) => acc + curr, initVal);
        setAvgSteps(Math.round(sum/data.length))
    }
    
    function handleSetDate(index: number){
        setDate(daysArray[index]);
        setStepIndex(index);
        setStep(data[index]);
    }

    function handleSetCalendarDate(newDate: moment.Moment){
        const nextStepIndex = stepIndex + newDate.diff(date, "days");
        
        if(nextStepIndex - 6 < 0) setSplitIndex(0);
        else setSplitIndex(nextStepIndex - 6);
        
        setDate(newDate);
        setStepIndex(nextStepIndex);
        setStep(data[nextStepIndex]);
        setIsTyped(false);
        setInputValue(data[nextStepIndex]);
    }

    function getSteps(index: number){
        return data[index];
    }

    const graphChevronClick = (setDiff : number) => {
        var nextStepIndex = stepIndex + (setDiff * 7);
        var nextSplitIndex = splitIndex + (setDiff * 7);
        
        if(nextStepIndex < 0) nextStepIndex = 0;
        else if (nextStepIndex > data.length - 1) nextStepIndex = data.length - 1;

        if(nextSplitIndex < 0) nextSplitIndex = 0;
        else if (nextSplitIndex > data.length - 7) nextSplitIndex = data.length - 7;

        setSplitIndex(nextSplitIndex);
        setDate(daysArray[nextStepIndex]);
        setStepIndex(nextStepIndex);
        setStep(data[nextStepIndex]);
        setIsTyped(false);
        setInputValue(data[nextStepIndex]);
        calculateAverage(nextSplitIndex);
    }

    const handleTextFieldUpdate = (val: number) => {
        if(isNaN(val)) val = 0;
        setIsTyped(true);
        setInputValue(val);
    }

    const handleUpdateValue = () => {
        data[stepIndex] = inputValue;
        setIsUpdateManually(false);
        calculateAverage(splitIndex);
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
        maxWidth: "65%",
        minWidth: "40%",
        minHeight: "60%",
    };

    const handleConfirmationClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') return;
        setOpenUpdateConfirmation(false);
    };

    useEffect(() => {
        calculateAverage(splitIndex);
    }, [])

    useEffect(() => {
        if(props.selectedModal === "Steps") setData(modalData[0]);
        else if(props.selectedModal === "Calories Burned") setData(modalData[1]);
        else if(props.selectedModal === "Active Minutes") setData(modalData[2]);
        else if(props.selectedModal === "Distance Travelled") setData(modalData[3]);
        else setData([]);

    }, [props.selectedModal])

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
                        <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" sx={{width:"100%"}}>
                            <Typography variant="h5"  sx={{ fontWeight: 'bold' }}>Manual Update</Typography>
                        </Box>
                        <Box paddingTop={2} paddingBottom={4} display="flex" justifyContent="center" alignItems="center">
                                <Typography variant="h6">{date.format("MMM DD YYYY")}</Typography>
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center" padding={8}>
                            <TextField 
                                variant="standard"
                                inputProps={{ style:{textAlign:"center"} }}
                                InputProps={{ endAdornment:"steps" }}
                                value={!isTyped ? step : inputValue}
                                onChange={(e) => {handleTextFieldUpdate(parseInt(e.target.value))}}
                                />
                        </Box>
                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" padding={8}>
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
                    <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center" sx={{width:"100%"}}>
                        <Typography variant="h5"  sx={{ fontWeight: 'bold' }} >{props.selectedModal}</Typography>
                        <Typography variant="subtitle1" sx={{paddingTop:1}}>Average: {avgSteps} {props.selectedModal}</Typography>
                        <Box padding={2}>
                            <UncondensedDashboardGraph
                                steps={data}
                                handleSetDate={handleSetDate}
                                currentIndex={stepIndex}
                                setCurrentIndex={setStepIndex}
                                handleChevronClick={graphChevronClick}
                                setStep={setStep}
                                splitIndex={splitIndex}
                                setSplitIndex={setSplitIndex}/>
                        </Box>
                        <Box display="flex" alignItems="center" padding={1}>
                            <DatePicker
                                format="MMM DD, YYYY"
                                value={date}
                                minDate={daysArray[0]}
                                maxDate={daysArray[daysArray.length - 1]}
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
                            <Typography variant="h6">{getSteps(stepIndex)} {props.selectedModal}</Typography>
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