import { Box } from "@mui/material";
import Workout from "../../../models/Workout";
import WorkoutHistoryListItem from "./WorkoutHistoryListItem";

function WorkoutHistoryList(props: { workouts: Workout[], editWorkout: any, removeWorkout: any }) {

    return (
        <Box textAlign="center" width="100%" height="100%">
            {
                props.workouts.map(function(object, i){
                    return (
                        <Box sx={{ borderBottom: 2, borderColor: '#808080'}} key={i}>
                            <WorkoutHistoryListItem workout={object} editWorkout={props.editWorkout} removeWorkout={props.removeWorkout} />
                        </Box>
                    );
                })
            }
        </Box>
    );
}

export default WorkoutHistoryList;
  