import { Button, Box, Divider, Grid, Typography } from "@mui/material";
import SearchBar from "../utils/SearchBar";

const WorkoutMenuButton = ({ text }: { text: string }) => {
  return (
    <Box textAlign={"center"} width={"25%"} padding={"0px 8px"}>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ minHeight: "60px" }}
      >
        <Typography color={"white"}>{text}</Typography>
      </Button>
    </Box>
  );
};

function WorkoutsDashboard() {
  return (
    <Grid display={"flex"} alignItems={"center"} flexDirection={"column"}>
      <Box textAlign={"center"} padding={"30px"}>
        <Typography variant="h5">Workouts</Typography>
      </Box>
      <Box textAlign={"center"} padding={"20px 200px"} width={"60%"}>
        <SearchBar />
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
      <Divider
        sx={{ width: "80%", borderColor: "darkgray", padding: "10px" }}
      />
      <Grid>{/* TODO: Workout Records */}</Grid>
    </Grid>
  );
}

export default WorkoutsDashboard;
