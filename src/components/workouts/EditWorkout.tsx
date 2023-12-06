import * as React from "react";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ListItemIcon from "@mui/material/ListItemIcon";
import {
  Box,
  Typography,
  Button,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  InputAdornment,
  Snackbar,
  Grid,
} from "@mui/material";
import { ArrowBack, Search, SwapHoriz } from "@mui/icons-material";
import Alert from "../utils/Alert";
import { WorkoutRowProps } from "./WorkoutRow/WorkoutRow";
import CancelButton from "../utils/CancelButton";

const categories: { name: string; exercises: string[] }[] = [
  { name: "Abs", exercises: ["Crunches", "Planks", "Sit-ups"] },
  { name: "Back", exercises: ["Pull-ups", "Rows", "Deadlifts"] },
  { name: "Legs", exercises: ["Squats", "Lunges", "Leg press"] },
  { name: "Chest", exercises: ["Push-ups", "Bench press", "Flyes"] },
];

interface EditWorkoutProps {
  workout: WorkoutRowProps;
  onSaveWorkout: (newWorkout: WorkoutRowProps) => void;
  onBack: () => void;
}

const EditWorkout = ({
  workout,
  onSaveWorkout,
  onBack,
}: EditWorkoutProps): JSX.Element => {
  const [search, setSearch] = useState<string>("");
  const [workoutName, setWorkoutName] = useState(workout.title);
  const [open, setOpen] = useState(false);

  const initialExercises =
    workout.exercises?.map((exercise, index) => ({
      name: exercise.name,
      index: index,
    })) || [];
  const [exercises, setExercises] = useState(initialExercises);
  const [snackBarMessage, setSnackBarMessage] = useState("");

  const handleSaveWorkout = (): void => {
    if (workoutName.trim() === "") {
      setSnackBarMessage("Workout name is required.");
      setOpen(true);
      return;
    }
    if (exercises.length === 0) {
      setSnackBarMessage("At least one exercise is required.");
      setOpen(true);
      return;
    }

    const newWorkout: WorkoutRowProps = {
      title: workoutName,
      exercises: exercises.map((e: any) => ({ name: e.name })),
    };
    onSaveWorkout(newWorkout);
    setOpen(true);
    setSnackBarMessage("Workout saved!");
  };

  const handleWorkoutNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setWorkoutName(event.target.value);
  };

  const handleSearchChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setSearch(event.target.value);
  };

  const handleAddExercise = (exercise: string): void => {
    const nextIndex =
      Math.max(...exercises.map((item: any) => item.index), -1) + 1;
    setExercises([...exercises, { name: exercise, index: nextIndex }]);
  };

  const handleRemoveExercise = (
    exerciseToRemove: string,
    indexToRemove: number
  ): void => {
    setExercises(
      exercises
        .filter(
          (exercise: any) =>
            !(
              exercise.name === exerciseToRemove &&
              exercise.index === indexToRemove
            )
        )
        .map((exercise, index) => ({ ...exercise, index }))
    );
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "10%",
          padding: "2%",
        }}
      >
        <IconButton
          onClick={() => onBack()}
          color="primary"
          sx={{ paddingLeft: "2%" }}
        >
          <ArrowBack sx={{ fontSize: "45px" }} />
        </IconButton>

        <Typography
          style={{
            textAlign: "center",
            color: "black",
            fontWeight: "bold",
            marginLeft: "-8%",
          }}
          variant="h5"
        >
          Edit Workout
        </Typography>
        <div></div>
      </Box>
      <Grid
        style={{
          display: "flex",
          overflowX: "hidden",
        }}
        container
      >
        <Grid
          container
          xs={12}
          sm={6}
          borderRight={"2px solid black"}
          paddingLeft={"16px"}
        >
          <Typography
            style={{ width: "100%", paddingBottom: "20px" }}
            textAlign={"center"}
            fontSize={"18px"}
            fontWeight={"bold"}
          >
            Add Exercises
          </Typography>
          <TextField
            sx={{
              backgroundColor: (theme: any) => theme.palette.textFieldBkg,
              border: (theme: any) => `2px solid ${theme.palette.primary.main}`,
              borderRadius: "10px",
              width: "97%",
            }}
            type="search"
            variant="outlined"
            value={search}
            placeholder="Search For Workout..."
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search color="primary" />
                </InputAdornment>
              ),
            }}
          />
          <List style={{ marginTop: "1%", marginBottom: "2%" }}>
            {categories
              .map((category) => ({
                ...category,
                exercises: category.exercises.filter((exercise) =>
                  exercise.toLowerCase().includes(search.toLowerCase())
                ),
              }))
              .filter((category) => category.exercises.length > 0)
              .map((category) => (
                <ListItem key={category.name}>
                  <ListItemText>
                    <Typography variant="h6">{category.name}</Typography>
                    <List>
                      {category.exercises.map((exercise, index) => (
                        <React.Fragment key={index}>
                          <ListItem
                            key={exercise}
                            onClick={() => handleAddExercise(exercise)}
                          >
                            <ListItemIcon>
                              <AddCircleOutlineIcon />
                            </ListItemIcon>
                            <ListItemText primary={`${exercise}`} />
                          </ListItem>
                          <Divider />
                        </React.Fragment>
                      ))}
                    </List>
                  </ListItemText>
                </ListItem>
              ))}
          </List>
        </Grid>

        <Grid
          xs={12}
          sm={6}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Box
            sx={{
              padding: 2,
              marginLeft: "5%",
              display: "flex",
              alignItems: "center",
              height: "5%",
              paddingLeft: "5%",
              width: "100%",
            }}
          >
            <Typography
              style={{
                textAlign: "center",
                color: "black",
                whiteSpace: "nowrap",
              }}
            >
              Workout Name:{" "}
            </Typography>
            <TextField
              id="workout-name"
              variant="standard"
              value={workoutName}
              onChange={handleWorkoutNameChange}
              style={{ width: "80%", padding: "0px 54px" }}
            />
          </Box>
          <List style={{ marginTop: "6.2%", width: "80%" }}>
            {exercises.map((exercise, index) => (
              <React.Fragment key={(exercise.name, exercise.index)}>
                <ListItem
                  sx={{
                    padding: "20px",
                  }}
                >
                  <ListItemText
                    primary={`${exercise.index + 1}:`}
                    sx={{ width: "5%", flex: "none" }} // Adjust the width as needed
                  />
                  <div
                    style={{
                      display: "flex",
                      marginLeft: "4%",
                      alignItems: "center",
                      border: "2px solid #8F2D56",
                      flex: 1,
                      paddingRight: "2%",
                    }}
                  >
                    <ListItemText
                      primary={exercise.name}
                      sx={{ textAlign: "center", flex: 1 }}
                    />
                    <IconButton
                      onClick={() =>
                        handleRemoveExercise(exercise.name, exercise.index)
                      }
                      style={{ marginLeft: "auto" }}
                    >
                      <DeleteIcon color="primary" />
                    </IconButton>
                  </div>
                </ListItem>
              </React.Fragment>
            ))}
          </List>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSaveWorkout}
            style={{
              margin: 16,
              width: "70%",
            }}
          >
            Save Workout
          </Button>
          <Box
            style={{
              margin: 16,

              width: "70%",
            }}
          >
            <CancelButton handleClose={() => onBack()} />
          </Box>
        </Grid>
      </Grid>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={snackBarMessage === "Workout saved!" ? "success" : "error"}
        >
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default EditWorkout;
