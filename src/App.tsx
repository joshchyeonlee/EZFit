import { NavigationBar } from "./components/navigation/NavigationBar";
import { Grid } from "@mui/material";
import "./App.css";
import { Routes, Route, useNavigate, useLocation } from "react-router";
import Dashboard from "./components/dashboard/Dashboard";
import WorkoutsDashboard from "./components/workouts/WorkoutsDashboard";
import Nutrition from "./components/nutrition/NutritionDashboard";
import RunWorkout from "./components/workouts/RunWorkout";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import React, { useEffect, useState } from "react";
import AccountManagementPage from "./components/account/AccountManagementMenu/AccountManagementPage";
import PersonalInformationPage from "./components/account/PersonalInformation/PersonalInformationPage";
import PreferencesPage from "./components/account/Preferences/PreferencesPage";
import Landing from "./components/landing/Landing";
import SignUp from "./components/signup/SignUp";
import Login from "./components/login/Login";
import ForgotPassword from "./components/landing/ForgotPassword";
import ExerciseLibrary from "./components/workouts/ExerciseLibrary/ExerciseLibrary";
import { Exercise } from "./components/workouts/ExerciseLibrary/ExerciseLibrary.types";
import { exerciseLibraryMockData } from "./components/workouts/ExerciseLibrary/ExerciseLibrary.mockData";
import ExerciseView from "./components/workouts/ExerciseLibrary/ExerciseView";
import WorkoutsHistory from "./components/workouts/WorkoutsHistory/WorkoutsHistory";
import EditDashboard from "./components/dashboard/EditDashboard";
import AccountConnectDevice from "./components/account/AccountConnectDevice";

const generatePath = (name: string) => {
  return `/${name.replace(" ", "-")}`;
};

export interface AppGlobalProps {
  isMobile: boolean;
}

const App: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const isMobile = width <= 480;

  const excludeNavigationPages = [
    "/EZFit",
    "/EZFit/",
    "/ForgotPassword",
    "/Login",
    "/SignUp",
  ];

  const currentPath = useLocation().pathname;

  const shouldRenderNavigationBar =
    !excludeNavigationPages.includes(currentPath);

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
          {""}
          <Route path="/" element={<Landing isMobile={isMobile} />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
          <Route path="/Login" element={<Login isMobile={isMobile} />} />
          <Route path="/SignUp" element={<SignUp isMobile={isMobile} />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Dashboard/Edit" element={<EditDashboard />} />
          <Route
            path="/Workouts"
            element={<WorkoutsDashboard isMobile={isMobile} />}
          />
          <Route
            path="/Exercise-Library"
            element={<ExerciseLibrary isMobile={isMobile} />}
          />
          <Route path="/RunWorkout" element={<RunWorkout />} />
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
              element={<ExerciseView exercise={exercise} />}
              key={exercise.name}
            />
          ))}
          <Route
            path="/Account/ConnectedDevices"
            element={<AccountConnectDevice />}
          />
          <Route
            path="/Workouts/History"
            element={<WorkoutsHistory isMobile={isMobile} />}
          />
        </Routes>
        {shouldRenderNavigationBar && <NavigationBar />}
      </Grid>
    </LocalizationProvider>
  );
};

export default App;
