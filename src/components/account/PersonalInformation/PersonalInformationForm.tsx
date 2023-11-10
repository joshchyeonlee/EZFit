import { Edit } from "@mui/icons-material";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import { textAlign } from "@mui/system";
import { useRef, useState } from "react";

function PersonalInformationForm()
{
    const emailAddress = "email@address.com";

    const [name, setName] = useState("Susanna Martinez");
    const handleNameChange = (e: any) => {
        setName(e.target.value);
    };

    const editNameRef : any = useRef(null)
    const handleEditFocusClick = () => {
        editNameRef.current.focus();
    }

    return (
        <Box justifyContent="center">

            <Box padding={2} display="flex" flexDirection="row" justifyContent="center">
                <Typography textAlign="right" fontWeight="600" paddingRight="5px">
                    Email Address:
                </Typography>
                <Typography textAlign="left" fontWeight="500">
                    {emailAddress}
                </Typography>
            </Box>

            <Box padding={2} marginLeft={3} display="flex" flexDirection="row" justifyContent="center">
                <Typography textAlign="right" fontWeight="600" paddingTop="5px" paddingRight="5px">
                Name:
                </Typography>
                <TextField inputRef={editNameRef} InputProps={{ inputProps: {style: { textAlign: 'center'} }}} value={name} variant="standard" onInput={handleNameChange}>
                    {name}
                </TextField>
                <IconButton onClick={ handleEditFocusClick }>
                    <Edit></Edit>
                </IconButton>
            </Box>

        </Box>
    )
}
  
export default PersonalInformationForm;
  