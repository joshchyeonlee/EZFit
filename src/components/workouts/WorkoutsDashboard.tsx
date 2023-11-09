import { Button, Box, Divider, Grid, Typography } from "@mui/material";
import SearchBar from "../utils/SearchBar";
import { workoutRowMockData } from "./WorkoutRow/Workout.mockData";
import WorkoutRow, { WorkoutRowProps } from "./WorkoutRow/WorkoutRow";
import { useState } from "react";

const WorkoutMenuButton = ({ text }: { text: string }) => {
  return (
    <Box textAlign={"center"} width={"25%"} padding={"0px 8px"}>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ minHeight: "70px" }}
      >
        <Typography color={"white"}>{text}</Typography>
      </Button>
    </Box>
  );
};

function WorkoutsDashboard() {
  const [workoutSearchResults, setWorkoutSearchResults] =
    useState(workoutRowMockData);

  const handleSearch = (query: string) => {
    let results: WorkoutRowProps[] = [];

    workoutRowMockData.forEach((workout) =>
      workout.title.toLowerCase().includes(query) ? results.push(workout) : null
    );
    setWorkoutSearchResults(results);
  };

  return (
    <Grid display={"flex"} alignItems={"center"} flexDirection={"column"}>
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
        <WorkoutMenuButton text={"Create"} />
        <WorkoutMenuButton text={"Manual Log"} />
        <WorkoutMenuButton text={"History"} />
        <WorkoutMenuButton text={"Exercise Library"} />
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

export default WorkoutsDashboard;
