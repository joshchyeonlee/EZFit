import { ArrowBack } from "@mui/icons-material";
import { Box, Button, Select, Typography, MenuItem, FormControl, InputLabel, SelectChangeEvent, IconButton, Icon } from "@mui/material";
import { useState } from "react";

function Preferences()
{
    const [preferences, setPreferences] = useState({
        distanceUOM : 1,
        weightUOM: 1,
    });

    const handleChanges = (e : SelectChangeEvent<number>) => {
        setPreferences((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    };

    return (
        <Box padding={5}>
            <Box textAlign="left" justifyContent="center">
                <IconButton>
                    <ArrowBack></ArrowBack>
                </IconButton>
            </Box>

            <Box paddingBottom={4}>
                <Typography variant="h5" textAlign="center" fontWeight="800">
                    Preferences
                </Typography>
            </Box>

            <Box textAlign="center" justifyContent="center" marginLeft="20%" marginRight="20%">
                <Box textAlign="center" justifyContent="center" padding={2}>
                    <Box paddingBottom={2}>
                        <Typography variant="h6" textAlign="left" fontWeight="800">
                            Units of Measurement
                        </Typography>
                    </Box>

                    <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center "}}>
                        <Box>
                            <Typography textAlign="right" fontWeight="600" width={100} paddingTop={2} paddingRight={4}>
                                Distance
                            </Typography>
                        </Box>
                        <Box width="40%" minWidth={200}>
                            <FormControl fullWidth>
                                <Select name="distanceUOM" value={preferences.distanceUOM} sx={{textAlign: "center"}} onChange={ handleChanges }>
                                    <MenuItem value={1}>Kilometers</MenuItem>
                                    <MenuItem value={2}>Miles</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                    <br/>
                    <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center "}}>
                        <Box>
                            <Typography textAlign="right" fontWeight="600" width={100} paddingTop={2} paddingRight={4}>
                                Weight
                            </Typography>
                        </Box>
                        <Box width="40%" minWidth={200}>
                            <FormControl fullWidth>
                                <Select name="weightUOM" value={preferences.weightUOM} sx={{textAlign: "center"}} onChange={ handleChanges }>
                                    <MenuItem value={1}>Pounds</MenuItem>
                                    <MenuItem value={2}>Kilograms</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <br/>
            <br/>
            <br/>
            <Box textAlign="center" justifyContent="center">
                <Button variant="contained" size='large' sx={{width:"50%"}} color="primary" disableElevation>
                    <Typography textAlign="center" fontWeight="300" color="white">
                        Save Changes
                    </Typography>
                </Button>
            </Box>

        </Box>
    )
}
  
export default Preferences;
  