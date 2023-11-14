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

    function getWorkoutDuration (day : Date) : number {
        var found = props.workouts.find( (workout) => workout.date === day );

        if (found != null)
        {
            console.log(found.duration.getSeconds());
            return found.duration.getSeconds();
        }
        else
        {
            return 0;
        }
    }

    return(
        <Box bgcolor="ButtonShadow" width="100%" height="100%" borderRadius={4} position="relative" justifyContent="center">
            <Box width="90%" height="90%" padding={2} paddingLeft="5%" paddingRight="5%" justifyContent="center">
                <Box position="absolute" left={0} top="125px">
                    <IconButton onClick={() => handleChevronClick(-1)}>
                        <ChevronLeft/>
                    </IconButton>
                </Box>
                <Box className="Box Name" width="100%" height="100%" display="flex" flexDirection="row">
                    {
                        props.daysOfWeek.map(function(day, i){
                            return (
                                <Box key={i} width="100%" justifyContent="center">
                                    <Box height="90%" marginLeft="30%" marginRight="30%" display="flex" justifyContent="center">
                                        <Box width="100%" maxWidth="50px" height="100%" bgcolor={ isSameDay(new Date(), day) ? "#8F2D56" : "#C3C5CD"}>
                                        </Box>
                                    </Box>
                                    <Box height="10%" textAlign="center" borderTop={2} paddingTop={1} borderColor="#808080">
                                        <Typography fontSize="12px" fontWeight="600">
                                            {day.toLocaleDateString()}
                                        </Typography> 
                                    </Box>
                                </Box>
                            );
                        })
                    }
                </Box>
                <Box position="absolute" right={0} top="125px">
                    <IconButton onClick={() => handleChevronClick(1)}>
                        <ChevronRight/>
                    </IconButton>
                </Box>
            </Box>
        </Box>
    );
}
  
export default WorkoutsHistoryGrid;  