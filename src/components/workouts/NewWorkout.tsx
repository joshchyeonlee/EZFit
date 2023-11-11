import * as React from 'react'
import { useState } from 'react'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Typography, Button, TextField, List, ListItem, ListItemText, Divider, BottomNavigation, BottomNavigationAction, IconButton } from '@mui/material'
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
                    bgcolor: '#2B2D42',
                    border: '2px solid #2B2D42',
                    padding: 2,
                    marginLeft: '20%',
                    marginRight: '20%'
                }}>
                <Typography style={{ textAlign: "center", color: 'white' }} >New Workout</Typography>
            </Box>

            <div style={{ display: 'flex', overflowX: 'hidden', height: '80vh', zIndex: 0 }}>
                <div style={{ flexBasis: '50%', overflowY: 'auto', zIndex: 0, marginLeft: '5%', marginRight: '5%', maxWidth: '40.5%' }}>
                    <TextField
                        label="Search"
                        variant="outlined"
                        value={search}
                        onChange={handleSearchChange}
                        style={{ height: '5%', margin: '2%', marginTop: '5%', width: 'calc(100% - 32px)' }}
                    />
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
                                                        <ListItemText primary={`${exercise}`} />
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
                        <div style={{ width: '2px', backgroundColor: 'gray', position: 'absolute', top: '15%', bottom: 0, left: '50%' }}></div> {/* Vertical Divider */}
                        <SwapHoriz fontSize="large" color="action" style={{ fontSize: '5rem', position: 'absolute', top: '50%', left: '47.3%' }} />
                    </div>
                </div>

                <div style={{ flexBasis: '50%', overflowY: 'auto', zIndex: 0, marginTop: '1.3%', marginLeft: '2%' }}>
                    <Box
                        sx={{
                            bgcolor: '#2B2D42',
                            border: '2px solid #2B2D42',
                            padding: 2,
                            marginLeft: '30%',
                            width: '25%',
                            display: 'flex',
                            alignContent: 'center',
                            alignItems: 'center',
                            height: '5%',
                            paddingLeft: '10%'
                        }}>
                        <Typography style={{ textAlign: 'center', color: 'white' }} >Your Workout</Typography>
                    </Box>
                    <List style={{ marginTop: '6.2%' }}>
                        {workout.map((exercise, index) => (
                            <React.Fragment key={(exercise.name, exercise.index)}>
                                <ListItem sx={{ padding: '0.6%', height: '1%' }}>
                                    <ListItemText
                                        primary={`${exercise.index + 1}: ${exercise.name}`} // add index as a prefix
                                    />
                                    <IconButton onClick={() => handleRemoveExercise(exercise.name, exercise.index)}>
                                        <DeleteIcon style={{ marginLeft: 'auto' }} />
                                    </IconButton>
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
                            left: '70%',
                            transform: 'translateX(-50%)',
                            zIndex: 1
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
