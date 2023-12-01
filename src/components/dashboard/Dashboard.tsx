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

interface DashboardButtonProps {
  title: string;
  onClick?: () => void;
}

const DashboardButton = ({ title, onClick }: DashboardButtonProps) => {
  return (
    <Box textAlign={"center"} width={"25%"} padding={"0px 8px"}>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ minHeight: "43px" }}
        onClick={onClick}
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
}

const DashboardCard = ({
  topText,
  middleText,
  bottomText,
  onClick,
}: DashboardCardProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 4,
        boxShadow: 3,
      }}
    >
      <CardActionArea onClick={onClick}>
        <Box display="flex" justifyContent="center" flexDirection={"column"} padding={2}>
          <Typography fontWeight={"bold"} padding={"5px"} color={"black"}>
            {topText}
          </Typography>
          <Typography
            variant={"h4"}
            textAlign={"center"}
            padding={"35px"}
            color={"black"}
          >
            {middleText}
          </Typography>
          <Typography textAlign={"right"} padding={"10px"} color={"black"}>
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
  const [selectedModal, setSelectedModal] = useState("");
  const [addedModals, setAddedModals] = useState<string[]>(location.state ? location.state.addedModals : ["Calories Burned", "Steps"]);
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
  };

  const handleChevronClick = (i: number) => {
    const nextIndex = index + (i * 4);
    console.log(nextIndex);
    setIndex(nextIndex);
  }

  const getMiddleText = (modal: string) => {
    const index = AvailableWidgets.findIndex(x => x.topText = modal);
    const modalInfo = AvailableWidgets[index];

    return modalInfo.middleText;
  }

  const getBottomText = (modal: string) => {
    const index = AvailableWidgets.findIndex(x => x.topText = modal);
    const modalInfo = AvailableWidgets[index];

    return modalInfo.bottomText;
  }

  useEffect(() => {
    if(selectedModal !== "") setIsUncondensedDashboardOpen(true);
  },[selectedModal])

  return (
    <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
      <UncondensedDashboard
        open={isUncondensedDashboardOpen}
        setOpen={setIsUncondensedDashboardOpen}
        selectedModal={selectedModal}
      />

      <Box textAlign={"center"} padding={"20px"}>
        <Typography variant={"h5"} padding={"10px"}>
          Good Morning, Susanna!
        </Typography>
        <Typography variant={"h5"} fontWeight={"bold"} padding={"10px"}>
          {currentDate}
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"70%"}
        flexDirection={window.innerWidth < 576 ? "column" : "row"}
      >
        <DashboardButton title={"Edit Dashboard"} onClick={() => navigate("edit", {state: {addedModals: addedModals}})}/>
        <DashboardButton
          title={"Sync Device Data"}
          onClick={handleSyncDeviceDataClick}
        />
      </Box>

      <Box sx={{ mt: 4, width:"62%", height:"500px" }} display="flex">
        <IconButton disabled={index < 4} onClick={() => handleChevronClick(-1)}>
          <ChevronLeft/>
        </IconButton>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ md: 4, xs: 2 }}>
          {addedModals.slice(index, index + 4).map((data) => {
            return (
              <Grid item xs={2} md={2} padding={"10px"}>
                <DashboardCard
                  topText={data}
                  middleText={getMiddleText(data)}
                  bottomText={getBottomText(data)}
                  onClick={() => handleOpenUncondensedView(data)}
                />
              </Grid>
            );
          })}
        </Grid>
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
