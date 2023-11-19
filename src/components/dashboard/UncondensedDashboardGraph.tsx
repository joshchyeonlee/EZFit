import { Button, Box, IconButton, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import sevenDaysArray from "../../mockData/Dates";

function UncondensedDashboardGrid(props: { steps: number[]; handleSetDate: any; currentIndex: number; setCurrentIndex: any; handleChevronClick: any; setStep: any; }){
    const handleGridClick = (i: number) => {
        console.log(`handleGridClick i: ${i}`);
        props.handleSetDate(i);
    }

    return (
        <Box display="flex" bgcolor="ButtonShadow">
            <IconButton onClick={() => props.handleChevronClick(-1)} disabled={props.currentIndex === 0}>
                <ChevronLeft/>
            </IconButton>
            <Box display="flex">
                {props.steps.map((step, index) =>
                <Box display="flex" flexDirection="column" justifyContent="flex-end" padding={2} alignItems="center">
                        <Button variant="contained"
                            color={index === props.currentIndex ? "primary" : "secondary"}
                            key={step}
                            style={{maxWidth: 3, maxHeight: step/35, minWidth: 3, minHeight: step/35, borderRadius:5}}
                            onClick={() => {handleGridClick(index)}}
                        />
                    <Typography variant="body2" noWrap paddingTop={"5px"}>
                    {sevenDaysArray[index].format("MMM DD")}
                    </Typography>
                </Box>
                )}
            </Box>
            <IconButton onClick={() => props.handleChevronClick(1)} disabled={props.currentIndex === props.steps.length-1}>
                <ChevronRight/>
            </IconButton>
        </Box>
    );
}

export default UncondensedDashboardGrid;