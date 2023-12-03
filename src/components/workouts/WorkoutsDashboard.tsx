import { Button, Box, Divider, Grid, Typography } from "@mui/material";
import SearchBar from "../utils/SearchBar";
import { workoutRowMockData } from "./WorkoutRow/Workout.mockData";
import WorkoutRow, { WorkoutRowProps } from "./WorkoutRow/WorkoutRow";
import { useState } from "react";
import { ManualLoggingOverlay } from "../Overlays/LoggingOverlays";
import { useNavigate } from "react-router-dom";
import WorkoutsPreview from "./WorkoutsPreview";
import NewWorkout from "./NewWorkout/NewWorkout";
import WorkoutDuration from "../../models/WorkoutDuration";
import Workout from "../../models/Workout";
import workoutData from "../../mockData/Workouts";

function WorkoutsDashboard({ isMobile }: { isMobile: boolean }) {
  const [manualLogOpen, setManualLogOpen] = useState(false);
  const [workoutSearchResults, setWorkoutSearchResults] =
    useState(workoutRowMockData);

  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [selectedWorkout, setSelectedWorkout] = useState<WorkoutRowProps>();
  const [isCreatingNewWorkout, setIsCreatingNewWorkout] = useState(false);

  const handlePlayClick = (workoutData: any) => {
    setShowPreview(true);
    setSelectedWorkout(workoutData);
  };

  const handleBackClick = () => {
    setShowPreview(false);
  };

  const navigate = useNavigate();

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
    
    var newWorkout = new Workout(title, date, duration);
    workoutData.push(newWorkout);
  };

  const handleCreateClick = () => {
    setIsCreatingNewWorkout(true);
  };

  const handleBackFromNewWorkout = () => {
    setIsCreatingNewWorkout(false);
  };

  const addNewWorkout = (newWorkout: WorkoutRowProps) => {
    setWorkoutSearchResults((prevWorkouts) => [newWorkout, ...prevWorkouts]);
  };

  const renderMainContent = () => (
    <Grid display={"flex"} alignItems={"center"} flexDirection={"column"}>
      <ManualLoggingOverlay
        isOpen={manualLogOpen}
        handleClose={handleManualLogClose}
        handleSubmit={handleManualLogSubmit}
        title="Manually Log Workout"
        isMobile={isMobile}
      />

      <Box textAlign={"center"} padding={"40px 30px"}>
        <Typography variant="h5" fontWeight={"bold"}>
          Workouts
        </Typography>
      </Box>
      <Box textAlign={"center"} padding={"20px 200px"} width={"80%"}>
        <SearchBar
          placeholder="Search For Workout..."
          onSearch={handleSearch}
        />
      </Box>
      <Grid
        display={"flex"}
        justifyContent={"space-between"}
        padding={isMobile ? "10px" : "20px 50px"}
        width={isMobile ? "100%" : "80%"}
        container
      >
        <WorkoutMenuButton title={"Create"} onClick={handleCreateClick} />
        <WorkoutMenuButton title={"Manual Log"} onClick={handleManualLogOpen} />
        <WorkoutMenuButton title={"History"} onClick={handleHistoryClick} />
        <WorkoutMenuButton
          title={"Exercise Library"}
          onClick={handleNavExerciseLibrary}
        />
      </Grid>
      <Divider sx={{ width: "70%", borderColor: "black", padding: "10px" }} />
      <Grid
        width={isMobile ? "90%" : "70%"}
        margin={isMobile ? "0px" : "50px"}
        textAlign={"center"}
      >
        {workoutSearchResults.length !== 0 ? (
          workoutSearchResults.map(({ title, lastRun, exercises }) => (
            <WorkoutRow
              title={title}
              lastRun={lastRun}
              key={title}
              exercises={exercises}
              onPlayClick={handlePlayClick}
              isMobile={isMobile}
            />
          ))
        ) : (
          <Typography fontSize={"18px"}>No Workouts Found</Typography>
        )}
      </Grid>
    </Grid>
  );

  const renderWorkoutPreview = () =>
    selectedWorkout && (
      <WorkoutsPreview
        title={selectedWorkout.title}
        exercises={selectedWorkout.exercises}
        onBackClick={handleBackClick}
      />
    );

  return (
    <>
      {isCreatingNewWorkout ? (
        <NewWorkout
          onSaveWorkout={addNewWorkout}
          onBack={handleBackFromNewWorkout}
        />
      ) : showPreview && selectedWorkout ? (
        renderWorkoutPreview()
      ) : (
        renderMainContent()
      )}
    </>
  );
}

interface WorkoutMenuButtonProps {
  title: string;
  onClick?: () => void;
}

const WorkoutMenuButton = ({ title, onClick }: WorkoutMenuButtonProps) => {
  return (
    <Grid textAlign={"center"} padding={"8px 8px"} xs={6} sm={3}>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ minHeight: "70px" }}
        onClick={onClick}
      >
        <Typography color={"primaryBkg"}>{title}</Typography>
      </Button>
    </Grid>
  );
};

export default WorkoutsDashboard;
