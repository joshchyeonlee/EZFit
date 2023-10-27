import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import BarChart from "@mui/icons-material/BarChart";
import DirectionsRun from "@mui/icons-material/DirectionsRun";
import LocalDining from "@mui/icons-material/LocalDining";
import Person from "@mui/icons-material/Person";

import "./NavigationBar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export function NavigationBar() {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      className="navbar"
    >
      <BottomNavigationAction
        label="Dashboard"
        icon={<BarChart />}
        component={Link}
        to="/Dashboard"
      ></BottomNavigationAction>
      <BottomNavigationAction
        label="Workouts"
        icon={<DirectionsRun />}
        component={Link}
        to="/Workouts"
      ></BottomNavigationAction>
      <BottomNavigationAction
        label="Nutrition"
        icon={<LocalDining />}
        component={Link}
        to="/Nutrition"
      ></BottomNavigationAction>
      <BottomNavigationAction
        label="Account"
        icon={<Person />}
        component={Link}
        to="/Account"
      ></BottomNavigationAction>
    </BottomNavigation>
  );
}
