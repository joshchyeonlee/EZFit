import { Button, Box, IconButton, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import sevenDaysArray from "../../mockData/Dates";
import React from "react";

function UncondensedDashboardGrid(props: { steps: number[]; handleSetDate: any; currentIndex: number; setCurrentIndex: any; }){
    const handleGridClick = (i: number) => {
        props.setCurrentIndex(i);
        props.handleSetDate(sevenDaysArray[i]);
    }

    const handleChevronClick = (setDiff : number) => {
        const nextIndex = props.currentIndex + setDiff;
        props.handleSetDate(sevenDaysArray[nextIndex]);
        var currInd = props.currentIndex + setDiff;
        props.setCurrentIndex(currInd);
    }

    return (
        <Box display="flex" bgcolor="ButtonShadow">
            <IconButton onClick={() => handleChevronClick(-1)} disabled={props.currentIndex === 0}>
                <ChevronLeft/>
            </IconButton>
            <Box display="flex">
                {props.steps.map((step, index) =>
                <Box display="flex" flexDirection="column" justifyContent="flex-end" padding={2}>
                    <Button variant="contained"
                        color={index === props.currentIndex ? "primary" : "secondary"}
                        key={step}
                        style={{maxWidth: 3, maxHeight: step/35, minWidth: 3, minHeight: step/35}}
                        onClick={() => {handleGridClick(index)}}
                    />
                    <Typography variant="caption" noWrap>
                    {sevenDaysArray[index].format("MMM DD")}
                    
                    </Typography>
                </Box>
                )}
            </Box>
            <IconButton onClick={() => handleChevronClick(1)} disabled={props.currentIndex === props.steps.length-1}>
                <ChevronRight/>
            </IconButton>
        </Box>
    );
}

export default UncondensedDashboardGrid;