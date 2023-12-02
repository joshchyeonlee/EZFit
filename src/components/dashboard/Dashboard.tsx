import {
  Button,
  Box,
  Typography,
  Card,
  CardActionArea,
  Grid,
  Snackbar,
  Alert,
  IconButton,
} from "@mui/material";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import UncondensedDashboard from "./UncondensedDashboard";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import AvailableWidgets from "../../mockData/AvailableWidgets";
import modalData from "../../mockData/Steps";
import AddWidgetModal from "./AddWidgetModal";

interface DashboardButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
}

const DashboardButton = ({ title, onClick, disabled }: DashboardButtonProps) => {
  return (
    <Box textAlign={"center"} width={window.innerWidth < 570 ? "50%" : "25%"} padding={"0px 8px"}>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ minHeight: (window.innerWidth < 570) ? "90px" : "43px" }}
        onClick={onClick}
        disabled={disabled}
      >
        <Typography color={"primaryBkg"}>{title}</Typography>
      </Button>
    </Box>
  );
};

interface DashboardCardProps {
  topText: String;
  middleText: String;
  bottomText: String;
  onClick?: () => void;
  navigate?: () => void;
}

const DashboardCard = ({
  topText,
  middleText,
  bottomText,
  onClick,
  navigate,
}: DashboardCardProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 4,
        boxShadow: 3,
        height:"100%",
      }}
    >
      <CardActionArea onClick={ (topText === "Recommended Exercise") ? navigate : onClick}>
        <Box display="flex" justifyContent="center" flexDirection={"column"} padding={2}>
          <Typography fontWeight={"bold"} padding={"5px"} color={"black"}>
            {topText}
          </Typography>
          <Typography
            variant={"h4"}
            textAlign={"center"}
            padding={(window.innerWidth < 570) ? "5px" : "35px"}
            color={"black"}
          >
            {middleText}
          </Typography>
          <Typography textAlign={"right"} padding={(window.innerWidth < 570) ? "2px" : "10px"} color={"black"}>
            {bottomText}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

function Dashboard() {
  const location = useLocation();
  const [currentDate, setCurrentDate] = useState(moment().format("LL"));
  const [isUncondensedDashboardOpen, setIsUncondensedDashboardOpen] = useState(false);
  const [addedModals, setAddedModals] = useState<string[]>(location.state ? location.state.addedModals : ["Calories Burned", "Steps"]);
  const [isAddWidgetModalOpen, setIsAddWidgetModalOpen] = useState(false);
  const [selectedModal, setSelectedModal] = useState("");
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleSyncDeviceDataClick = () => {
    setOpen(true);
  };

  const handleOpenUncondensedView = (modal: string) => {
    setSelectedModal(modal);
    setIsUncondensedDashboardOpen(true);
  };

  const handleChevronClick = (i: number) => {
    const nextIndex = index + (i * 4);
    console.log(nextIndex);
    setIndex(nextIndex);
  }

  const getMiddleText = (modal: string) => {
    var index;

    if(modal === "Steps") index = 0;
    else if (modal === "Calories Burned") index = 1;
    else if (modal === "Active Minutes") index = 2;
    else if (modal === "Distance Travelled") index = 3;
    else { //recommended exercise
      const index = AvailableWidgets.findIndex(x => x.topText === modal);
      const modalInfo = AvailableWidgets[index];
  
      return modalInfo.middleText;
    }

    return modalData[index][modalData[index].length - 1].toString();
  }

  const getBottomText = (modal: string) => {
    var index;

    if(modal === "Steps") index = 0;
    else if (modal === "Calories Burned") index = 1;
    else if (modal === "Active Minutes") index = 2;
    else if (modal === "Distance Travelled") index = 3;
    else { //recommended exercise
      const index = AvailableWidgets.findIndex(x => x.topText === modal);
      const modalInfo = AvailableWidgets[index];
      return modalInfo.bottomText;
    }

    const diff = modalData[index][modalData[index].length - 1] - modalData[index][modalData[index].length - 2];
    
    if(diff > 0) return `+${diff.toString()} from yesterday`
    else return `${diff.toString()} from yesterday`
  }

  return (
    <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
      <UncondensedDashboard
        open={isUncondensedDashboardOpen}
        setOpen={setIsUncondensedDashboardOpen}
        selectedModal={selectedModal}
      />
      {/* <AddWidgetModal addedModals={addedModals} open={isAddWidgetModalOpen} setOpen={setIsAddWidgetModalOpen}/> */}
      <Box textAlign={"center"} padding={"20px"}>
        <Typography variant={"h5"} padding={"10px"}>
          Good Morning, Susanna!
        </Typography>
        <Typography variant={"h5"} fontWeight={"bold"} padding={"10px"}>
          {currentDate}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" width="70%" flexDirection="row" alignItems="center">
        <DashboardButton  title={"Edit Dashboard"} onClick={() => navigate("edit", {state: {addedModals: addedModals}})}/>
        <DashboardButton title={"Sync Device Data"} onClick={handleSyncDeviceDataClick}/>
      </Box>
      <Box sx={{ mt: 4, width:"62%", height:(window.innerWidth < 570) ? "350px" : "500px" }} display="flex" justifyContent="center" textAlign="center">
        <IconButton disabled={index < 4} onClick={() => handleChevronClick(-1)}>
          <ChevronLeft/>
        </IconButton>
        {(addedModals.length === 0) ? 
          <Box display="flex" justifyContent="center" padding={10} flexDirection="column">
            <Typography padding={2} variant="h5">No widgets to display!</Typography>
          </Box>
        :
          <Grid container spacing={{ xs: 1, md: 2 }} columns={{ md: 4, xs: 2 }} textAlign="left">
            {addedModals.slice(index, index + 4).map((data) => {
              return (
                <Grid item xs={2} md={2} padding={"10px"} sx={{height:"50%"}}>
                  <DashboardCard
                    topText={data}
                    middleText={getMiddleText(data)}
                    bottomText={getBottomText(data)}
                    onClick={() => handleOpenUncondensedView(data)}
                    navigate={() => navigate("/burpees")}
                  />
                </Grid>
              );
            })}
          </Grid>
        }
        <IconButton disabled={index >= addedModals.length - 4} onClick={() => handleChevronClick(1)}>
          <ChevronRight />
        </IconButton>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={"success"}>
          Device Data Synced Successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Dashboard;
