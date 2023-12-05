import * as React from "react";
import { Exercise } from "./ExerciseLibrary.types";
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Grid, Box, IconButton, Typography, Divider } from "@mui/material";
import { height } from "@mui/system";

const ExerciseView = (props: { exercise: Exercise }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [prevPage, setPrevPage] = useState(location.state);

  return (
    <Box
      sx={{
        top: 0,
        left: 0,
        width: "100%",
        bgcolor: "primary",
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          color="primary"
          onClick={() => (prevPage ? navigate(prevPage.from) : navigate("/Workouts"))}
          sx={{ paddingLeft: "1%", marginTop: "-1%" }}
        >
          <ArrowBack sx={{ fontSize: "50px" }} />
        </IconButton>
        <Typography variant="h4" fontWeight="bold" sx={{ marginLeft: "-5%" }}>
          {props.exercise.name}
        </Typography>
        <div></div>
      </Box>

      <Grid
        style={{
          display: "flex",
          zIndex: 0,
          width: "100%",
        }}
        container
      >
        <Grid sm={6} xs={12} item borderRight={"2px solid black"}>
          <Grid item style={{ marginTop: "15%", marginBottom: "10%" }}>
            <Typography sx={{ textAlign: "center" }} variant="h6">
              Muscles Targeted
            </Typography>
            {props.exercise.muscles.map((muscle, index) => (
              <Typography sx={{ textAlign: "center" }} key={index}>
                {muscle}
              </Typography>
            ))}
          </Grid>
          <Grid item style={{ marginBottom: "10%" }}>
            <Typography sx={{ textAlign: "center" }} variant="h6">
              Equipment
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              {props.exercise.equipment}
            </Typography>
          </Grid>

          <Grid item style={{ marginBottom: "10%" }}>
            <Typography sx={{ textAlign: "center" }} variant="h6">
              Execution
            </Typography>
            {props.exercise.execution.map((step, index) => (
              <Typography sx={{ textAlign: "center" }} key={index}>
                {step}
              </Typography>
            ))}
          </Grid>

          <Grid item style={{ marginBottom: "10%" }}>
            <Typography sx={{ textAlign: "center" }} variant="h6">
              Rest
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              {props.exercise.rest}
            </Typography>
          </Grid>
        </Grid>

        <Grid
          sm={6}
          xs={12}
          item
          container
          display={"flex"}
          justifyContent={"center"}
        >
          <Grid item style={{ marginBottom: "5%" }}>
            <Box
              sx={{
                minHeight: "100px",
                minWidth: "100px",
                paddingTop: "100px",
              }}
            >
              <img src={props.exercise.gif} alt={props.exercise.name} />
            </Box>
          </Grid>
          <Grid
            item
            style={{
              textAlign: "center",
              minHeight: "100px",
              minWidth: "100px",
              padding: "10%",
              marginBottom: "10%",
              marginTop: "3%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                textAlign: "center",
                flexGrow: 1,
              }}
            >
              <Typography>{props.exercise.instruction}</Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExerciseView;
