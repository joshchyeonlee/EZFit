import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InfoIcon from '@mui/icons-material/Info';
import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material';

interface Exercise {
  name: string;
  muscles: string;
  equipment: string;
  execution: string;
  rest: string;
  gif: string;
}

const exercises: Exercise[] = [
  {
    name: 'Leg Press',
    muscles: 'Legs, glutes, core',
    equipment: 'Leg press machine',
    execution: 'Sit on the leg press machine and place your feet on the platform. Keep your back flat and your core tight. Slowly lower the platform until your knees are bent at a 90-degree angle. Pause for a second and then push the platform back up to the starting position. Repeat for the desired number of reps.',
    rest: '90 seconds',
    gif: 'https://media.giphy.com/media/3o7TKUM3IgJBX2as9O/giphy.gif',
  },
  {
    name: 'Push-Ups',
    muscles: 'Chest, triceps, shoulders, core',
    equipment: 'None',
    execution: 'Place your hands on the floor slightly wider than your shoulders and extend your legs behind you. Keep your body in a straight line from head to toe and your elbows tucked close to your sides. Lower your chest until it almost touches the floor and then push yourself back up to the starting position. Repeat for the desired number of reps.',
    rest: '60 seconds',
    gif: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif',
  },
  {
    name: 'Inclined Dumbbell Chest Press',
    muscles: 'Chest, triceps, shoulders',
    equipment: 'Dumbbells, incline bench',
    execution: 'Lie on an incline bench and hold a dumbbell in each hand at chest level. Keep your palms facing forward and your elbows slightly bent. Press the dumbbells up over your chest until your arms are fully extended. Pause for a second and then lower the dumbbells back to the starting position. Repeat for the desired number of reps.',
    rest: '90 seconds',
    gif: 'https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif',
  },
  {
    name: 'Dumbbell Shoulder Press',
    muscles: 'Shoulders, triceps',
    equipment: 'Dumbbells',
    execution: 'Stand with your feet shoulder-width apart and hold a dumbbell in each hand at shoulder level. Keep your palms facing forward and your elbows slightly bent. Press the dumbbells up over your head until your arms are fully extended. Pause for a second and then lower the dumbbells back to the starting position. Repeat for the desired number of reps.',
    rest: '60 seconds',
    gif: 'https://media.giphy.com/media/3o7TKPdUkkcBlYzngo/giphy.gif',
  },
  {
    name: 'Burpees',
    muscles: 'Full body, cardio',
    equipment: 'None',
    execution: 'Stand with your feet shoulder-width apart and your arms by your sides. Squat down and place your hands on the floor in front of you. Kick your legs back into a plank position and do a push-up. Then, bring your legs back to the squat position and jump up as high as you can. Repeat for the desired number of reps.',
    rest: '45 seconds',
    gif: 'https://media.giphy.com/media/3o7TKRwpns23QMNNiE/giphy.gif',
  },
];

const WorkoutsPreview = () => {
  const [workout, setWorkout] = useState<number>(0);

  const handleLogWorkout = () => {
    // TODO: implement logging logic
    alert('Workout logged!');
  };

  const handleRunWorkout = () => {
    // TODO: implement running logic
    alert('Workout started!');
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
            <Button variant="text" color="primary" startIcon={<ArrowBackIcon />}>
              Back
            </Button>
            <Typography variant="h4" sx={{ marginTop: '5%' }}>Workout #{workout + 1}</Typography>
            <Button variant="text" color="primary" endIcon={<InfoIcon />}>
              Info
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} sx={{ marginTop: '3%' }}>
          <List style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {exercises.map((exercise, index) => (
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
                <ListItemText
                  primary={`${index + 1}.    ${exercise.name}`}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" color="primary" sx={{ marginTop: '75%' }}>
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
