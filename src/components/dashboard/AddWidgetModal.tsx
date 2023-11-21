import { Box, Button, IconButton, Modal, Typography, Grid, Card, CardActionArea } from "@mui/material";
import { Close } from '@mui/icons-material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useState } from "react";
import theme from "../../themes/theme";

function AddWidgetModal(props: { open: boolean; setOpen: any; }){
    const availableModals = ["Active Minutes", "Today's Macros", "Distance Travelled", "Heart Rate", "Steps"];
    const [index, setIndex] = useState(0);
    const [selectedModal, setSelectedModal] = useState("");

    const handleClose = () => {
        setSelectedModal("");
        props.setOpen(false);
    }

    const handleChevronClick = (i: number) => {
        const currentIndex = (i === 1) ? index + 4 : index - 4;
        setIndex(currentIndex);
    }

    const handleSelectModal = (modal: string) => {
        console.log(`clicked ${modal}`);
        setSelectedModal(modal);
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
    };

    return(
    <Modal
        open={props.open}
        onClose={handleClose}
        aria-labelledby="add-widget"
        aria-describedby="add-widget-modal"
    >
        <Box sx={style} justifyContent="center" width={700} height={500}>
            <Box position="absolute" display="flex" justifyContent="flex-end" right="10px" top="10px" padding="10px">
                <IconButton size="large" onClick={() => handleClose()}><Close/></IconButton>
            </Box>
            <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
                <Typography variant="h5"  sx={{ fontWeight: 'bold' }} >Add Widget</Typography>
                <Box display="flex" justifyContent="center" paddingTop={2}>
                    <IconButton onClick={() => handleChevronClick(-1)} disabled={index - 4 < 0}>
                        <ChevronLeft/>
                    </IconButton>
                    <Box padding={4} display="absolute" width={550} height={300}>    
                        <Grid container spacing={2}>
                            {availableModals.slice(index, index+4).map((val) => {return(
                            <Grid item xs={6}>
                                <Card variant="outlined"
                                        sx={{   bgcolor: (val === selectedModal) ? theme.palette.primary.main : "ButtonShadow",
                                                borderRadius: 4,
                                                boxShadow: 3,
                                                minHeight: 150,
                                                minWidth: 250,
                                                transition: "all .5s ease",
                                                }}>
                                    <CardActionArea sx={{ minHeight: 150, minWidth: 250}} onClick={() => {handleSelectModal(val)}}>
                                        <Box display="flex" justifyContent="center">
                                            <Typography variant="h5" color={(val === selectedModal) ? "white" : "black"}>{val}</Typography>
                                        </Box>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                            )})}
                        </Grid>
                    </Box>
                    <IconButton size="large" onClick={() => handleChevronClick(1)} disabled={index + 4 >= availableModals.length}>
                        <ChevronRight/>
                    </IconButton>
                </Box>
                <Box padding={4}>
                    <Button variant="contained">
                        Confirm
                    </Button>
                </Box>
            </Box>

        </Box>

    </Modal>)
}

export default AddWidgetModal;