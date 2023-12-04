import { Delete, Edit, PlayArrow } from "@mui/icons-material";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export interface WorkoutRowProps {
  title: string;
  lastRun?: string;
  onPlayClick?: (workoutData: any) => void;
  exercises?: Exercise[];
  isMobile?: boolean;
  onDeleteClick?: () => void;
  onEditClick?: () => void;
}

interface Exercise {
  name: string;
  muscles?: string;
  equipment?: string;
  execution?: string;
  rest?: string;
  gif?: string;
}

function WorkoutRow({
  title,
  lastRun,
  onPlayClick,
  exercises,
  isMobile,
  onDeleteClick,
  onEditClick
}: WorkoutRowProps) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerHeight));
    };
  }, []);

  const handleClick = () => {
    if (onPlayClick) {
      onPlayClick({ title, lastRun, exercises });
    }
  };

  return (
    <Grid display={"flex"} flexDirection={"column"}>
      <Divider sx={{ borderColor: "darkgray" }} />
      <Grid
        display={"flex"}
        width={"100%"}
        justifyContent={"space-between"}
        margin={isMobile ? "4px" : "20px"}
        container
      >
        <Grid
          display={"flex"}
          width="40%"
          alignItems={"center"}
          xs={12}
          sm={3}
          justifyContent={isMobile ? "center" : "left"}
        >
          <IconButton onClick={handleClick}>
            <PlayArrow color="primary" fontSize="large" />
          </IconButton>
          <Typography paddingLeft={"16px"} fontSize={"18px"}>
            {title}
          </Typography>
        </Grid>
        {!isMobile ? (
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderColor: "darkgray", padding: "10px" }}
          />
        ) : null}
        <Grid
          display="flex"
          width="70%"
          justifyContent={isMobile ? "center" : "space-between"}
          alignItems={"center"}
          paddingLeft={"30px"}
          paddingRight={"30px"}
          xs={12}
          sm={6}
          container
        >
          {lastRun ? (
            <Typography fontSize={"18px"}>Last Run: {lastRun}</Typography>
          ) : (
            <Grid />
          )}
          <Grid xs={12} sm={3}>
            <IconButton color="primary" aria-label="edit" onClick={onEditClick}>
              <Edit fontSize="large" />
            </IconButton>
            <IconButton color="primary" aria-label="delete" onClick={onDeleteClick}>
              <Delete fontSize="large" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={{ borderColor: "darkgray" }} />
    </Grid>
  );
}

export default WorkoutRow;
