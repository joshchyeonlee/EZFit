import { Button } from "@mui/material";
import { useState } from "react";
import UncondensedDashboard from "./UncondensedDashboard";
import AddWidgetModal from "./AddWidgetModal";

function Dashboard() {
  const [isUncondensedDashboardOpen, setIsUncondensedDashboardOpen] = useState(false);
  const [isAddWidgetModalOpen, setIsAddWidgetModalOpen] = useState(false);
  
  const handleOpenUncondensedView = () => {
    setIsUncondensedDashboardOpen(true);
  }

  const handleOpenAddWidgetModal = () => {
    setIsAddWidgetModalOpen(true);
  }

  return (<div>
    <UncondensedDashboard open={isUncondensedDashboardOpen} setOpen={setIsUncondensedDashboardOpen}/>
    <AddWidgetModal open={isAddWidgetModalOpen} setOpen={setIsAddWidgetModalOpen}/>
    <div>
      <UncondensedDashboard
        open={isUncondensedDashboardOpen}
        setOpen={setIsUncondensedDashboardOpen}
      />
      <div>Dashboard</div>
    </div>
    <Button onClick={() => handleOpenUncondensedView()}>
      Open uncondensed dashboard
    </Button>
    <Button onClick={() => handleOpenAddWidgetModal()}>
      Open add widget modal
    </Button>
  </div>);
}
export default Dashboard;
