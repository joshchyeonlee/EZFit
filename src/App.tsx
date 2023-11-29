import { NavigationBar } from "./components/navigation/NavigationBar";
import { Grid } from "@mui/material";
import "./App.css";
import { Routes, Route } from "react-router";
import Dashboard from "./components/dashboard/Dashboard";
import WorkoutsDashboard from "./components/workouts/WorkoutsDashboard";
import NewWorkout from "./components/workouts/NewWorkout/NewWorkout";
import Nutrition from "./components/nutrition/NutritionDashboard";
import RunWorkout from "./components/workouts/RunWorkout";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import React from "react";
import AccountManagementPage from "./components/account/AccountManagementMenu/AccountManagementPage";
import PersonalInformationPage from "./components/account/PersonalInformation/PersonalInformationPage";
import PreferencesPage from "./components/account/Preferences/PreferencesPage";
import ExerciseLibrary from "./components/workouts/ExerciseLibrary/ExerciseLibrary";
import { Exercise } from "./components/workouts/ExerciseLibrary/ExerciseLibrary.types";
import { exerciseLibraryMockData } from "./components/workouts/ExerciseLibrary/ExerciseLibrary.mockData";
import ExerciseView from "./components/workouts/ExerciseLibrary/ExerciseView";
import WorkoutsHistory from "./components/workouts/WorkoutsHistory/WorkoutsHistory";
import { WorkoutRowProps } from "./components/workouts/WorkoutRow/WorkoutRow";

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
          <Route path="/RunWorkout" element={<RunWorkout />} />
          <Route path="/Nutrition" element={<Nutrition />} />
          <Route path="/Account" element={<AccountManagementPage />} />
          <Route
            path="/Account/PersonalInformation"
            element={<PersonalInformationPage />}
          />
          <Route path="/Account/Preferences" element={<PreferencesPage />} />
          {(exerciseLibraryMockData as any).map((exercise: Exercise) => (
            <Route
              path={generatePath(exercise.name)}
              element={<ExerciseView exercise={exercise} />}
              key={exercise.name}
            />
          ))}
          <Route path="/Workouts/History" element={<WorkoutsHistory />} />
        </Routes>
        <NavigationBar />
      </Grid>
    </LocalizationProvider>
  );
};

export default App;
