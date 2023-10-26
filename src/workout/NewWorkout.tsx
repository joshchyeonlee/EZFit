import * as React from 'react'
import { useState } from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import { Box, Typography } from '@mui/material'


const categories: { name: string; exercises: string[] }[] = [
    { name: 'Abs', exercises: ['Crunches', 'Planks', 'Sit-ups'] },
    { name: 'Back', exercises: ['Pull-ups', 'Rows', 'Deadlifts'] },
    { name: 'Legs', exercises: ['Squats', 'Lunges', 'Leg press'] },
    { name: 'Chest', exercises: ['Push-ups', 'Bench press', 'Flyes'] },
];

const NewWorkout = (): JSX.Element => {
    const [search, setSearch] = useState<string>('')
    const [workout, setWorkout] = useState<string[]>([])
    const [value, setValue] = useState<number>(0)

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setSearch(event.target.value)
    }

    const handleAddExercise = (exercise: string): void => {
        setWorkout([...workout, exercise])
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
                <div style={{ marginTop: '2%', marginLeft: '40%', height: '5vh' }}>
                    <Typography style={{ color: 'white' }} >New Workout</Typography>
                </div>
            </Box>

            <div style={{ display: 'flex', overflowX: 'hidden', height: '80vh', zIndex: 0 }}>
                <div style={{ flexBasis: '50%', overflowY: 'auto', zIndex: 0, marginLeft: '5%' }}>
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
                                                <React.Fragment key={exercise}>
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
                <div style={{ flexBasis: '50%', overflowY: 'auto', zIndex: 0, marginTop: '2%' }}>
                    <Box
                        sx={{
                            bgcolor: '#2B2D42',
                            border: '2px solid #2B2D42',
                            padding: 2,
                            marginLeft: '30%',
                            marginRight: '5%',
                            width: '30%',
                            display: 'flex',
                            alignContent: 'center',
                            alignItems: 'center',
                            height: '5%'
                        }}>
                        <div style={{
                            marginTop: '2%',
                            display: 'flex',
                            marginLeft: '27%',
                            alignContent: 'center',
                            alignItems: 'center',
                            height: '5vh'
                        }}>
                            <Typography style={{ color: 'white' }} >Your Workout</Typography>
                        </div>
                    </Box>
                    <List>
                        {workout.map((exercise, index) => (
                            <React.Fragment key={exercise}>
                                <ListItem>
                                    <ListItemText
                                        primary={`${index + 1}: ${exercise}`} // add index as a prefix
                                    />
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
