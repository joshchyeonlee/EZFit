import * as React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Box, Typography, Button, TextField, List, ListItem, ListItemText, Divider, BottomNavigation, BottomNavigationAction, IconButton, InputAdornment, Snackbar } from '@mui/material'
import { Search, SwapHoriz } from '@mui/icons-material'
import Alert from '../utils/Alert'

interface Workout {
    name: string;
    index: number;
}

const categories: { name: string; exercises: string[] }[] = [
    { name: 'Abs', exercises: ['Crunches', 'Planks', 'Sit-ups'] },
    { name: 'Back', exercises: ['Pull-ups', 'Rows', 'Deadlifts'] },
    { name: 'Legs', exercises: ['Squats', 'Lunges', 'Leg press'] },
    { name: 'Chest', exercises: ['Push-ups', 'Bench press', 'Flyes'] },
];

const NewWorkout = (): JSX.Element => {
    const [search, setSearch] = useState<string>('')
    const [exercises, setExercises] = useState<Workout[]>([]);
    const [workoutName, setWorkoutName] = useState('');
    const [open, setOpen] = useState(false);


    const navigate = useNavigate();

    const handleWorkoutNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setWorkoutName(event.target.value);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearch(event.target.value)
    }

    const handleAddExercise = (exercise: string): void => {
        const nextIndex = Math.max(...exercises.map((item) => item.index), -1) + 1;
        setExercises([...exercises, { name: exercise, index: nextIndex }]);
    }

    const handleRemoveExercise = (exerciseToRemove: string, indexToRemove: number): void => {
        setExercises(exercises.filter((exercise) => !(exercise.name === exerciseToRemove && exercise.index === indexToRemove))
            .map((exercise, index) => ({ ...exercise, index })));
        console.log(exerciseToRemove, indexToRemove)
    }

    const handleSaveWorkout = (): void => {
        setOpen(true); // Open the Snackbar
        setTimeout(() => {
            navigate('/Workouts');
        }, 2000);
    }

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div>
            <Box
                sx={{
                    padding: 2,
                    marginLeft: '20%',
                    marginRight: '20%',
                    marginTop: '2%'
                }}>
                <Typography style={{ textAlign: "center", color: 'black', fontWeight: 'bold' }} >Create Workout</Typography>
            </Box>

            <div style={{ display: 'flex', overflowX: 'hidden', height: '80vh' }}>
                <div style={{ flexBasis: '50%', marginLeft: '5%', marginRight: '5%', maxWidth: '42%' }}>
                    <Typography style={{ marginLeft: '2%' }}>Find, Drag, and Drop Exercises</Typography>
                    <TextField
                        sx={{
                            backgroundColor: (theme: any) => theme.palette.textFieldBkg,
                            border: (theme: any) => `2px solid ${theme.palette.primary.main}`,
                            borderRadius: "10px",
                            width: '97%'
                        }}
                        type="search"
                        variant="outlined"
                        value={search}
                        placeholder="Search For Workout..."
                        onChange={handleSearchChange}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search color="primary" />
                                </InputAdornment>
                            ),
                        }} />
                    <List style={{ marginTop: '1%', marginBottom: '2%' }}>
                        {categories
                            .map((category) => ({
                                ...category,
                                exercises: category.exercises.filter(exercise =>
                                    exercise.toLowerCase().includes(search.toLowerCase())
                                )
                            }))
                            .filter(category => category.exercises.length > 0)
                            .map((category) => (
                                <ListItem key={category.name}>
                                    <ListItemText>
                                        <Typography variant="h6">{category.name}</Typography>
                                        <List>
                                            {category.exercises.map((exercise, index) => (
                                                <React.Fragment key={index}>
                                                    <ListItem key={exercise} button onClick={() => handleAddExercise(exercise)}>
                                                        <ListItemIcon>
                                                            <AddCircleOutlineIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary={`${exercise}`} />
                                                    </ListItem>
                                                    <Divider />
                                                </React.Fragment>
                                            ))}
                                        </List>
                                    </ListItemText>
                                </ListItem>
                            ))
                        }
                    </List>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div>
                        <div style={{ width: '2px', backgroundColor: 'gray', position: 'absolute', top: '15%', bottom: '55%', left: '50%' }}></div>
                        <SwapHoriz fontSize="large" style={{ fontSize: '5rem', position: 'absolute', top: '50%', left: '47.3%', fontWeight: 'bold', textShadow: '0 0 4px black' }} />
                        <div style={{ width: '2px', backgroundColor: 'gray', position: 'absolute', top: '65%', bottom: 0, left: '50%' }}></div>
                    </div>
                </div>

                <div style={{ flexBasis: '50%', marginTop: '1.3%', marginLeft: '2%' }}>
                    <Box
                        sx={{
                            padding: 2,
                            marginLeft: '5%',
                            width: '80%',
                            display: 'flex',
                            alignItems: 'center',
                            height: '5%',
                            paddingLeft: '5%',
                        }}
                    >
                        <Typography style={{
                            textAlign: 'center',
                            color: 'black',
                            whiteSpace: 'nowrap',
                        }}>Workout Name: </Typography>
                        <TextField
                            id="workout-name"
                            variant="standard"
                            value={workoutName}
                            onChange={handleWorkoutNameChange}
                            style={{ marginLeft: '5rem', width: '50%' }}
                        />
                    </Box>
                    <List style={{ marginTop: '6.2%' }}>
                        {exercises.map((exercise, index) => (
                            <React.Fragment key={(exercise.name, exercise.index)}>
                                <ListItem sx={{ padding: '0.6%', height: '1%', display: 'flex', alignItems: 'center' }}>
                                    <ListItemText
                                        primary={`${exercise.index + 1}:`}
                                        sx={{ width: '5%', flex: 'none' }} // Adjust the width as needed
                                    />
                                    <div style={{ display: 'flex', marginLeft: '4%', alignItems: 'center', border: '2px solid #8F2D56', flex: 1 }}>
                                        <ListItemText
                                            primary={exercise.name}
                                            sx={{ textAlign: 'center', flex: 1 }}
                                        />
                                        <IconButton onClick={() => handleRemoveExercise(exercise.name, exercise.index)} style={{ marginLeft: 'auto' }}>
                                            <DeleteIcon color="primary" />
                                        </IconButton>
                                    </div>
                                </ListItem>
                            </React.Fragment>
                        ))}
                    </List>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSaveWorkout}
                        style={{
                            margin: 16,
                            position: 'fixed',
                            bottom: '6%',
                            left: '75%',
                            transform: 'translateX(-50%)',
                            zIndex: 1,
                            width: '45%'
                        }}
                    >
                        Save Workout
                    </Button>
                </div>
            </div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Workout saved!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default NewWorkout
