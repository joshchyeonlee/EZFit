import { Button, Box, IconButton, Typography } from "@mui/material";
import {  useState } from "react";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import sevenDaysArray from "../mockData/Dates";
import steps from "../mockData/Steps";

function UncondensedDashboardGrid(props: { steps: number[]; handleSetDate: any; /*sevenDaysString: string[] */}){
    const [currentIndex, setCurrentIndex] = useState(props.steps.length - 1);

    const handleGridClick = (i: number) => {
        var indexDiff = i - currentIndex;
        setCurrentIndex(i);
        props.handleSetDate(indexDiff);
    }

    const handleChevronClick = (setDiff : number) => {
        props.handleSetDate(setDiff);
        var currInd = currentIndex + setDiff;
        setCurrentIndex(currInd);
    }

    return (
        <Box display="flex" bgcolor="ButtonShadow">
            <IconButton onClick={() => handleChevronClick(-1)} disabled={currentIndex === 0}>
                <ChevronLeft/>
            </IconButton>
            <Box display="flex">
                {props.steps.map((step, index) =>
                <Box display="flex" flexDirection="column" justifyContent="flex-end" padding={2}>
                    <Button variant="contained"
                        color={index === currentIndex ? "primary" : "secondary"}
                        key={step}
                        style={{maxWidth: 3, maxHeight: step/35, minWidth: 3, minHeight: step/35}}
                        onClick={() => {handleGridClick(index)}}
                    />
                    <Typography variant="caption" noWrap>
                        {sevenDaysArray[index]}
                    </Typography>
                </Box>
                )}
            </Box>
            <IconButton onClick={() => handleChevronClick(1)} disabled={currentIndex === props.steps.length-1}>
                <ChevronRight/>
            </IconButton>
        </Box>
    );
}

export default UncondensedDashboardGrid;