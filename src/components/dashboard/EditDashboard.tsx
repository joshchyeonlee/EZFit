import { Box, Typography, Button, Card, Grid, IconButton } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";
import moment from "moment";
import { useLocation, useNavigate } from "react-router-dom";
import AvailableWidgets from "../../mockData/AvailableWidgets";
import AddWidgetModal from "./AddWidgetModal";

interface DashboardCardProps {
    topText: String;
    middleText: String;
    bottomText: String;
    onClick?: () => void;
    handleRemove?:() => void;
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
        }}
      >
        <Box display="flex" justifyContent="center" flexDirection={"column"} padding={2}>
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
                <Typography fontWeight={"bold"} padding={"5px"} color={"black"}>
                    {topText}
                </Typography>
                <IconButton sx={{transform:"scale(1.5)"}} color="primary" onClick={handleRemove}>
                    <DeleteIcon/>
                </IconButton>
            </Box>
            <Typography
                variant={"h4"}
                textAlign={"center"}
                padding={"35px"}
                color={"black"}
            >
                {middleText}
            </Typography>
            <Typography textAlign={"right"} padding={"10px"} color={"black"}>
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
    const [currentDate, setCurrentDate] = useState(moment().format("LL"));
    const [index, setIndex] = useState(0);
    const [isAddWidgetModalOpen, setIsAddWidgetModalOpen] = useState(false);

    const handleRemove = (index: number) => {
        const newAddedModals = [...addedModals];
        newAddedModals.splice(index, 1);
        setAddedModals(newAddedModals);
    }

    const handleAddWidget = () => {
        setIsAddWidgetModalOpen(true);
    }

    const handleSaveChanges = () => {
        navigate("/Dashboard", {state: {addedModals: addedModals}});
    }

    const getMiddleText = (modal: string) => {
        const index = AvailableWidgets.findIndex(x => x.topText = modal);
        const modalInfo = AvailableWidgets[index];
    
        return modalInfo.middleText;
      }
    
      const getBottomText = (modal: string) => {
        const index = AvailableWidgets.findIndex(x => x.topText = modal);
        const modalInfo = AvailableWidgets[index];
    
        return modalInfo.bottomText;
      }

    return(
        <div>
            <AddWidgetModal addedModals={addedModals} open={isAddWidgetModalOpen} setOpen={setIsAddWidgetModalOpen}/>
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <Box textAlign={"center"} padding={"20px"}>
                    <Typography variant={"h5"} padding={"10px"}>
                    Edit Dashboard
                    </Typography>
                    <Typography variant={"h5"} fontWeight={"bold"} padding={"10px"}>
                    {currentDate}
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" sx={{width:"70%"}} flexDirection={window.innerWidth < 576 ? "column" : "row"}>
                    <Box textAlign={"center"} width={"25%"} padding={"0px 8px"}>
                        <Button variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ minHeight: "43px" }}
                                onClick={handleAddWidget}>
                            Add Widget</Button>
                    </Box>
                    <Box textAlign={"center"} width={"25%"} padding={"0px 8px"}>
                        <Button variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ minHeight: "43px" }}
                                onClick={handleSaveChanges}>
                            Save Changes</Button>
                    </Box>
                </Box>
                <Box width={"62%"} sx={{ mt: 4 }}>
                    <Grid container spacing={{ xs: 1, md: 2 }} columns={{ md: 4, xs: 2 }}>
                        {addedModals.slice(index, index + 4).map((data, index) => {
                            return (
                            <Grid item xs={2} md={2} padding={"10px"}>
                                <DashboardCard
                                    topText={data}
                                    middleText={getMiddleText(data)}
                                    bottomText={getBottomText(data)}
                                    handleRemove={() => handleRemove(index)}
                                />
                            </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default EditDashboard;