import { CheckCircle, Edit } from "@mui/icons-material";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";

function PersonalInformationForm()
{
    const emailAddress = "email@address.com";

    const [name, setName] = useState("Susanna Martinez");
    const handleNameInput = (e: any) => {
        setName(e.target.value);
    };

    const [canEditName, setCanEditName] = useState(false);
    const editNameRef : any = useRef(null)
    const OnClickEditName = () => {
        setCanEditName(true);
        editNameRef.current.focus();
        editNameRef.current.readOnly = false;
    }
    const OnClickEditSaveName = () => {
        setCanEditName(false);
        
    }
    useEffect(() => {
        if (canEditName)
        {
            editNameRef.current.readOnly = false;
        }
        else
        {
            editNameRef.current.readOnly = true;
        }
    }, [canEditName])

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
                <div>
                    <TextField value={name} inputRef={editNameRef} InputProps={{ inputProps: {style: { textAlign: 'center'} } }} variant="standard" onInput={handleNameInput} onBlur={OnClickEditSaveName} >
                        {name}
                    </TextField>
                </div>
                <div>
                    {!canEditName
                        ? <IconButton color="primary" onClick={ OnClickEditName }>
                            <Edit></Edit>
                        </IconButton>
                        :
                        <IconButton color="success" onClick={ OnClickEditSaveName }>
                            <CheckCircle></CheckCircle>
                        </IconButton>
                    }
                </div>
            </Box>

        </Box>
    )
}
  
export default PersonalInformationForm;
  