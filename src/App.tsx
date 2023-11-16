import { NavigationBar } from "./components/navigation/NavigationBar";
import { Grid, Typography } from "@mui/material";
import "./App.css";
import { Routes, Route } from "react-router";
import Dashboard from "./components/dashboard/Dashboard";
import WorkoutsDashboard from "./components/workouts/WorkoutsDashboard";
import NewWorkout from "./components/workouts/NewWorkout/NewWorkout";
import Nutrition from "./components/nutrition/NutritionDashboard";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import React from "react";
import AccountManagementPage from "./components/account/AccountManagementMenu/AccountManagementPage";
import PersonalInformationPage from "./components/account/PersonalInformation/PersonalInformationPage";
import ExerciseLibrary from "./components/workouts/ExerciseLibrary/ExerciseLibrary";
import { Exercise } from "./components/workouts/ExerciseLibrary/ExerciseLibrary.types";
import { exerciseLibraryMockData } from "./components/workouts/ExerciseLibrary/ExerciseLibrary.mockData";

const generatePath = (name: string) => {
  return `/${name.replace(" ", "-")}`;
};

const App: React.FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Grid height={"100vh"} className="App">
        <Routes>
          <Route path="/" element={<div>HOME</div>} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Workouts" element={<WorkoutsDashboard />} />
          <Route path="/Exercise-Library" element={<ExerciseLibrary />} />
          <Route path="/NewWorkout" element={<NewWorkout />} />
          <Route path="/Nutrition" element={<Nutrition />} />
          <Route path="/Account" element={<AccountManagementPage />} />
          <Route
            path="/Account/PersonalInformation"
            element={<PersonalInformationPage />}
          />
          {(exerciseLibraryMockData as any).map((exercise: Exercise) => (
            <Route
              path={generatePath(exercise.name)}
              element={<Typography>{exercise.name}</Typography>} //TODO: Change this to exercise view
              key={exercise.name}
            />
          ))}
        </Routes>
        <NavigationBar />
      </Grid>
    </LocalizationProvider>
  );
};

export default App;
