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
import { useState } from "react";
import Logo from "../../imgs/EZFitLogo.png";

interface LoginButtonProps {
  title: string;
  onClick?: () => void;
  isMobile: boolean;
}

function Login({ isMobile }: { isMobile: boolean }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    validateEmail();
  };

  const validateEmail = () => {
    const emailRegex = /^([a-zA-Z0-9-.]+)@([a-zA-Z0-9-.]+)\.([a-zA-Z]{1,5})$/;
    const isValid = emailRegex.test(email);
    setIsEmailValid(isValid);
    return isValid;
  };

  const isFormValid = () => {
    return isEmailValid && isPasswordValid;
  };

  const LoginButton = ({ title, onClick, isMobile }: LoginButtonProps) => {
    return (
      <Box
        textAlign={"center"}
        width={isMobile ? "80%" : "40%"}
        padding={"0px 8px"}
      >
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ minHeight: "28px" }}
          onClick={onClick}
          disabled={!isFormValid()}
          type="submit"
        >
          <Typography color={"primaryBkg"}>{title}</Typography>
        </Button>
      </Box>
    );
  };

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
      sx={{ mt: 2 }}
    >
      <Box width={"100%"}>
        <IconButton onClick={handleBackArrowClick}>
          <ArrowBackIcon color="primary" sx={{ fontSize: "45px" }} />
        </IconButton>
      </Box>
      <Box maxWidth={"300px"} minWidth={"200px"}>
        <img src={Logo} alt="EZFit Logo" width={"100%"} height={"auto"} />
      </Box>

      <Typography variant="h5" sx={{ mt: 8 }}>
        Log In
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={isMobile ? "80%" : "50%"}
        sx={{ mt: 4 }}
      >
        <Typography>Email Address</Typography>
        <TextField
          size="small"
          sx={{ mt: 1 }}
          required
          error={email !== "" && !isEmailValid}
          value={email}
          onChange={handleEmailChange}
          type="email"
          helperText={
            email !== "" && !isEmailValid
              ? "Please enter valid email address"
              : null
          }
        ></TextField>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignContent={"left"}
        width={isMobile ? "80%" : "50%"}
        sx={{ mt: 2 }}
      >
        <Typography>Password</Typography>
        <TextField
          size="small"
          sx={{ mt: 1 }}
          type="password"
          error={password !== "" && !isPasswordValid}
          onChange={(e) => {
            setPassword(e.target.value);
            setIsPasswordValid(e.target.value !== "");
          }}
        ></TextField>
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
        <Typography sx={{ mt: 2 }} color={"black"}>
          Forgot Password?
        </Typography>
      </Link>
      <Box sx={{ mt: 4 }}></Box>
      <LoginButton
        title={"Log In"}
        onClick={handleLoginClick}
        isMobile={isMobile}
      />
    </Box>
  );
}

export default Login;
