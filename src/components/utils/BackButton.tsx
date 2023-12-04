import ArrowBack from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BackButton = ({ route }: { route: string }) => {
  const navigate = useNavigate();
  return (
    <IconButton
      color="primary"
      onClick={() => navigate(route)}
      sx={{ paddingLeft: "2%" }}
    >
      <ArrowBack sx={{ fontSize: "45px" }} />
    </IconButton>
  );
};

export default BackButton;
