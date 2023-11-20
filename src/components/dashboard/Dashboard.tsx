import { Button, Box, Typography } from "@mui/material";
import React, { useState } from "react";
import UncondensedDashboard from "./UncondensedDashboard";

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
}

const DashboardCard = ({
  topText,
  middleText,
  bottomText,
}: DashboardCardProps) => {
  return (
    <Box
      boxShadow={"6"}
      borderRadius={3}
      padding={"5px"}
      width={"40%"}
      border={1}
      color={"secondary"}
    >
      <Typography fontWeight={"bold"} padding={"5px"} color={"black"}>
        {topText}
      </Typography>
      <Typography
        variant={"h4"}
        textAlign={"center"}
        padding={"30px"}
        color={"black"}
      >
        {middleText}
      </Typography>
      <Typography textAlign={"right"} padding={"10px"} color={"black"}>
        {bottomText}
      </Typography>
    </Box>
  );
};

function Dashboard() {
  const [isUncondensedDashboardOpen, setIsUncondensedDashboardOpen] =
    useState(false);

  const handleOpenUncondensedView = () => {
    console.log(isUncondensedDashboardOpen);
    console.log("opening");
    setIsUncondensedDashboardOpen(true);
    console.log(isUncondensedDashboardOpen);
  };

  return (
    <div>
      <UncondensedDashboard
        open={isUncondensedDashboardOpen}
        setOpen={setIsUncondensedDashboardOpen}
      />
      <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
        <Box textAlign={"center"} padding={"20px"}>
          <Typography variant={"h5"} padding={"10px"}>
            Good Morning, Susanna!
          </Typography>
          <Typography variant={"h5"} fontWeight={"bold"} padding={"10px"}>
            October 10, 2023
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} width={"60%"}>
          <DashboardButton title={"Edit Dashboard"} />
          <DashboardButton title={"Sync Device Data"} />
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          width={"70%"}
          justifyContent={"space-between"}
          padding={"50px"}
        >
          <Box
            display={"flex"}
            alignItems={"center"}
            flexDirection={"row"}
            justifyContent={"space-around"}
            width={"100%"}
          >
            <DashboardCard
              topText={"Steps"}
              middleText={"3,001"}
              bottomText={"-2450 from yesterday"}
            />
            <DashboardCard
              topText={"Calories Burned"}
              middleText={"1,560"}
              bottomText={"-620 from yesterday"}
            />
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            flexDirection={"row"}
            justifyContent={"space-around"}
            width={"100%"}
            padding={"50px"}
          >
            <DashboardCard
              topText={"Recommended Exercise"}
              middleText={"Calf Raises"}
              bottomText={"Try it Out ->"}
            />
            <DashboardCard
              topText={"Active Minutes"}
              middleText={"34"}
              bottomText={"+3 from yesterday"}
            />
          </Box>
        </Box>
      </Box>

      <Button onClick={() => handleOpenUncondensedView()}>
        Open uncondensed dashboard
      </Button>
    </div>
  );
}
export default Dashboard;
