import { Box, Typography, Button, Card, Grid, IconButton, CardContent, CardActionArea, Icon } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import moment from "moment";
import { useLocation, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import AvailableWidgets from "../../mockData/AvailableWidgets";
import AddWidgetModal from "./AddWidgetModal";
import modalData from "../../mockData/Steps";

interface DashboardCardProps {
    topText: String;
    middleText: String;
    bottomText: String;
    onClick?: () => void;
    handleRemove?:() => void;
}


const MobileDashboardCard = ({
    topText,
    middleText,
    bottomText,
    handleRemove,
  }: DashboardCardProps) => {
    return(
        <Card
            variant="outlined"
            sx={{
                borderRadius: 4,
                boxShadow: 3,
            }}>
            <Box padding={2} display="flex" justifyContent="space-between" alignItems="center">
                <Box>
                    <Typography fontWeight={"bold"}>{topText}</Typography>
                    <Typography>{middleText}</Typography>
                </Box>
                <IconButton color="primary" onClick={handleRemove}>
                    <DeleteIcon/>
                </IconButton>
            </Box>
        </Card>
    )
}
  


const DashboardCard = ({
    topText,
    middleText,
    bottomText,
    handleRemove,
  }: DashboardCardProps) => {
    return (
      <Card
        variant="outlined"
        sx={{
          borderRadius: 4,
          boxShadow: 3,
          height:"100%",
        }}
      >
        <Box position="absolute" top={35} right={25}>
            <IconButton sx={{transform:"scale(1.5)"}} color="primary" onClick={handleRemove}>
                <DeleteIcon/>
            </IconButton>
        </Box>
        <Box display="flex" justifyContent="center" flexDirection={"column"} padding={2}>
            {/* <Box display="flex" flexDirection="row" justifyContent="space-between"> */}
            <Typography fontWeight={"bold"} padding={"5px"} color={"black"}>
                {topText}
            </Typography>
            {/* </Box> */}
            <Typography
                variant={"h4"}
                textAlign={"center"}
                padding={(window.innerWidth < 576) ? "5px" : "35px"}
                color={"black"}
            >
                {middleText}
            </Typography>
            <Typography textAlign={"right"} padding={(window.innerWidth < 576) ? "2px" : "10px"}  color={"black"}>
                {bottomText}
            </Typography>
        </Box>
      </Card>
    );
};


const EditDashboard = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [addedModals, setAddedModals] = useState<string[]>(location.state.addedModals);
    const [index, setIndex] = useState(0);
    const [isAddWidgetModalOpen, setIsAddWidgetModalOpen] = useState(false);
    const [addedModalCount, setAddedModalCount] = useState(location.state.addedModals.length + 1);

    const handleRemove = (index: number) => {
        const newAddedModals = [...addedModals];
        newAddedModals.splice(index, 1);
        setAddedModals(newAddedModals);
        setAddedModalCount(addedModalCount - 1);
    }

    const handleAddWidget = () => {
        setIsAddWidgetModalOpen(true);
    }

    const handleSaveChanges = () => {
        navigate("/Dashboard", {state: {addedModals: addedModals}});
    }

    const getMiddleText = (modal: string) => {
        var index;
    
        if(modal === "Steps") index = 0;
        else if (modal === "Calories Burned") index = 1;
        else if (modal === "Active Minutes") index = 2;
        else if (modal === "Distance Travelled") index = 3;
        else { //recommended exercise
          const index = AvailableWidgets.findIndex(x => x.topText === modal);
          const modalInfo = AvailableWidgets[index];
      
          return modalInfo.middleText;
        }
    
        return modalData[index][modalData[index].length - 1].toString();
    }

    const getBottomText = (modal: string) => {
        var index;
    
        if(modal === "Steps") index = 0;
        else if (modal === "Calories Burned") index = 1;
        else if (modal === "Active Minutes") index = 2;
        else if (modal === "Distance Travelled") index = 3;
        else { //recommended exercise
          const index = AvailableWidgets.findIndex(x => x.topText === modal);
          const modalInfo = AvailableWidgets[index];
          return modalInfo.bottomText;
        }
    
        const diff = modalData[index][modalData[index].length - 1] - modalData[index][modalData[index].length - 2];
        if(diff > 0) return `+${diff.toString()} from yesterday`
        else return `${diff.toString()} from yesterday`
    }

    const handleChevronClick = (i: number) => {
        const nextIndex = index + (i * 4);
        setIndex(nextIndex);
    }

    const handleAddedModals = (count: number) => {
        if(addedModalCount === 5) setAddedModalCount(-1);
        if(addedModalCount === 5 && index === 0){
            setIndex(index + 4);
        }
        if(count === 4 || addedModals.length === 5) return <></>

        return(
            <Grid item xs={2} md={2} padding="10px" sx={{height:"50%"}}>
                <Card
                    variant="outlined"
                    sx={{
                    borderRadius: 4,
                    boxShadow: 3,
                    height:"100%"
                    }}>
                    <CardActionArea sx={{height:"100%"}} onClick={() => handleAddWidget()}>
                    <CardContent>
                        <Box display="flex" justifyContent="center">
                            <AddIcon/>
                        </Box>
                    </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        )
    }
    return(
        <div>
            <AddWidgetModal addedModals={addedModals} open={isAddWidgetModalOpen} setOpen={setIsAddWidgetModalOpen} modalCount={addedModalCount} setModalCount={setAddedModalCount}/>
                {window.innerWidth < 570 ?
                <Box display="flex" justifyContent="center" flexDirection="column">
                    <Box display="flex" justifyContent="center" textAlign="center" paddingTop={"20px"}>
                        <Typography variant={"h5"} fontWeight={"bold"} paddingTop={"10px"}>
                            Edit Dashboard
                        </Typography>
                    </Box>
                    <Box display="flex" justifyContent="center" padding={4}>
                        <Box sx={{width:"100%", height:"100%"}} display="flex" flexDirection="column" justifyContent="center">
                            <Grid container spacing={{xs: 1}}>
                                {addedModals.map((data, index) => {
                                    return(
                                        <Grid item sx={{width:"100%"}}>
                                            <MobileDashboardCard
                                                topText={data}
                                                middleText={getMiddleText(data)}
                                                bottomText={getBottomText(data)}
                                                handleRemove={() => handleRemove(index)}
                                            />
                                        </Grid>
                                    )
                                })}
                                {addedModals.length < 5 ? 
                                    <Grid item sx={{width:"100%"}}>
                                        <Box display="flex" justifyContent="center" padding={2}>
                                            <IconButton sx={{height:"100%"}} onClick={() => handleAddWidget()}>
                                                <AddIcon/>
                                            </IconButton>
                                        </Box>
                                    </Grid>
                                :<div></div>
                                }
                            </Grid>
                        </Box>
                    </Box>
                    <Box position="absolute" bottom={70} sx={{width:"100%"}} display="flex" justifyContent="center">
                        <Button variant="contained" color="primary" fullWidth
                            sx={{ minHeight: "43px", width:"50%" }}
                            onClick={handleSaveChanges}
                        >
                            Save Changes
                        </Button>
                    </Box>
                </Box>
                :
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <Box textAlign={"center"} paddingTop={"20px"}>
                    <Typography variant={"h5"} fontWeight={"bold"} paddingTop={"10px"}>
                    Edit Dashboard
                    </Typography>
                </Box>
                <Box sx={{ mt: 4, height:"60vh", width:  "62%" }} display="flex" flexDirection="row" justifyContent="center">

                <Box sx={{width:"100%", height:"100%"}} display="flex" flexDirection="row" justifyContent="center">
                    <IconButton onClick={() => handleChevronClick(-1)} disabled={index < 4}>
                        <ChevronLeft/>
                    </IconButton>
                    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ md: 4, xs: 2 }}>
                        {addedModals.slice(index, index + 4).map((data, index) => {
                            return (
                                <Grid item xs={2} md={2} padding="10px" sx={{height:"50%"}} position="relative">
                                <DashboardCard
                                    topText={data}
                                    middleText={getMiddleText(data)}
                                    bottomText={getBottomText(data)}
                                    handleRemove={() => handleRemove(index)}
                                    />
                            </Grid>
                            );
                        })}
                        {handleAddedModals(addedModals.slice(index, index + 4).length)}
                    </Grid>
                    <IconButton onClick={() => handleChevronClick(1)} disabled={index > addedModals.length - 4}>
                        <ChevronRight/>
                    </IconButton>
                </Box>
                </Box>  
                <Box sx={{width:"15%"}} paddingTop={4}>
                    <Button variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ minHeight: "43px" }}
                            onClick={handleSaveChanges}>
                        Save Changes</Button>
                </Box>
            </Box>
        }
    </div>
    )
}

export default EditDashboard;