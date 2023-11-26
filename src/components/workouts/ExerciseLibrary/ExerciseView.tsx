import * as React from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Exercise } from "./ExerciseLibrary.types";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const ExerciseView = (props: { exercise: Exercise }) => {

    const navigate = useNavigate();

    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                bgcolor: 'primary',
                zIndex: 1000,
                padding: 2,
            }}
        >


            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Button variant="text" color="primary" startIcon={<ArrowBackIcon />} onClick={() => navigate(`/Exercise-Library`)}>
                    Back
                </Button>
                <Typography variant="h4" fontWeight="bold" sx={{ marginLeft: '-5%' }}>
                    {props.exercise.name}
                </Typography>
                <div></div>
            </Box>


            <div style={{ display: 'flex', overflowX: 'hidden', height: '80vh', zIndex: 0 }}>
                <div style={{ flexBasis: '50%', overflowY: 'auto', zIndex: 0, marginLeft: '5%', marginRight: '5%', maxWidth: '40.5%' }}>

                    <Grid item xs={6} style={{ marginTop: '15%', marginLeft: '15%', marginBottom: '10%' }}>
                        <Typography sx={{ textAlign: 'center' }} variant="h6">Muscles Targeted</Typography>
                        {props.exercise.muscles.map((muscle, index) => (
                            <Typography sx={{ textAlign: 'center' }} key={index}>{muscle}</Typography>
                        ))}
                    </Grid>
                    <Grid item xs={6} style={{ marginLeft: '15%', marginBottom: '10%' }}>
                        <Typography sx={{ textAlign: 'center' }} variant="h6">Equipment</Typography>
                        <Typography sx={{ textAlign: 'center' }}>{props.exercise.equipment}</Typography>
                    </Grid>

                    <Grid item xs={6} style={{ marginLeft: '15%', marginBottom: '10%' }}>
                        <Typography sx={{ textAlign: 'center' }} variant="h6">Execution</Typography>
                        {props.exercise.execution.map((step, index) => (
                            <Typography sx={{ textAlign: 'center' }} key={index}>{step}</Typography>
                        ))}
                    </Grid>

                    <Grid item xs={6} style={{ marginLeft: '15%', marginBottom: '10%' }}>
                        <Typography sx={{ textAlign: 'center' }} variant="h6">Rest</Typography>
                        <Typography sx={{ textAlign: 'center' }}>{props.exercise.rest}</Typography>
                    </Grid>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '2px', backgroundColor: 'gray', position: 'absolute', top: '15%', bottom: '15%', left: '50%' }}></div> {/* Vertical Divider */}
                </div>

                <div style={{ flexBasis: '50%', overflowY: 'auto', zIndex: 0 }}>
                    <Grid item xs={6} style={{ marginLeft: '10%', marginBottom: '5%' }}>
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
                                src={props.exercise.gif}
                                alt={props.exercise.name}
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
                        marginTop: '3%',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <div style={{
                            textAlign: 'center',
                            overflowY: 'auto',
                            maxHeight: '200px',
                            flexGrow: 1,
                        }}>
                            <Typography>{props.exercise.instruction}</Typography>
                        </div>
                    </Grid>
                </div>
            </div>
        </Box>
    );
};

export default ExerciseView;