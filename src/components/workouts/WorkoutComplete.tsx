import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const OverlayBox = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%', 
  maxHeight: '90vh',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '20px',
  boxShadow: theme.shadows[5],
  padding: theme.spacing(4),
  zIndex: theme.zIndex.modal + 1,
}));

const ExerciseList = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.paper,
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
}));

const ExerciseItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  borderBottom: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  alignItems: 'center',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.error.contrastText,
  marginTop: theme.spacing(4),
  padding: theme.spacing(1),
  marginLeft: '12%',
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: theme.palette.error.dark,
  },
}));

function WorkoutComplete({ onClose }: any) {
  return (
    <OverlayBox>
      <Typography variant="h6" align="center">
        Congratulations🎉
      </Typography>
      <Typography variant="h6" align="center">
        You made it!
      </Typography>
      <ExerciseList>
        {['Leg Press', 'Push-Ups', 'Inclined Dumbbell Chest Press', 'Dumbbell Shoulder Press', 'Burpees'].map((exercise, index) => (
          <ExerciseItem key={index}>
            <Typography variant="subtitle1">{exercise}</Typography>
          </ExerciseItem>
        ))}
      </ExerciseList>
      <StyledButton variant="contained" onClick={onClose}>
        Log Exercise and Return to Workouts
      </StyledButton>
    </OverlayBox>
  );
}

export default WorkoutComplete;
