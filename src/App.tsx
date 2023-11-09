import { NavigationBar } from "./components/navigation/NavigationBar";
import { Grid } from "@mui/material";
import "./App.css";
import { Routes, Route } from "react-router";
import Dashboard from "./components/dashboard/Dashboard";
import WorkoutsDashboard from "./components/workouts/WorkoutsDashboard";
import NewWorkout from "./components/workouts/NewWorkout";
import Nutrition from "./components/nutrition/NutritionDashboard";
import Account from "./components/account/Account";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

const App: React.FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Grid height={"100vh"} className="App">
        <Routes>
          <Route path="/" element={<div>HOME</div>} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Workouts" element={<WorkoutsDashboard />} />
          <Route path="/NewWorkout" element={<NewWorkout />} />
          <Route path="/Nutrition" element={<Nutrition />} />
          <Route path="/Account" element={<Account />} />
        </Routes>
        <NavigationBar />
      </Grid>
    </LocalizationProvider>
  );
}

export default App
