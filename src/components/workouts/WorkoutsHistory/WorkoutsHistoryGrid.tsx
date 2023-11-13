import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import Workout from "../../../models/Workout";

function WorkoutsHistoryGrid(props: { workouts: Workout[]; handleWeekShift: any; }) {
    
    const handleChevronClick = (weeksDiff : number) => {
        props.handleWeekShift(weeksDiff);
    }

    function isSameDay(d1 : Date, d2 : Date) {
        return d1.getFullYear() === d2.getFullYear() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getDate() === d2.getDate();
    }

    return(
        <Box bgcolor="ButtonShadow" width="100%" height="100%">
            <Box position="relative">
                <Box position="absolute" left={0} top="125px">
                    <IconButton onClick={() => handleChevronClick(-1)}>
                        <ChevronLeft/>
                    </IconButton>
                </Box>
                <Box width="100%" height="100%" bgcolor="grey">
                    
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