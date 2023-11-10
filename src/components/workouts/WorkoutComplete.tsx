import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const OverlayBox = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(255, 192, 203, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const Header = styled(Box)({
  backgroundColor: 'gray',
  color: 'white',
  padding: '10px',
  borderRadius: '5px',
  marginBottom: '10px',
});

const ExerciseList = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
});

const ExerciseItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '5px',
});

const ExerciseBullet = styled(Box)({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: 'black',
  marginRight: '5px',
});

const ExerciseText = styled(Box)({
  fontSize: '16px',
});

function WorkoutComplete() {
  return (
    <OverlayBox>
      <Header>
        Congratulations You made it!
      </Header>
      <ExerciseList>
        <ExerciseItem>
          <ExerciseBullet />
          <ExerciseText>Leg Press</ExerciseText>
        </ExerciseItem>
        <ExerciseItem>
          <ExerciseBullet />
          <ExerciseText>Push-Ups</ExerciseText>
        </ExerciseItem>
        <ExerciseItem>
          <ExerciseBullet />
          <ExerciseText>Inclined Dumbbell Chest Press</ExerciseText>
        </ExerciseItem>
        <ExerciseItem>
          <ExerciseBullet />
          <ExerciseText>Dumbbell Shoulder Press</ExerciseText>
        </ExerciseItem>
        <ExerciseItem>
          <ExerciseBullet />
          <ExerciseText>Burpees</ExerciseText>
        </ExerciseItem>
      </ExerciseList>
      <Box>
        <Button style={{ backgroundColor: 'primary', padding: '10px', borderRadius: '5px', border: 'none' }}>
          Log Exercise and Return to Workouts
        </Button>
      </Box>
    </OverlayBox>
  );
}

export default WorkoutComplete;
