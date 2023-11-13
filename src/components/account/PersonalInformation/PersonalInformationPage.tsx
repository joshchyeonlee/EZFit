import { ArrowBack } from "@mui/icons-material";
import { Box, Button, IconButton, Typography} from "@mui/material";
import PersonalInformationForm from "./PersonalInformationForm";

function PersonalInformationPage()
{
    return (
        <Box padding={5}>

            <Box textAlign="left" justifyContent="center">
                <IconButton>
                    <ArrowBack fontSize="large" color="primary"></ArrowBack>
                </IconButton>
            </Box>

            <Box paddingBottom={6}>
                <Typography variant="h5" textAlign="center" fontWeight="bold">
                    Personal Information
                </Typography>
            </Box>

            <Box paddingBottom={12}>
                <PersonalInformationForm></PersonalInformationForm>
            </Box>

            <Box textAlign="center" justifyContent="center" marginTop={3} marginBottom={3}>
                <Button variant="contained" size='large' sx={{width:"50%"}} color="primary" disableElevation>
                    <Typography textAlign="center" fontWeight="300" color="white">
                        Change Password
                    </Typography>
                </Button>
            </Box>

            <Box textAlign="center" justifyContent="center" marginTop={4} marginBottom={3}>
                <Button variant="contained" size='large' sx={{width:"50%"}} color="error" disableElevation>
                    <Typography textAlign="center" fontWeight="300" color="white">
                        Delete Account
                    </Typography>
                </Button>
            </Box>

        </Box>
    )
}
  
export default PersonalInformationPage;
  