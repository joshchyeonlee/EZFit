import { Box, Button, IconButton, Modal, Typography, Grid, Card, CardActionArea } from "@mui/material";
import { Close } from '@mui/icons-material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useEffect, useState } from "react";
import theme from "../../themes/theme";
import AvailableWidgets from "../../mockData/AvailableWidgets";

function AddWidgetModal(props: { open: boolean; setOpen: any; addedModals: string[] }){
    // console.log(AvailableWidgets)
    const [availableModals, setAvailableModals] = useState<string[]>([]);
    const [index, setIndex] = useState(0);
    const [selectedModal, setSelectedModal] = useState("");
    const [isAnimating, setIsAnimating] = useState(false);
    const [containerW, setContainerW] = useState((window.innerWidth < 500) ? 200 : 550);
    const [containerH, setContainerH] = useState(300);
    const [itemW, setItemW] = useState((window.innerWidth < 500) ? 100 : 250);
    const [itemH, setItemH] = useState((window.innerWidth < 500) ? 70 : 150);

    const handleClose = () => {
        setSelectedModal("");
        props.setOpen(false);
        setIndex(0);
    }

    const handleChevronClick = (i: number) => {
        const currentIndex = (i === 1) ? index + 4 : index - 4;
        setIndex(currentIndex);
        setIsAnimating(true);

        setTimeout(() => {
            setIsAnimating(false);
        }, 150);
    }

    const handleSelectModal = (modal: string) => {
        (selectedModal === modal) ? setSelectedModal("") : setSelectedModal(modal);
    }

    const handleConfirmClick = () => {
        //need to handle selected modal here
        handleClose();
    }

    const handleUpdateWindow = () => {
        setContainerW((window.innerWidth < 500) ? 200 : 550);
        setItemH((window.innerWidth < 500) ? 70 : 150);
        setItemW((window.innerWidth < 500) ? 100 : 250);
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
        maxWidth:"70%"
    };

    const handleAvailableModals = () => {
        const arr = [];
        for(var i = 0; i < AvailableWidgets.length; i++) {
            arr.push(AvailableWidgets[i].topText);
        }
        console.log(AvailableWidgets[0]);
        console.log(AvailableWidgets[1]);
        console.log(AvailableWidgets);
        const filtered = arr.filter(x => props.addedModals.indexOf(x) >= 0);
        // console.log(filtered);
        // console.log(props.addedModals)
        // const modalsNotAdded = AvailableWidgets.filter((x => x.topText)})

        // console.log(modalsNotAdded);
    }

    useEffect(() => {
        window.addEventListener("resize", handleUpdateWindow);
        handleUpdateWindow();
        handleAvailableModals();
    })

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
                    <IconButton onClick={() => handleChevronClick(-1)} disabled={index - 4 < 0}>
                        <ChevronLeft/>
                    </IconButton>
                    <Box
                            padding={2}
                            display="absolute"
                            width={containerW}
                            height={300}
                            sx = {{
                                opacity: isAnimating ? 0 : 1,
                                transition: 'opacity .15s ease-in-out',
                            }}>    
                        <Grid container spacing={{xs: 1, md: 2}} columns={{md: 4, xs: 2}}>
                            {availableModals.slice(index, index+4).map((val) => {return(
                            <Grid item xs={2} md={2}>
                                <Card variant="outlined"
                                        sx={{   bgcolor: (val === selectedModal) ? theme.palette.primary.main : "ButtonShadow",
                                                borderRadius: 4,
                                                boxShadow: 3,
                                                transition: "bgcolor .15s ease opacity .15s ease-in-out",
                                                opacity: isAnimating ? 0 : 1,
                                                }}>
                                    <CardActionArea sx={{ minHeight: itemH, minWidth: itemW}} onClick={() => {handleSelectModal(val)}}>
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
                    <Button size="large" disabled={selectedModal===""} variant="contained" onClick={() => handleConfirmClick()}>
                        Confirm
                    </Button>
                </Box>
            </Box>

        </Box>

    </Modal>)
}

export default AddWidgetModal;