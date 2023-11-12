import { ArrowBack } from "@mui/icons-material";
import { Box, Button, IconButton, Typography} from "@mui/material";
import PersonalInformationForm from "./PersonalInformationForm";

import { useNavigate } from "react-router";
import { useState } from "react";
import DeleteAccountPopUp from "./DeleteAccountPopUp";

function PersonalInformationPage()
{    
    const navigate = useNavigate();

    const [deleteAccountModalOpen, setDeleteAccountModalOpen] = useState(false);

    const onAccountDeleted = () =>
    {
        navigate("/");
    }

    return (
        <Box padding={5}>

            <Box textAlign="left" justifyContent="center">
                <IconButton>
                    <ArrowBack fontSize="large" color="primary"></ArrowBack>
                </IconButton>
            </Box>

            <Box paddingBottom={6}>
                <Typography variant="h5" textAlign="center" fontWeight="800">
                    Personal Information
                </Typography>
            </Box>

            <Box>
                <PersonalInformationForm></PersonalInformationForm>
            </Box>

            <br/>
            <br/>
            <br/>

            <Box textAlign="center" justifyContent="center" marginTop={3} marginBottom={3}>
                <Button variant="contained" size='large' sx={{width:"50%"}} color="primary" disableElevation>
                    <Typography textAlign="center" fontWeight="300" color="white">
                        Change Password
                    </Typography>
                </Button>
            </Box>

            <Box textAlign="center" justifyContent="center" marginTop={3} marginBottom={3}>
                <Button variant="contained" size='large' sx={{width:"50%"}} color="error" disableElevation onClick={() =>setDeleteAccountModalOpen(true)}>
                    <Typography textAlign="center" fontWeight="300" color="white">
                        Delete Account
                    </Typography>
                </Button>
            </Box>

            <DeleteAccountPopUp open={deleteAccountModalOpen} setOpen={setDeleteAccountModalOpen} onAccountDeleted={onAccountDeleted}></DeleteAccountPopUp>

        </Box>
    )
}
  
export default PersonalInformationPage;
  