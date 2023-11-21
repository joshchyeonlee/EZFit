import { NavigationBar } from "./components/navigation/NavigationBar";
import { Grid } from "@mui/material";
import "./App.css";
import { Routes, Route } from "react-router";
import Dashboard from "./components/dashboard/Dashboard";
import WorkoutsDashboard from "./components/workouts/WorkoutsDashboard";
import NewWorkout from "./components/workouts/NewWorkout";
import Nutrition from "./components/nutrition/NutritionDashboard";
import RunWorkout from "./components/workouts/RunWorkout";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import React from "react";
import AccountManagementPage from "./components/account/AccountManagementMenu/AccountManagementPage";
import PersonalInformationPage from "./components/account/PersonalInformation/PersonalInformationPage";
import PreferencesPage from "./components/account/Preferences/PreferencesPage";
import Landing from "./components/landing/Landing";

const App: React.FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Grid height={"100vh"} className="App">
        <Routes>
          <Route path="/" element={<div>HOME</div>} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Workouts" element={<WorkoutsDashboard />} />
          <Route path="/RunWorkout" element={<RunWorkout />} />
          <Route path="/NewWorkout" element={<NewWorkout />} />
          <Route path="/Nutrition" element={<Nutrition />} />
          <Route path="/Account" element={<AccountManagementPage />} />
          <Route
            path="/Account/PersonalInformation"
            element={<PersonalInformationPage />}
          />
          <Route path="/Account/Preferences" element={<PreferencesPage />} />
        </Routes>
        <NavigationBar />
      </Grid>
    </LocalizationProvider>
  );
};

export default App;
