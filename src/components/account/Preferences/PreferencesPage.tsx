import { ArrowBack } from "@mui/icons-material";
import { Box, IconButton} from "@mui/material";
import PreferencesForm from "./PreferencesForm";

function PreferencesPage()
{
    return (
        <Box padding={5}>
            <Box textAlign="left" justifyContent="center">
                <IconButton>
                    <ArrowBack></ArrowBack>
                </IconButton>
            </Box>

            <PreferencesForm></PreferencesForm>
        </Box>
    )
}
  
export default PreferencesPage;
  