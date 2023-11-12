import { Close } from "@mui/icons-material";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";

function DeleteAccountPopUp(props : {open : boolean, setOpen : any, onAccountDeleted : any}) {

    const handleClose = (accountDeleted : boolean) =>
    {
        if (accountDeleted)
        {
            props.onAccountDeleted();
        }

        props.setOpen(false);
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
                <Box id="Close" position="absolute" display="flex" justifyContent="flex-end" right="10px" top="10px" padding="10px">
                    <IconButton onClick={() => handleClose(false)}><Close/></IconButton>
                </Box>
                <Box textAlign="center" justifyContent="center" width="90%">
                    <Box id="Title" textAlign="center" justifyContent="center" paddingBottom={4}>
                        <Typography id="Title" variant="h5" sx={{ fontWeight: 'bold'}}>
                            Delete Account
                        </Typography>
                    </Box>
                    <Box id="Content" textAlign="center" justifyContent="center" height="50%">
                        <Box id="Content" textAlign="center" justifyContent="start" paddingTop="15%" paddingBottom="20%">
                            <Typography sx={{fontSize:"18px"}}>
                                Deleting your account is irreversible, are you sure you want to proceed?
                            </Typography>
                        </Box>
                    </Box>
                    <Button fullWidth size="large" variant="contained" color="error" onClick={ () => {handleClose(true)} } sx={{marginBottom:2}} disableElevation>
                        <Typography color="white">
                            Delete Account
                        </Typography>
                    </Button>
                    <Button fullWidth size="large" variant="contained" color="secondary" onClick={ () => {handleClose(false)} } sx={{marginBottom:2, background:"grey"}} disableElevation>
                        <Typography color="white">
                            Cancel
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}
  
export default DeleteAccountPopUp;