import { Box, Button, IconButton, Modal, Typography, Grid, Card, CardActionArea } from "@mui/material";
import { Close } from '@mui/icons-material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

function AddWidgetModal(props: { open: boolean; setOpen: any; }){
    const availableModals = ["Active Minutes", "Today's Macros", "Distance Travelled", "Heart Rate"];

    const handleClose = () => {
        props.setOpen(false);
    }

    const handleChevronClick = (i: number) => {
        console.log("hehe");
    }

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'primaryBkg',
        border: '2px solid #000',
        borderRadius: "50px",
        boxShadow: 24,
        p: 4,
        display: 'flex',
    };

    return(
    <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="add-widget"
        aria-describedby="add-widget-modal"
    >
        <Box sx={style} justifyContent="center">
            <Box position="absolute" display="flex" justifyContent="flex-end" right="10px" top="10px" padding="10px">
                <IconButton size="large" onClick={() => handleClose()}><Close/></IconButton>
            </Box>
            <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                <Typography variant="h5"  sx={{ fontWeight: 'bold' }} >Add Widget</Typography>
                <Box display="flex" justifyContent="center" paddingTop={2}>
                    <IconButton onClick={() => handleChevronClick(-1)} disabled>
                        <ChevronLeft/>
                    </IconButton>
                    <Box padding={4}>    
                        <Grid container spacing={2}>
                            {availableModals.map((val) => {return(
                            <Grid item xs={6}>
                                <Card variant="outlined" sx={{ bgcolor: "ButtonShadow", borderRadius: 4, boxShadow: 3, minHeight: 150, minWidth: 250 }}>
                                    <CardActionArea sx={{ minHeight: 150, minWidth: 250}}>
                                        <Box display="flex" justifyContent="center">
                                            <Typography variant="h5">{val}</Typography>
                                        </Box>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            )})}
                        </Grid>
                    </Box>
                    <IconButton size="large" onClick={() => handleChevronClick(-1)} disabled>
                        <ChevronRight/>
                    </IconButton>
                </Box>
                <Box padding={2}>
                    <Button variant="contained">
                        Confirm
                    </Button>
                </Box>
            </Box>

        </Box>

    </Modal>)
}

export default AddWidgetModal;