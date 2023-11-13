import { ArrowBack } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import WorkoutsHistoryGrid from "./WorkoutsHistoryGrid";
import moment from "moment";
import { useState } from "react";
import workouts from "../../../mockData/Workouts";
import WorkoutHistoryList from "./WorkoutHistoryList";
import Workout from "../../../models/Workout";

function WorkoutsHistory() {
    
    function handleWeekShift(newDate: moment.Moment) {
        // Shift by a week!
    }

    const [activeWorkouts, setActiveWorkouts] = useState(workouts);
    
    const removeWorkout = (workout : Workout) =>
    {
        var newWorkoutList = activeWorkouts.filter(e => e != workout);
        setActiveWorkouts(newWorkoutList);
        console.log("Removed: " + workout.title)
    }

    return (
        <Box justifyContent="center" padding={3}>
            <Box textAlign="left" justifyContent="center">
                <IconButton>
                    <ArrowBack fontSize="large" color="primary"></ArrowBack>
                </IconButton>
            </Box>
            <Box width="100%" display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                <Typography variant="h5" sx={{ fontWeight: 'bold' , height:"30%"}} >Workout History</Typography>
                <Box width="100%" height="70%">
                    <Box padding={2} width="97%" height="300px" maxHeight="70%" >
                        <WorkoutsHistoryGrid workouts={activeWorkouts} handleWeekShift={handleWeekShift}/>
                    </Box>
                    <Box padding={2} width="97%" height="150px" maxHeight="20%" sx={{overflow: "hidden", overflowY: "scroll"}}>
                        <WorkoutHistoryList workouts={activeWorkouts} removeWorkout={removeWorkout}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
  
export default WorkoutsHistory;  