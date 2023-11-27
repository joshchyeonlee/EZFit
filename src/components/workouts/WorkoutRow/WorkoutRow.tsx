import { Delete, Edit, PlayArrow } from "@mui/icons-material";
import { Box, Divider, Grid, IconButton, Typography } from "@mui/material";

export interface WorkoutRowProps {
  title: string;
  lastRun?: string;
  onPlayClick?: (workoutData: any) => void;
  exercises?: Exercise[];
}

interface Exercise {
  name: string;
  muscles?: string;
  equipment?: string;
  execution?: string;
  rest?: string;
  gif?: string;
}

function WorkoutRow({ title, lastRun, onPlayClick, exercises }: WorkoutRowProps) {

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
        margin={"20px"}
      >
        <Grid display={"flex"} width="40%" alignItems={"center"}>
        <IconButton onClick={handleClick}>
            <PlayArrow color="primary" fontSize="large" />
          </IconButton>
          <Typography paddingLeft={"16px"} fontSize={"18px"}>
            {title}
          </Typography>
        </Grid>
        <Divider
          orientation="vertical"
          flexItem
          sx={{ borderColor: "darkgray", padding: "10px" }}
        />
        <Grid
          display="flex"
          width="70%"
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingLeft={"30px"}
          paddingRight={"30px"}
        >
          {lastRun ? (
            <Typography fontSize={"18px"}>Last Run: {lastRun}</Typography>
          ) : (
            <Grid />
          )}
          <Box>
            <IconButton color="primary" aria-label="edit">
              <Edit fontSize="large" />
            </IconButton>
            <IconButton color="primary" aria-label="delete">
              <Delete fontSize="large" />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ borderColor: "darkgray" }} />
    </Grid>
  );
}

export default WorkoutRow;
