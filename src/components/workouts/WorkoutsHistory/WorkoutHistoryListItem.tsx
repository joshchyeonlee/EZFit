import { Box, IconButton, Typography } from "@mui/material";
import Workout from "../../../models/Workout";
import { Delete, Edit } from "@mui/icons-material";
import { useEffect, useState } from "react";

function WorkoutHistoryListItem(props: {
  workout: Workout;
  editWorkout: any;
  removeWorkout: any;
}) {
  const handleOnClickEdit = () => {
    props.editWorkout(props.workout);
  };

  const handleOnClickDelete = () => {
    props.removeWorkout(props.workout);
  };

  const [width, setWidth] = useState(window.innerWidth);

  const isMobile = width <= 480;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerHeight));
    };
  }, []);

  return (
    <Box
      id="container"
      display="flex"
      flexDirection="row"
      position="relative"
      width="100%"
      sx={{
        borderRadius: 0,
        marginBottom: 1,
        marginTop: 1,
        borderColor: "#808080",
      }}
    >
      <Box
        id="info"
        width="100%"
        display="flex"
        flexDirection="row"
        textAlign="start"
        justifyContent="start"
      >
        <Box width="30%" maxWidth="30%" justifyContent="start" margin={2}>
          <Typography textAlign="left" color="black" fontWeight="500">
            {props.workout.title}
          </Typography>
        </Box>
        <Box width="30%" justifyContent="start" margin={2}>
          <Typography textAlign="left" color="black" fontWeight="300">
            {props.workout.date.toDateString()}
          </Typography>
        </Box>
        <Box width="20%" justifyContent="start" margin={2}>
          <Typography textAlign="left" color="black" fontWeight="300">
            {props.workout.duration.toString()}
          </Typography>
        </Box>

        <Box display="block" id="buttons" textAlign="end" justifyContent="end">
          <Box position="absolute" right="45px" top={isMobile ? "40%" : "20%"}>
            <IconButton color="primary" onClick={handleOnClickEdit}>
              <Edit />
            </IconButton>
          </Box>
          <Box position="absolute" right="0px" top={isMobile ? "40%" : "20%"}>
            <IconButton color="primary" onClick={handleOnClickDelete}>
              <Delete />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default WorkoutHistoryListItem;
