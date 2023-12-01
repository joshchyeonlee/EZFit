import {
  Button,
  Box,
  Typography,
  Card,
  CardActionArea,
  Grid,
} from "@mui/material";
import { useState } from "react";
import UncondensedDashboard from "./UncondensedDashboard";
import AddWidgetModal from "./AddWidgetModal";

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
        <Box display="flex" justifyContent="center" flexDirection={"column"}>
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
  const [isUncondensedDashboardOpen, setIsUncondensedDashboardOpen] =
    useState(false);
  const [isAddWidgetModalOpen, setIsAddWidgetModalOpen] = useState(false);
  const [cardData, setCardData] = useState([
    {
      topText: "Steps",
      middleText: "3,001",
      bottomText: "-2,450 from yesterday",
      onClick: () => {
        handleOpenUncondensedView();
      },
    },
    {
      topText: "Calories Burned",
      middleText: "1,560",
      bottomText: "-620 from yesterday",
      onClick: () => {},
    },
    {
      topText: "Recommended Exercise",
      middleText: "Calf Raises",
      bottomText: "Try it Out ->",
      onClick: () => {},
    },
    {
      topText: "Active Minutes",
      middleText: "34",
      bottomText: "+3 from yesterday",
      onClick: () => {},
    },
  ]);
  const [index, setIndex] = useState(0);

  const handleOpenUncondensedView = () => {
    setIsUncondensedDashboardOpen(true);
  };

  const handleOpenAddWidgetModal = () => {
    setIsAddWidgetModalOpen(true);
  };

  return (
    <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
      <UncondensedDashboard
        open={isUncondensedDashboardOpen}
        setOpen={setIsUncondensedDashboardOpen}
      />
      <AddWidgetModal
        open={isAddWidgetModalOpen}
        setOpen={setIsAddWidgetModalOpen}
      />
      <UncondensedDashboard
        open={isUncondensedDashboardOpen}
        setOpen={setIsUncondensedDashboardOpen}
      />
      <Box textAlign={"center"} padding={"20px"}>
        <Typography variant={"h5"} padding={"10px"}>
          Good Morning, Susanna!
        </Typography>
        <Typography variant={"h5"} fontWeight={"bold"} padding={"10px"}>
          October 10, 2023
        </Typography>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"70%"}
        flexDirection={window.innerWidth < 576 ? "column" : "row"}
      >
        <DashboardButton title={"Edit Dashboard"} />
        <DashboardButton title={"Sync Device Data"} />
      </Box>

      <Box width={"62%"} sx={{ mt: 4 }}>
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ md: 4, xs: 2 }}>
          {cardData.slice(index, index + 4).map((data) => {
            return (
              <Grid item xs={2} md={2} padding={"10px"}>
                <DashboardCard
                  topText={data.topText}
                  middleText={data.middleText}
                  bottomText={data.bottomText}
                  onClick={data.onClick}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}

export default Dashboard;
