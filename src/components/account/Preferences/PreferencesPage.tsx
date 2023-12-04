import { Box } from "@mui/material";
import PreferencesForm from "./PreferencesForm";
import { useNavigate } from "react-router";
import BackButton from "../../utils/BackButton";

function PreferencesPage() {
  const navigate = useNavigate();

  return (
    <Box padding={5}>
      <Box textAlign="left" justifyContent="center">
        <BackButton route="/Account/" />
      </Box>

      <PreferencesForm></PreferencesForm>
    </Box>
  );
}

export default PreferencesPage;
