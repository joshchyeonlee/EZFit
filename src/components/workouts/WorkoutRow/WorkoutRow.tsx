import { Delete, Edit, PlayArrow } from "@mui/icons-material";
import { Box, Divider, Grid, Typography } from "@mui/material";

export interface WorkoutRowProps {
  title: string;
  lastRun?: string;
}

function WorkoutRow({ title, lastRun }: WorkoutRowProps) {
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
          <PlayArrow color="primary" fontSize="large" />
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
            <Edit color="primary" fontSize="large" />
            <Delete color="primary" fontSize="large" />
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ borderColor: "darkgray" }} />
    </Grid>
  );
}

export default WorkoutRow;
