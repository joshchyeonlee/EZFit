import * as React from 'react'
import { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Typography, Button, TextField, List, ListItem, ListItemText, Divider, BottomNavigation, BottomNavigationAction, IconButton, InputAdornment } from '@mui/material'
import { SwapHoriz } from '@mui/icons-material'

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
    const [workout, setWorkout] = useState<Workout[]>([]);
    const [value, setValue] = useState<number>(0)
    const [workoutName, setWorkoutName] = useState('');

    const handleWorkoutNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setWorkoutName(event.target.value);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearch(event.target.value)
    }

    const handleAddExercise = (exercise: string): void => {
        const nextIndex = Math.max(...workout.map((item) => item.index), -1) + 1;
        setWorkout([...workout, { name: exercise, index: nextIndex }]);
        console.log({ name: exercise, index: nextIndex })
        console.log(workout)

    }

    const handleRemoveExercise = (exerciseToRemove: string, indexToRemove: number): void => {
        setWorkout(workout.filter((exercise) => !(exercise.name === exerciseToRemove && exercise.index === indexToRemove))
            .map((exercise, index) => ({ ...exercise, index })));
        console.log(exerciseToRemove, indexToRemove)
    }

    const handleSaveWorkout = (): void => {
        // TODO: implement saving logic
        alert('Workout saved!')
    }

    const handleNavigationChange = (
        event: React.SyntheticEvent,
        newValue: number
    ): void => {
        setValue(newValue)
    }

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

            <div style={{ display: 'flex', overflowX: 'hidden', height: '80vh', zIndex: 0 }}>
                <div style={{ flexBasis: '50%', overflowY: 'auto', zIndex: 0, marginLeft: '5%', marginRight: '5%', maxWidth: '40.5%' }}>
                    <Typography style={{ marginLeft: '2%' }}>Find, Drag, and Drop Exercises</Typography>
                    <TextField
                        label="Search"
                        variant="outlined"
                        value={search}
                        onChange={handleSearchChange}
                        style={{ height: '5%', marginLeft: '2%', marginBottom: '2%', marginTop: '2%', width: 'calc(100% - 32px)' }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }} />
                    <List style={{ marginTop: '1%', marginBottom: '2%' }}>
                        {categories
                            .filter((category) =>
                                category.exercises.some((exercise) =>
                                    exercise.toLowerCase().includes(search.toLowerCase())
                                )
                            )
                            .map((category) => (
                                <ListItem key={category.name}>
                                    <ListItemText>
                                        <Typography variant="h6">{category.name}</Typography>
                                        <List>
                                            {category.exercises.map((exercise, index) => (
                                                <React.Fragment key={index}>
                                                    <ListItem key={exercise} button onClick={() => handleAddExercise(exercise)}>
                                                        <ListItemIcon>
                                                            <MenuIcon />
                                                        </ListItemIcon><ListItemText primary={`${exercise}`} />
                                                    </ListItem>
                                                    <Divider />
                                                </React.Fragment>
                                            ))}
                                        </List>
                                    </ListItemText>
                                </ListItem>
                            ))}
                    </List>

                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div>
                        <div style={{ width: '2px', backgroundColor: 'gray', position: 'absolute', top: '15%', bottom: 0, left: '50%' }}></div>
                        <SwapHoriz fontSize="large" style={{ fontSize: '5rem', position: 'absolute', top: '50%', left: '47.3%', fontWeight: 'bold', textShadow: '0 0 4px black' }} />
                    </div>
                </div>

                <div style={{ flexBasis: '50%', overflowY: 'auto', zIndex: 0, marginTop: '1.3%', marginLeft: '2%' }}>
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
                        {workout.map((exercise, index) => (
                            <React.Fragment key={(exercise.name, exercise.index)}>
                                <ListItem sx={{ padding: '0.6%', height: '1%', display: 'flex', alignItems: 'center' }}>
                                    <ListItemText
                                        primary={`${exercise.index + 1}:`}
                                        sx={{ flex: 'none' }}
                                    />
                                    <ListItemText
                                        primary={exercise.name}
                                        sx={{ flex: 1, textAlign: 'center' }}
                                    />
                                    <div style={{ marginLeft: 'auto' }}>
                                        <IconButton onClick={() => handleRemoveExercise(exercise.name, exercise.index)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </div>
                                </ListItem>
                                <Divider />
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
                <BottomNavigation
                    value={value}
                    onChange={handleNavigationChange}
                    showLabels
                    style={{ position: 'fixed', marginTop: '2%', display: 'flex', alignItems: 'center', justifyContent: 'center', bottom: 0, width: '100%', zIndex: 1 }}
                >
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
                    <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
                </BottomNavigation>
            </div>
        </div>
    )
}

export default NewWorkout
