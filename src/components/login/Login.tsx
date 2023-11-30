import {
  Button,
  Box,
  Typography,
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  IconButton,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link, useNavigate } from "react-router-dom";

interface LoginButtonProps {
  title: string;
  onClick?: () => void;
}

const LoginButton = ({ title, onClick }: LoginButtonProps) => {
  return (
    <Box textAlign={"center"} width={"40%"} padding={"0px 8px"}>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ minHeight: "28px" }}
        onClick={onClick}
      >
        <Typography color={"primaryBkg"}>{title}</Typography>
      </Button>
    </Box>
  );
};

function Login() {
  const navigateLoginClick = useNavigate();

  const handleLoginClick = () => {
    navigateLoginClick("/Dashboard");
  };

  const navigateBackArrowClick = useNavigate();

  const handleBackArrowClick = () => {
    navigateBackArrowClick(-1);
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      sx={{ mt: 6 }}
    >
      <Box maxWidth={"300px"} minWidth={"200px"}>
        <img
          src="/EZFitLogo.png"
          alt="EZFit Logo"
          width={"100%"}
          height={"auto"}
        />
      </Box>
      <Box display="flex" position={"absolute"} top={"30px"} left={"30px"}>
        <IconButton size="large" onClick={handleBackArrowClick}>
          <ArrowBackIcon />
        </IconButton>
      </Box>
      <Typography variant="h5" sx={{ mt: 8 }}>
        Log In
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"50%"}
        sx={{ mt: 4 }}
      >
        <Typography>Email Address</Typography>
        <TextField size="small" sx={{ mt: 1 }}></TextField>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignContent={"left"}
        width={"50%"}
        sx={{ mt: 2 }}
      >
        <Typography>Password</Typography>
        <TextField size="small" sx={{ mt: 1 }}></TextField>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"left"}
        width={"50%"}
      >
        <FormGroup sx={{ mt: 1 }}>
          <FormControlLabel control={<Checkbox />} label="Remember Me" />
        </FormGroup>
      </Box>
      <Link to={"/ForgotPassword"}>
        {" "}
        <Typography sx={{ mt: 2 }}>Forgot Password?</Typography>
      </Link>
      <Box sx={{ mt: 4 }}></Box>
      <LoginButton title={"Log In"} onClick={handleLoginClick} />
    </Box>
  );
}

export default Login;
