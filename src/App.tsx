import { NavigationBar } from "./components/navigation/NavigationBar";
import { Grid } from "@mui/material";
import "./App.css";
import { Routes, Route } from "react-router";
import Dashboard from "./components/dashboard/Dashboard";
import WorkoutsDashboard from "./components/workouts/WorkoutsDashboard";
import Nutrition from "./components/nutrition/NutritionDashboard";
import Account from "./components/account/Account";

function App() {
  return (
    <Grid height={"100vh"} className="App">
      <Routes>
        <Route path="/" element={<div>HOME</div>} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Workouts" element={<WorkoutsDashboard />} />
        <Route path="/Nutrition" element={<Nutrition />} />
        <Route path="/Account" element={<Account />} />
      </Routes>
      <NavigationBar />
    </Grid>
  );
}

export default App;
