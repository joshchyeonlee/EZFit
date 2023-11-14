import { ArrowBack } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import WorkoutsHistoryGrid from "./WorkoutsHistoryGrid";
import { useEffect, useState } from "react";
import workouts from "../../../mockData/Workouts";
import WorkoutHistoryList from "./WorkoutHistoryList";
import Workout from "../../../models/Workout";
import { useNavigate } from "react-router-dom";

function WorkoutsHistory() {
    
    const [currentDayIndex, setCurrentDayIndex] = useState(new Date().toDateString());

    const [currentWeek, setCurrentWeek] = useState(new Array());

    function handleWeekShift(weeksToShiftBy : number)
    {
        var newCurrentDay = new Date(currentDayIndex);
        newCurrentDay.setDate(newCurrentDay.getDate() + weeksToShiftBy * 7);
        setCurrentDayIndex(newCurrentDay.toDateString());
    }

    useEffect( () =>
    {
        var newWeek = new Array();
        for (var i = 1; i <= 7; i++)
        {
            var dateToAdd = new Date(currentDayIndex);
            dateToAdd.setDate(dateToAdd.getDate() - 7 + i);
            newWeek.push(dateToAdd);
        }
        setCurrentWeek(newWeek);

    }, [currentDayIndex]);

    const [activeWorkouts, setActiveWorkouts] = useState(workouts);
    
    const removeWorkout = (workout : Workout) =>
    {
        var newWorkoutList = activeWorkouts.filter(e => e != workout);
        setActiveWorkouts(newWorkoutList);
    }

    const [currentWeekWorkouts, setCurrentWeekWorkouts] = useState(new Array());

    useEffect( () =>
    {
        var newWeekWorkouts = new Array();
        console.log(currentWeek.filter(date => date.getDate() <= new Date(currentDayIndex).getDate() && date.getDate() > new Date(currentDayIndex).getDate() - 7));
        newWeekWorkouts = activeWorkouts.filter(workout => workout.date.getDate() <= new Date(currentDayIndex).getDate() && workout.date.getDate() > new Date(currentDayIndex).getDate() - 7);
        setCurrentWeekWorkouts(newWeekWorkouts);
        console.log(newWeekWorkouts);
    }, [currentWeek, activeWorkouts]);
    
    const navigate = useNavigate();

    const handleBackClick = () => {
      navigate("/Workouts/");
    };

    return (
        <Box justifyContent="center" padding={3}>
            <Box textAlign="left" justifyContent="center">
                <IconButton onClick={handleBackClick}>
                    <ArrowBack fontSize="large" color="primary"></ArrowBack>
                </IconButton>
            </Box>
            <Box width="100%" display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                <Typography variant="h5" sx={{ fontWeight: 'bold' , height:"30%"}} >Workout History</Typography>
                <Box width="100%" height="70%">
                    <Box padding={2} width="97%" height="300px" maxHeight="70%" >
                        <WorkoutsHistoryGrid workouts={currentWeekWorkouts} daysOfWeek={currentWeek} handleWeekShift={handleWeekShift}/>
                    </Box>
                    <Box padding={2} width="97%" height="150px" maxHeight="20%" sx={{overflow: "hidden", overflowY: "scroll"}}>
                        <WorkoutHistoryList workouts={currentWeekWorkouts} removeWorkout={removeWorkout}/>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
  
export default WorkoutsHistory;  