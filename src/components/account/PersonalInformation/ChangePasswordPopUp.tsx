import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";

function ChangePasswordPopUp(props : {open : boolean, setOpen : any}) {

    const [currentPassword, setCurrentPassword] = useState("password");
    
    const [currentPasswordInput, setCurrentPasswordInput] = useState("");

    const handleCurrentPasswordInput = (e : any) =>
    {
        setCurrentPasswordInput(e.target.value);
    }

    const IsCurrentPassword = () =>
    {
        return currentPasswordInput === currentPassword;
    }

    const [newPassword, setNewPassword] = useState("");

    const handleChangeNewPassword = (e : any) =>
    {
        setNewPassword(e.target.value);
    }

    const [validationError, setValidationError] = useState(false);

    const onClickSaveChanges = () =>
    {
        if (validatePasswordChange())
        {
            setCurrentPassword(newPassword);

            handleClose();
        }
        else
        {
            setValidationError(true);
        }
    }

    const validatePasswordChange = () =>
    {
        return currentPasswordInput === currentPassword && newPassword !== "";
    }

    const clearInputs = () =>
    {
        setCurrentPasswordInput("");
        setNewPassword("");
    }
    
    const handleClose = () =>
    {
        setValidationError(false);
        props.setOpen(false);
        clearInputs();
    }

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'primaryBkg',
        borderRadius: "20px",
        boxShadow: 24,
        padding: 4,
        display: 'flex',
        width: "50%",
        height: "60%",
    };

    return (
        <Modal open={props.open}>
             <Box sx={style} justifyContent="center">
                <Box textAlign="center" justifyContent="center" width="90%">
                    <Box id="Title" textAlign="center" justifyContent="center" paddingBottom={4}>
                        <Typography id="Title" variant="h5" sx={{ fontWeight: 'bold'}}>
                            Change Password
                        </Typography>
                    </Box>
                        <Box id="Content" textAlign="center" justifyContent="center" height="60%">
                            <Box textAlign="center" justifyContent="start" paddingTop="8%" paddingBottom="20%">
                                <Box paddingBottom={2}>
                                    <TextField fullWidth label="Current Password" value={currentPasswordInput} onInput={handleCurrentPasswordInput} required error={ (currentPasswordInput !== "" || validationError) && !IsCurrentPassword() }>
                                    </TextField>
                                </Box>
                                <Box paddingBottom={2}>
                                    <TextField fullWidth value={newPassword} onInput={handleChangeNewPassword} label="New Password" required error={(newPassword === "" && validationError)}>
                                    </TextField>
                                </Box>
                            </Box>
                        </Box>
                    <Button fullWidth size="large" variant="contained" color="primary" onClick={ () => {onClickSaveChanges()} } sx={{marginBottom:2}} disableElevation>
                        <Typography color="white">
                            Save Changes
                        </Typography>
                    </Button>
                    <Button fullWidth size="large" variant="contained" color="secondary" onClick={ () => {handleClose()} } sx={{marginBottom:2}} disableElevation>
                        <Typography color="white">
                            Cancel
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}
  
export default ChangePasswordPopUp;