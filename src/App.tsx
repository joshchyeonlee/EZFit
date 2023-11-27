import { NavigationBar } from "./components/navigation/NavigationBar";
import { Grid, Typography } from "@mui/material";
import "./App.css";
import { Routes, Route } from "react-router";
import Dashboard from "./components/dashboard/Dashboard";
import WorkoutsDashboard from "./components/workouts/WorkoutsDashboard";
import NewWorkout from "./components/workouts/NewWorkout/NewWorkout";
import Nutrition from "./components/nutrition/NutritionDashboard";
import RunWorkout from "./components/workouts/RunWorkout";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import React, { useEffect, useState } from "react";
import AccountManagementPage from "./components/account/AccountManagementMenu/AccountManagementPage";
import PersonalInformationPage from "./components/account/PersonalInformation/PersonalInformationPage";
import PreferencesPage from "./components/account/Preferences/PreferencesPage";
import ExerciseLibrary from "./components/workouts/ExerciseLibrary/ExerciseLibrary";
import { Exercise } from "./components/workouts/ExerciseLibrary/ExerciseLibrary.types";
import { exerciseLibraryMockData } from "./components/workouts/ExerciseLibrary/ExerciseLibrary.mockData";
import WorkoutsHistory from "./components/workouts/WorkoutsHistory/WorkoutsHistory";

const generatePath = (name: string) => {
  return `/${name.replace(" ", "-")}`;
};

export interface AppGlobalProps {
  isMobile: boolean;
}

const App: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const isMobile = width <= 480;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerHeight));
    };
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Grid height={"100vh"} sx={{ overflowX: "hidden", marginBottom: "54px" }}>
        <Routes>
          <Route path="/" element={<div>HOME</div>} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route
            path="/Workouts"
            element={<WorkoutsDashboard isMobile={isMobile} />}
          />
          <Route
            path="/Exercise-Library"
            element={<ExerciseLibrary isMobile={isMobile} />}
          />
          <Route path="/RunWorkout" element={<RunWorkout />} />
          <Route path="/NewWorkout" element={<NewWorkout />} />
          <Route
            path="/Nutrition"
            element={<Nutrition isMobile={isMobile} />}
          />
          <Route path="/Account" element={<AccountManagementPage />} />
          <Route
            path="/Account/PersonalInformation"
            element={<PersonalInformationPage />}
          />
          <Route path="/Account/Preferences" element={<PreferencesPage />} />
          {(exerciseLibraryMockData as any).map((exercise: Exercise) => (
            <Route
              path={generatePath(exercise.name)}
              element={<Typography>{exercise.name}</Typography>} //TODO: Change this to exercise view
              key={exercise.name}
            />
          ))}
          <Route
            path="/Workouts/History"
            element={<WorkoutsHistory isMobile={isMobile} />}
          />
        </Routes>
        <NavigationBar />
      </Grid>
    </LocalizationProvider>
  );
};

export default App;
