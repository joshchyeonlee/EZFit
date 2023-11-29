import { Button, Box, Divider, Grid, Typography } from "@mui/material";
import SearchBar from "../utils/SearchBar";
import { workoutRowMockData } from "./WorkoutRow/Workout.mockData";
import WorkoutRow from "./WorkoutRow/WorkoutRow";
import { useState } from "react";
import { ManualLoggingOverlay } from "../Overlays/LoggingOverlays";
import { useNavigate } from "react-router-dom";
import workoutData from "../../mockData/Workouts";
import Workout from "../../models/Workout";
import WorkoutDuration from "../../models/WorkoutDuration";

const moment = require("moment");

function WorkoutsDashboard() {
  const [manualLogOpen, setManualLogOpen] = useState(false);
  const [workoutSearchResults, setWorkoutSearchResults] =
    useState(workoutRowMockData);

  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate("/NewWorkout");
  };

  const handleNavExerciseLibrary = () => {
    navigate("/Exercise-Library");
  };

  const handleHistoryClick = () => {
    navigate("/Workouts/History");
  };

  const handleSearch = (query: string) => {
    const results = workoutRowMockData.filter((workout) =>
      workout.title.toLowerCase().includes(query)
    );
    setWorkoutSearchResults(results);
  };

  const handleManualLogOpen = () => {
    setManualLogOpen(true);
  };
  const handleManualLogClose = () => {
    setManualLogOpen(false);
  };
  const handleManualLogSubmit = (data: any) => {
    var title : string = data["Workout Title"];

    var date : Date = new Date(data["Date"]);

    var durationAsDate : Date = new Date(data["Duration"] ?? new Date());
    var duration : WorkoutDuration = new WorkoutDuration(durationAsDate.getHours(), durationAsDate.getMinutes(), durationAsDate.getSeconds());
    
    var newWorkout : Workout = new Workout(title, date, duration);
    
    (workoutData as any).push(newWorkout);
  };

  return (
    <Grid display={"flex"} alignItems={"center"} flexDirection={"column"}>
      <ManualLoggingOverlay
        isOpen={manualLogOpen}
        handleClose={handleManualLogClose}
        handleSubmit={handleManualLogSubmit}
        title="Manually Log Workout"
      />

      <Box textAlign={"center"} padding={"40px 30px"}>
        <Typography variant="h5" fontWeight={"bold"}>
          Workouts
        </Typography>
      </Box>
      <Box textAlign={"center"} padding={"20px 200px"} width={"60%"}>
        <SearchBar
          placeholder="Search For Workout..."
          onSearch={handleSearch}
        />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        padding={"20px 50px"}
        width={"60%"}
      >
        <WorkoutMenuButton title={"Create"} onClick={handleCreateClick} />
        <WorkoutMenuButton title={"Manual Log"} onClick={handleManualLogOpen} />
        <WorkoutMenuButton title={"History"} onClick={handleHistoryClick} />
        <WorkoutMenuButton
          title={"Exercise Library"}
          onClick={handleNavExerciseLibrary}
        />
      </Box>
      <Divider sx={{ width: "70%", borderColor: "black", padding: "10px" }} />
      <Grid width={"70%"} margin={"50px"} textAlign={"center"}>
        {workoutSearchResults.length !== 0 ? (
          workoutSearchResults.map(({ title, lastRun }) => (
            <WorkoutRow title={title} lastRun={lastRun} key={title} />
          ))
        ) : (
          <Typography fontSize={"18px"}>No Workouts Found</Typography>
        )}
      </Grid>
    </Grid>
  );
}

interface WorkoutMenuButtonProps {
  title: string;
  onClick?: () => void;
}

const WorkoutMenuButton = ({ title, onClick }: WorkoutMenuButtonProps) => {
  return (
    <Box textAlign={"center"} width={"25%"} padding={"0px 8px"}>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ minHeight: "70px" }}
        onClick={onClick}
      >
        <Typography color={"primaryBkg"}>{title}</Typography>
      </Button>
    </Box>
  );
};

export default WorkoutsDashboard;
