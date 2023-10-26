import { Box, Button, Card, Grid, IconButton, Modal, Typography } from "@mui/material";
import { CalendarMonth, Close } from '@mui/icons-material';
import { useEffect, useState } from "react";
import UncondensedDashboardGrid from "./UncondensedDashboardGraph";

function UncondensedDashboard(props: { open: boolean; }) {
    //need to set this to false first
    const [open, setOpen] = useState(props.open);
    const [date, setDate] = useState(new Date());
    const [dateString, setDateString] = useState(getDate(new Date()));
    const [stepIndex, setStepIndex] = useState(6);


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const height = 300;

    function getDate(date:Date){
        const month = date.toLocaleString('default',{month: 'short'});
        const year = date.getFullYear();
        const day = date.getDate();
        return `${month} ${day} ${year}`;
    }
    
    let steps = [3203, 1230, 4920, 3049, 2203, 5903, 2034];
    
    function handleSetDate(daysAway: number){
        const currentDate = date;
        currentDate.setDate(date.getDate() + daysAway);
        setDate(currentDate);
        setDateString(getDate(currentDate));
        setStepIndex(stepIndex + daysAway);
    }

    function getSteps(index: number){
        return steps[index];
    }

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        display: 'flex',
    };

    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="uncondensed-dashboard"
            aria-describedby="uncondensed-dashboard-modal"
        >
            <Box sx={style} justifyContent="center">
                <Box position="absolute" display="flex" justifyContent="flex-end" right="10px" top="10px">
                    <IconButton onClick={() => handleClose()}><Close/></IconButton>
                </Box>
                <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                    <Typography>Step Count</Typography>
                    <Box padding={2}>
                        <UncondensedDashboardGrid steps={steps} height={height} handleSetDate={handleSetDate}/>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Typography>{dateString}</Typography>
                        <IconButton><CalendarMonth/></IconButton>
                    </Box>
                    <Box paddingBottom={2}>
                        <Typography>{getSteps(stepIndex)} steps</Typography>
                    </Box>
                    <Button variant="contained">Update Manually</Button>
                </Box>
            </Box>
        </Modal>
    );
}

export default UncondensedDashboard;