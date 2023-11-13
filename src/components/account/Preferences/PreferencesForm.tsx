import { Box, Typography } from "@mui/material";
import UnitsOfMeasurementForm from "./UnitsOfMeasurementForm";

function PreferencesForm()
{
    return (
        <Box>

            <Box paddingBottom={4}>
                <Typography variant="h5" textAlign="center" fontWeight="800">
                    Preferences
                </Typography>
            </Box>

            <Box textAlign="center" justifyContent="center" marginLeft="20%" marginRight="20%" paddingBottom={12}>
                <Box textAlign="center" justifyContent="center" padding={2}>
                    <UnitsOfMeasurementForm></UnitsOfMeasurementForm>
                </Box>
            </Box>

            {/* <Box textAlign="center" justifyContent="center">
                <Button variant="contained" size='large' sx={{width:"50%"}} color="primary" disableElevation>
                    <Typography textAlign="center" fontWeight="300" color="white">
                        Save Changes
                    </Typography>
                </Button>
            </Box> */}

        </Box>
    )
}
  
export default PreferencesForm;
  