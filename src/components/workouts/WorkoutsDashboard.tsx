import { Button, Box, Divider, Grid, Typography } from "@mui/material";
import SearchBar from "../utils/SearchBar";
import { workoutRowMockData } from "./WorkoutRow/Workout.mockData";
import WorkoutRow, { WorkoutRowProps } from "./WorkoutRow/WorkoutRow";
import { useState } from "react";
import { ManualLoggingOverlay } from "../Overlays/LoggingOverlays";
import { useNavigate } from "react-router-dom";
import WorkoutsPreview from "./WorkoutsPreview";

const moment = require("moment");

function WorkoutsDashboard() {
  const [manualLogOpen, setManualLogOpen] = useState(false);
  const [workoutSearchResults, setWorkoutSearchResults] =
    useState(workoutRowMockData);

  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [selectedWorkout, setSelectedWorkout] = useState<any | null>(null);

  const handlePlayClick = (workoutData: any) => {
    setShowPreview(true);
    setSelectedWorkout(workoutData);
  };

  const handleBackClick = () => {
    setShowPreview(false);
  };

  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/NewWorkout');
  };

  const handleSearch = (query: string) => {
    let results: WorkoutRowProps[] = [];

    workoutRowMockData.forEach((workout) =>
      workout.title.toLowerCase().includes(query) ? results.push(workout) : null
    );
    setWorkoutSearchResults(results);
  };

  const handleManualLogOpen = () => {
    setManualLogOpen(true);
  };
  const handleManualLogClose = () => {
    setManualLogOpen(false);
  };

  return (
    ((showPreview && selectedWorkout) ? <WorkoutsPreview title={selectedWorkout.title} exercises={selectedWorkout.exercises} onBackClick={handleBackClick} /> :

      <Grid display={"flex"} alignItems={"center"} flexDirection={"column"}>
        <ManualLoggingOverlay
          isOpen={manualLogOpen}
          handleClose={handleManualLogClose}
        />

        <Box textAlign={"center"} padding={"40px 30px"}>
          <Typography variant="h5">Workouts</Typography>
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
          <WorkoutMenuButton title={"History"} />
          <WorkoutMenuButton title={"Exercise Library"} />
        </Box>
        <Divider sx={{ width: "70%", borderColor: "black", padding: "10px" }} />
        <Grid width={"70%"} margin={"50px"} textAlign={"center"}>
          {workoutSearchResults.length !== 0 ? (
            workoutSearchResults.map(({ title, lastRun, exercises }) => (
              <WorkoutRow title={title} lastRun={lastRun} key={title} exercises={exercises} onPlayClick={handlePlayClick} />
            ))
          ) : (
            <Typography fontSize={"18px"}>No Workouts Found</Typography>
          )}

        </Grid>
      </Grid>
    )
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
