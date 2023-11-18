import { ArrowBack } from "@mui/icons-material";
import { Box, IconButton} from "@mui/material";
import PreferencesForm from "./PreferencesForm";
import { useNavigate } from "react-router";

function PreferencesPage()
{
    const navigate = useNavigate();

    return (
        <Box padding={5}>

            <Box textAlign="left" justifyContent="center">
                <IconButton onClick={() => navigate("/Account/")}>
                    <ArrowBack fontSize="large" color="primary"></ArrowBack>
                </IconButton>
            </Box>

            <PreferencesForm></PreferencesForm>
        </Box>
    )
}
  
export default PreferencesPage;
  