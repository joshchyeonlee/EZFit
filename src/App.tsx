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
import { useRoutes } from "react-router-dom";

const generatePath = (name: string) => {
  return `/${name.replace(" ", "-")}`;
};

export interface AppGlobalProps {
  isMobile: boolean;
}

const App: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const isMobile = width <= 480;

  const excludeNavigationPages = ["/", "/ForgotPassword", "/Login", "/SignUp"];

  const currentPath = useLocation().pathname;

  const shouldRenderNavigationBar =
    !excludeNavigationPages.includes(currentPath);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerHeight));
    };
  }, []);

  const exerciseRoutes = (exerciseLibraryMockData as any).map(
    (exercise: Exercise) => {
      return {
        path: generatePath(exercise.name),
        element: <ExerciseView exercise={exercise} />,
      };
    }
  );

  const routes = useRoutes([
    { path: "/", element: <Landing isMobile={isMobile} /> },
    { path: "/Login", element: <Login isMobile={isMobile} /> },
    { path: "/ForgotPassword", element: <ForgotPassword /> },
    { path: "/SignUp", element: <SignUp isMobile={isMobile} /> },
    { path: "/Dashboard", element: <Dashboard /> },
    { path: "/Dashboard/Edit", element: <EditDashboard /> },
    { path: "/Workouts", element: <WorkoutsDashboard isMobile={isMobile} /> },
    {
      path: "/Exercise-Library",
      element: <ExerciseLibrary isMobile={isMobile} />,
    },
    { path: "/RunWorkout", element: <RunWorkout /> },
    {
      path: "/Nutrition",
      element: <Nutrition isMobile={isMobile} />,
    },
    { path: "/Account", element: <AccountManagementPage /> },
    {
      path: "/Account/PersonalInformation",
      element: <PersonalInformationPage />,
    },
    { path: "/Account/Preferences", element: <PreferencesPage /> },

    {
      path: "/Account/ConnectedDevices",
      element: <AccountConnectDevice />,
    },
    {
      path: "/Workouts/History",
      element: <WorkoutsHistory isMobile={isMobile} />,
    },

    ...exerciseRoutes,
  ]);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Grid height={"100vh"} sx={{ overflowX: "hidden", marginBottom: "54px" }}>
        {routes}

        {shouldRenderNavigationBar && <NavigationBar />}
      </Grid>
    </LocalizationProvider>
  );
};

export default App;
