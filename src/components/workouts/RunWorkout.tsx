import * as React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import WorkoutComplete from './WorkoutComplete';
import { useLocation } from 'react-router-dom';
import { Exercise } from './ExerciseLibrary/ExerciseLibrary.types';
import { exerciseLibraryMockData } from './ExerciseLibrary/ExerciseLibrary.mockData';

const RunWorkout = () => {
    const location = useLocation();

    const passedExercises = location.state?.exercises as Partial<Exercise>[] || [];
    const exercises = passedExercises.map(exerciseNameObj => {
        const fullExerciseDetails = exerciseLibraryMockData.find(exercise => exercise.name === exerciseNameObj.name);
        return fullExerciseDetails || null;
      }).filter((exercise): exercise is Exercise => exercise !== null);

    const [workout, setWorkout] = useState<number>(0);
    const [showWorkoutComplete, setShowWorkoutComplete] = useState(false);

    const navigate = useNavigate();
    const handleNextExercise = () => {
        if (workout === exercises.length - 1) {
            setShowWorkoutComplete(true);
        } else {
            setWorkout((workout + 1) % exercises.length);
        }
    };

    const handleClose = () => {
        setShowWorkoutComplete(false);
        navigate('/Workouts');
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
                position: 'relative'
            }}
        >
            {showWorkoutComplete && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1,
                    }}
                ></div>
            )}
            {showWorkoutComplete && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '50%',
                        height: '50%',
                        backgroundColor: 'primary',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1,
                    }}
                >
                    <WorkoutComplete onClose={handleClose} exercises={exercises} />
                </div>
            )}

            <Typography variant="h4" align="center" fontWeight="bold">
                {exercises[workout].name}
            </Typography>

            <Button variant="contained" color="error" onClick={handleEndWorkout} style={{ position: 'absolute', top: '4%', left: '81%', width: '15%', height: '7%' }}>
                End Workout
            </Button>
            <div style={{ display: 'flex', overflowX: 'hidden', height: '80vh', zIndex: 0 }}>
                <div style={{ flexBasis: '50%', overflowY: 'auto', zIndex: 0, marginLeft: '5%', marginRight: '5%', maxWidth: '40.5%' }}>

                    <Grid item xs={6} style={{ marginTop: '15%', marginLeft: '15%', marginBottom: '5%' }}>
                        <Typography sx={{ textAlign: 'center' }} variant="h6">Muscles Targeted</Typography>
                        {exercises[workout].muscles.map((muscle, index) => (
                            <Typography key={index} sx={{ textAlign: 'center' }}>
                                {muscle}
                            </Typography>
                        ))}
                    </Grid>
                    <Grid item xs={6} style={{ marginLeft: '15%', marginBottom: '5%' }}>
                        <Typography sx={{ textAlign: 'center' }} variant="h6">Equipment</Typography>
                        <Typography sx={{ textAlign: 'center' }}>{exercises[workout].equipment}</Typography>
                    </Grid>

                    <Grid item xs={6} style={{ marginLeft: '15%', marginBottom: '5%' }}>
                        <Typography sx={{ textAlign: 'center' }} variant="h6">Execution</Typography>
                        {exercises[workout].execution.map((step, index) => (
                            <Typography key={index} sx={{ textAlign: 'center' }}>
                                {step}
                            </Typography>
                        ))}
                    </Grid>

                    <Grid item xs={6} style={{ marginLeft: '15%', marginBottom: '5%' }}>
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
                            style={{ position: 'absolute', top: '83%', left: '5%', width: '20%', height: '8%' }}
                        >
                            {'<'}- Previous Exercise
                        </Button>
                    </Grid>

                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '2px', backgroundColor: 'gray', position: 'absolute', top: '15%', bottom: 0, left: '50%' }}></div> {/* Vertical Divider */}
                </div>

                <div style={{ flexBasis: '50%', overflowY: 'auto', zIndex: 0 }}>
                    <Grid item xs={6} style={{ marginLeft: '10%', marginBottom: '5%' }}>
                        {/* <Typography variant="h6" style={{ textAlign: 'center' }}>GIF of Exercise</Typography> */}
                        <Box
                            sx={{
                                position: 'absolute',
                                textAlign: 'center',
                                minHeight: '100px',
                                minWidth: '100px',
                                top: '20%',
                                left: '50%',
                                right: 0,
                                bottom: 0,
                            }}
                        >
                            <img
                                src={exercises[workout].gif}
                                alt={exercises[workout].name}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={6} style={{
                        position: 'absolute',
                        textAlign: 'center',
                        minHeight: '100px',
                        minWidth: '100px',
                        top: '50%',
                        left: '50%',
                        width: '30%',
                        right: 0,
                        bottom: 0,
                        marginLeft: '10%',
                        marginBottom: '10%',
                        marginTop: '6%',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <div style={{
                            textAlign: 'center',
                            overflowY: 'auto',
                            maxHeight: '200px',
                            flexGrow: 1,
                        }}>
                            <Typography>{exercises[workout].instruction}</Typography>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" color="primary" onClick={handleNextExercise}
                            style={{ position: 'absolute', top: '83%', left: '77%', width: '20%', height: '8%' }} >
                            Next Exercise -{'>'}
                        </Button>
                    </Grid>
                </div>
            </div>

        </Box>
    );
};

export default RunWorkout;