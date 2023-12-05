import { Button, Box, IconButton, Typography, Grid, CardActionArea, Card } from "@mui/material";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import daysArray from "../../mockData/Dates";
import { useEffect, useState } from "react";

function UncondensedDashboardGrid(props: { steps: number[]; handleSetDate: any; currentIndex: number; setCurrentIndex: any; handleChevronClick: any; setStep: any; splitIndex: number; setSplitIndex: any; }){
    const [dateFormat, setDateFormat] = useState((window.innerWidth < 500) ? "DD" : "MMM DD");
    const [barWidth, setBarWidth] = useState((window.innerWidth < 500) ? "10px" : "25px");
    const [maxVal, setMaxVal] = useState(1);
    
    const handleGridClick = (i: number) => {
        props.handleSetDate(i);
    }

    const handleResize = () => {
        if(window.innerWidth < 500){
            setDateFormat("DD");
            setBarWidth("10px");
        } else {
            setDateFormat("MMM DD");
            setBarWidth("25px");
        }
    }

    //based off of https://stackoverflow.com/questions/60642486/react-hooks-useeffect-update-window-innerheight
    useEffect(() => {
        handleResize();
        const data = props.steps.slice(props.splitIndex, props.splitIndex + 7)
        setMaxVal(Math.max(...data));
    },[]);

    useEffect(() => {
        const data = props.steps.slice(props.splitIndex, props.splitIndex + 7)
        setMaxVal(Math.max(...data));
    }, [props.splitIndex, props.steps])

    return (
        <Box display="flex" bgcolor="ButtonShadow" justifyContent="center">
            <IconButton onClick={() => props.handleChevronClick(-1)} disabled={props.splitIndex < 1}>
                <ChevronLeft/>
            </IconButton>
            <Box sx={{height:"250px", gridAutoFlow:"column"}} display="flex" flexDirection="row">
            {props.steps.slice(props.splitIndex, props.splitIndex + 7).map((step, index) =>
                <Box display="flex" flexDirection="column" justifyContent="flex-end" alignItems="center" key={index} paddingLeft={1} paddingRight={1}>
                    <Card sx={{bgcolor: (props.splitIndex + index === props.currentIndex) ? "primary.main" : "secondary.main"}}>
                        <CardActionArea      
                                style={{height: (step/maxVal) * 200, width: barWidth, borderRadius:5}}
                                onClick={() => {handleGridClick(props.splitIndex + index)}}
                        />
                    </Card>
                    <Typography variant="body2" noWrap paddingTop={"5px"}>
                        {daysArray[props.splitIndex + index].format(dateFormat)}
                    </Typography>
                </Box>
            )}
            </Box>
            <IconButton onClick={() => props.handleChevronClick(1)} disabled={props.splitIndex >= props.steps.length-7}>
                <ChevronRight/>
            </IconButton>
        </Box>
    );
}

export default UncondensedDashboardGrid;