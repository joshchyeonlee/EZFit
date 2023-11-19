import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const OverlayBox = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  height: '70%',
  maxHeight: '100vh',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '20px',
  boxShadow: theme.shadows[5],
  padding: theme.spacing(4),
  zIndex: theme.zIndex.modal + 1,
}));

const ExerciseList = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  marginTop: theme.spacing(2),
  padding: theme.spacing(2),
  marginLeft: theme.spacing(5),
  marginRight: theme.spacing(5)

}));

const ExerciseItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: '20px',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'lightgrey',
  margin: '2%'
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.error.contrastText,
  marginTop: theme.spacing(4),
  padding: theme.spacing(1),
  marginLeft: '27%',
  height: '12%',
  width: '50%',

  borderRadius: '10px',
  '&:hover': {
    backgroundColor: theme.palette.error.dark,
  },
}));

function WorkoutComplete(props: { onClose: any, exercises: any }) {
  return (
    <OverlayBox>
      <Typography variant="h5" align="center">
        Congratulations 🎉
      </Typography>
      <Typography variant="h5" align="center">
        You made it!
      </Typography>
      <ExerciseList>
        {props.exercises.map((exercise: any, index: any) => (
          <ExerciseItem key={index}>
            <Typography variant="subtitle1" sx={{ width: '3%', flex: 'none' }}>{`${index + 1}:`}</Typography>
            <div style={{ display: 'flex', alignItems: 'center', flex: 1, paddingRight: '2%' }}>
              <Typography style={{ textAlign: 'center', flex: 1 }}>
                {exercise.name}
              </Typography>
            </div>
          </ExerciseItem>
        ))}
      </ExerciseList>
      <StyledButton variant="contained" onClick={props.onClose}>
        Log Exercise and Return to Workouts
      </StyledButton>
    </OverlayBox >
  );
}

export default WorkoutComplete;
