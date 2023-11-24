import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import Workout from "../../../models/Workout";

function WorkoutsHistoryGrid(props: { workouts: Workout[]; daysOfWeek: Date[]; handleWeekShift: any; }) {
    
    const handleChevronClick = (weeksDiff : number) => {
        props.handleWeekShift(weeksDiff);
    }

    function isSameDay(d1 : Date, d2 : Date) {
        return d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate();
    }

    const getDayWorkoutAmount = (day : Date) : number => {
        var found = props.workouts.filter( (workout) => isSameDay(workout.date, day) );
        var amount = 0;

        found.forEach ( (workout) => { amount += workout.duration.getSeconds() });

        return amount;
    }

    return(
        <Box bgcolor="ButtonShadow" width="100%" maxWidth="700px" height="100%" borderRadius={4} position="relative" justifyContent="center">
            <Box width="90%" height="90%" padding={2} paddingLeft="5%" paddingRight="5%" justifyContent="center">
                <Box position="absolute" left={0} top="125px">
                    <IconButton onClick={() => handleChevronClick(-1)} color="primary">
                        <ChevronLeft/>
                    </IconButton>
                </Box>
                <Box className="Box Name" width="100%" height="100%" display="flex" flexDirection="row">
                    {
                        props.daysOfWeek.map(function(day, i){
                            return (
                                <Box key={i} width="100%" justifyContent="center">
                                    <Box height="90%" marginLeft="30%" marginRight="30%" display="flex" justifyContent="center" position="relative">
                                        <Box width="100%" maxWidth="50px" position="absolute" bottom={0} height={getDayWorkoutAmount(day) / 75} boxShadow={3} borderRadius="5px" maxHeight="100%" bgcolor="#8F2D56">
                                        </Box>
                                    </Box>
                                    <Box height="10%" textAlign="center" paddingTop={1}>
                                        <Typography fontSize="0.875rem" fontWeight="400">
                                            {day.toLocaleDateString('en-us', { month:"short", day: "numeric"})}
                                        </Typography> 
                                    </Box>
                                </Box>
                            );
                        })
                    }
                </Box>
                <Box position="absolute" right={0} top="125px">
                    <IconButton onClick={() => handleChevronClick(1)} color="primary">
                        <ChevronRight/>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}
  
export default WorkoutsHistoryGrid;  