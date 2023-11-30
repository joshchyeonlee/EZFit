import { Box, IconButton, Typography } from "@mui/material";
import WorkoutsHistoryGrid from "./WorkoutsHistoryGrid";
import { useEffect, useState } from "react";
import workouts from "../../../mockData/Workouts";
import WorkoutHistoryList from "./WorkoutHistoryList";
import Workout from "../../../models/Workout";
import { EditHistoryOverlay } from "../../Overlays/LoggingOverlays";
import { AppGlobalProps } from "../../../App";
import BackButton from "../../utils/BackButton";

function WorkoutsHistory({ isMobile }: AppGlobalProps) {
  const [currentDayIndex, setCurrentDayIndex] = useState(
    new Date().toDateString()
  );

  const [currentWeek, setCurrentWeek] = useState(new Array());

  function handleWeekShift(weeksToShiftBy: number) {
    var newCurrentDay = new Date(currentDayIndex);
    newCurrentDay.setDate(newCurrentDay.getDate() + weeksToShiftBy * 7);
    setCurrentDayIndex(newCurrentDay.toDateString());
  }

  useEffect(() => {
    var newWeek = new Array();
    for (var i = 1; i <= 7; i++) {
      var dateToAdd = new Date(currentDayIndex);
      dateToAdd.setDate(dateToAdd.getDate() - 7 + i);
      newWeek.push(dateToAdd);
    }
    setCurrentWeek(newWeek);
  }, [currentDayIndex]);

  const [activeWorkouts, setActiveWorkouts] = useState(workouts);

  const removeWorkout = (workout: Workout) => {
    var newWorkoutList = activeWorkouts.filter((e) => e != workout);
    setActiveWorkouts(
      newWorkoutList.sort((a, b) => a.date.getTime() - b.date.getTime())
    );
  };

  const [currentWeekWorkouts, setCurrentWeekWorkouts] = useState(new Array());

  useEffect(() => {
    var newWeekWorkouts = new Array();
    newWeekWorkouts = activeWorkouts.filter(
      (workout) =>
        workout.date.getDate() <= new Date(currentDayIndex).getDate() &&
        workout.date.getDate() > new Date(currentDayIndex).getDate() - 7
    );
    setCurrentWeekWorkouts(newWeekWorkouts);
  }, [currentWeek, activeWorkouts]);

  const [currentEditedWorkout, setCurrentEditedWorkout] = useState(
    new Workout()
  );

  const [editWorkoutOpen, setEditWorkoutOpen] = useState(false);

  const handleEditWorkoutOpen = (workout: Workout) => {
    setCurrentEditedWorkout(workout);
    setEditWorkoutOpen(true);
  };

  const handleEditWorkoutClose = () => {
    setEditWorkoutOpen(false);
  };

  return (
    <Box justifyContent="center" padding={3}>
      <Box textAlign="left" justifyContent="center">
        <BackButton route="/Workouts/" />
      </Box>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h5" sx={{ fontWeight: "bold", height: "30%" }}>
          Workout History
        </Typography>
        <Box width="100%" height="70%">
          <Box
            padding={2}
            display="flex"
            justifyContent="center"
            width="97%"
            height="300px"
            maxHeight="70%"
          >
            <WorkoutsHistoryGrid
              workouts={currentWeekWorkouts}
              daysOfWeek={currentWeek}
              handleWeekShift={handleWeekShift}
            />
          </Box>
          <Typography textAlign="center" fontWeight="bold" paddingTop={1}>
            {currentWeek.at(0)?.toLocaleDateString("en-us", {
              month: "short",
              day: "numeric",
            })}{" "}
            -{" "}
            {currentWeek
              .at(currentWeek.length - 1)
              ?.toLocaleDateString("en-us", { month: "short", day: "numeric" })}
          </Typography>
          <Box padding={2} width="97%" maxHeight="20%">
            <WorkoutHistoryList
              workouts={currentWeekWorkouts}
              editWorkout={handleEditWorkoutOpen}
              removeWorkout={removeWorkout}
            />
          </Box>
        </Box>
      </Box>
      <EditHistoryOverlay
        isOpen={editWorkoutOpen}
        handleClose={handleEditWorkoutClose}
        workout={currentEditedWorkout}
        isMobile={isMobile}
      />
    </Box>
  );
}

export default WorkoutsHistory;
