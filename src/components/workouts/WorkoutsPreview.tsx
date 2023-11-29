import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoIcon from '@mui/icons-material/Info';
import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material';
import { WorkoutRowProps } from './WorkoutRow/WorkoutRow';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

interface WorkoutsPreviewProps extends WorkoutRowProps {
  onBackClick: () => void;
}


const WorkoutsPreview = ({ title, exercises, onBackClick }: WorkoutsPreviewProps) => {
  const navigate = useNavigate();

  const handleLogWorkout = () => {
    // TODO: implement logging logic
    alert('Workout logged!');
  };

  const handleRunWorkout = () => {
    console.log(exercises)
    navigate('/RunWorkout', { state: { exercises } });
  };

  return (
    <Box
      sx={{
        bgcolor: 'primary',
        height: '100vh',
        padding: 2,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <IconButton
              color="primary"
              onClick={onBackClick}
              sx={{ paddingLeft: "1%", marginTop: '-4%' }}
            >
              <ArrowBack sx={{ fontSize: "50px" }} />
            </IconButton>
            <Typography variant="h4" sx={{ marginTop: '3%', marginLeft: '-5%' }}>{title}</Typography>
            <div />
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '3%' }}>
          <List style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {exercises && exercises.map((exercise, index) => (
              <ListItem
                key={exercise.name}
                style={{
                  width: '350px',
                  borderRadius: '50px',
                  border: '1px solid #000',
                  padding: '10px',
                  marginTop: '7%',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Typography variant="subtitle1" sx={{ width: '3%', flex: 'none' }}>{`${index + 1}:`}</Typography>
                <div style={{ display: 'flex', alignItems: 'center', flex: 1, paddingRight: '2%' }}>
                  <Typography style={{ textAlign: 'center', flex: 1 }}>
                    {exercise.name}
                  </Typography>
                </div>
                <ListItemSecondaryAction>
                  <IconButton edge="end" color="primary" sx={{ marginTop: '85%' }}>
                    <InfoIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>

        </Grid>
        <Grid container spacing={2} sx={{ marginLeft: '23%', marginTop: '5%' }}>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLogWorkout}
              sx={{
                width: '40%', borderRadius: '50px',
                border: '1px solid #000',
                padding: '10px'
              }}

            >
              Manually Log Workout
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleRunWorkout}
              sx={{
                width: '40%', borderRadius: '50px',
                border: '1px solid #000',
                padding: '10px'
              }}
            >
              Run Workout
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WorkoutsPreview;
