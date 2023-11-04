import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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
        name: 'Squats',
        muscles: 'Legs, glutes, core',
        equipment: 'Barbell, rack',
        execution: 'Stand with your feet shoulder-width apart and the barbell resting on your upper back. Keep your chest up and your core tight. Slowly bend your knees and lower your hips until your thighs are parallel to the floor. Pause for a second and then push yourself back up to the starting position. Repeat for the desired number of reps.',
        rest: '90 seconds',
        gif: 'https://media.giphy.com/media/3o6Zt6KHxJTbXCnSvu/giphy.gif',
    },
    {
        name: 'Lunges',
        muscles: 'Legs, glutes, core',
        equipment: 'Dumbbells',
        execution: 'Stand with your feet hip-width apart and hold a dumbbell in each hand. Step forward with your right leg and lower your body until your right thigh is parallel to the floor and your left knee is almost touching the ground. Keep your torso upright and your core tight. Push yourself back up to the starting position and repeat with your left leg. Alternate legs for the desired number of reps.',
        rest: '60 seconds',
        gif: 'https://media.giphy.com/media/3o7TKUM3IgJBX2as9O/giphy.gif',
    },
    {
        name: 'Push-ups',
        muscles: 'Chest, triceps, shoulders, core',
        equipment: 'None',
        execution: 'Place your hands on the floor slightly wider than your shoulders and extend your legs behind you. Keep your body in a straight line from head to toe and your elbows tucked close to your sides. Lower your chest until it almost touches the floor and then push yourself back up to the starting position. Repeat for the desired number of reps.',
        rest: '45 seconds',
        gif: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif',
    },
    {
        name: 'Bench press',
        muscles: 'Chest, triceps, shoulders',
        equipment: 'Barbell, bench',
        execution: 'Lie on a flat bench and grasp the barbell with a medium-width grip. Lift the bar off the rack and hold it above your chest with your arms fully extended. Slowly lower the bar until it touches your chest and then press it back up to the starting position. Repeat for the desired number of reps.',
        rest: '90 seconds',
        gif: 'https://media.giphy.com/media/l0HlNQ03J5JxX6lva/giphy.gif',
    },
];

const RunWorkout = () => {
    const [workout, setWorkout] = useState<number>(0);

    const handleNextExercise = () => {
        setWorkout((workout + 1) % exercises.length);
    };

    const handlePreviousExercise = () => {
        setWorkout((workout - 1 + exercises.length) % exercises.length);
    };

    const handleEndWorkout = () => {
        // TODO: implement ending logic
        alert('Workout ended!');
    };

    return (
        <Box
            sx={{
                bgcolor: 'primary',
                height: '90vh',
                padding: 2,
            }}
        >
            <Typography variant="h4" align="center">
                Workout #{workout + 1}
            </Typography>

            <Button variant="contained" color="secondary" onClick={handleEndWorkout} style={{ position: 'absolute', top: '4%', left: '85%' }}>
                End Workout
            </Button>
            <div style={{ display: 'flex', overflowX: 'hidden', height: '80vh', zIndex: 0 }}>
                <div style={{ flexBasis: '50%', overflowY: 'auto', zIndex: 0, marginLeft: '5%', marginRight: '5%', maxWidth: '40.5%' }}>

                    <Grid item xs={6} style={{ marginTop: '15%', marginLeft: '15%', marginBottom: '10%' }}>
                        <Typography sx={{ textAlign: 'center' }} variant="h6">Muscles Targeted</Typography>
                        <Typography sx={{ textAlign: 'center' }}>{exercises[workout].muscles}</Typography>
                    </Grid>
                    <Grid item xs={6} style={{ marginLeft: '15%', marginBottom: '10%' }}>
                        <Typography sx={{ textAlign: 'center' }} variant="h6">Equipment</Typography>
                        <Typography sx={{ textAlign: 'center' }}>{exercises[workout].equipment}</Typography>
                    </Grid>

                    <Grid item xs={6} style={{ marginLeft: '15%', marginBottom: '10%' }}>
                        <Typography sx={{ textAlign: 'center' }} variant="h6">Rest</Typography>
                        <Typography sx={{ textAlign: 'center' }}>{exercises[workout].rest}</Typography>
                    </Grid>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ width: '2px', backgroundColor: 'gray', position: 'absolute', top: '15%', bottom: 0, left: '50%' }}></div> {/* Vertical Divider */}
                    </div>
                    <Grid item xs={6}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handlePreviousExercise}
                            style={{ position: 'absolute', top: '85%', left: '5%' }}
                        >
                            Previous Exercise
                        </Button>
                    </Grid>
                    
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '2px', backgroundColor: 'gray', position: 'absolute', top: '15%', bottom: 0, left: '50%' }}></div> {/* Vertical Divider */}
                </div>

                <div style={{ flexBasis: '50%', overflowY: 'auto', zIndex: 0, marginTop: '1%' }}>
                    <Grid item xs={6} style={{ marginTop: '2%', marginLeft: '10%', marginBottom: '5%' }}>
                        <Typography variant="h6" style={{ textAlign: 'center' }}>GIF of Exercise</Typography>
                        <div style={{ textAlign: 'center', maxHeight: '5%', minHeight:'5%'}}>
                            <img src={exercises[workout].gif} alt={exercises[workout].name} />
                        </div>
                    </Grid>
                    <Grid item xs={6} style={{ marginLeft: '10%', marginBottom: '10%' }}>
                        <Typography variant="h6" style={{ textAlign: 'center' }}>Execution</Typography>
                        <Typography style={{ textAlign: 'center' }}>{exercises[workout].execution}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" color="primary" onClick={handleNextExercise}
                            style={{ position: 'absolute', top: '85%', left: '80%' }} >
                            Next Exercise
                        </Button>
                    </Grid>
                </div>
            </div>
            {/* </Grid> */}
        </Box>
    );
};

export default RunWorkout;