import { Button } from "@mui/material";
import React, { useState } from "react";
import UncondensedDashboard from "./UncondensedDashboard";

function Dashboard() {
  const [isUncondensedDashboardOpen, setIsUncondensedDashboardOpen] = useState(false);
  
  const handleOpenUncondensedView = () => {
    console.log(isUncondensedDashboardOpen);
    console.log("opening")
    setIsUncondensedDashboardOpen(true);
    console.log(isUncondensedDashboardOpen);
  }

  return <div>
    <UncondensedDashboard open={isUncondensedDashboardOpen} setOpen={setIsUncondensedDashboardOpen}/>
    <div>
      Dashboard
    </div>
    <Button onClick={() => handleOpenUncondensedView()}>
      Open uncondensed dashboard
    </Button>
  </div>;
}
export default Dashboard;
