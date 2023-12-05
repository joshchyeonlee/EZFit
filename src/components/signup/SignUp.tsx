import { Button, Box, Typography, TextField, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import Logo from "../../imgs/EZFitLogo.png";

interface SignUpButtonProps {
  title: string;
  onClick?: () => void;
}

function SignUp() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isLastNameValid, setIsLastNameValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);

  const validateEmail = () => {
    const emailRegex = /^([a-zA-Z0-9-.]+)@([a-zA-Z0-9-.]+)\.([a-zA-Z]{1,5})$/;
    const isValid = emailRegex.test(email);
    setIsEmailValid(isValid);
    return isValid;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    validateEmail();
  };

  useEffect(() => {
    const state = password === confirmPassword ? true : false;
    setIsPasswordMatch(state);
  }, [password, confirmPassword]);

  const isFormValid = () => {
    return (
      isEmailValid &&
      isFirstNameValid &&
      isLastNameValid &&
      isPasswordValid &&
      isConfirmPasswordValid &&
      isPasswordMatch
    );
  };

  const SignUpButton = ({ title, onClick }: SignUpButtonProps) => {
    return (
      <Box textAlign={"center"} width={"40%"} padding={"0px 8px"}>
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

  const navigateSignUpClick = useNavigate();

  const handleSignUpClick = () => {
    navigateSignUpClick("/Dashboard");
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
        <img src={Logo} alt="EZFit Logo" width={"100%"} height={"auto"} />
      </Box>
      <Box display="flex" position={"absolute"} top={"30px"} left={"30px"}>
        <IconButton size="large" onClick={handleBackArrowClick}>
          <ArrowBackIcon color="primary" />
        </IconButton>
      </Box>
      <Typography variant="h5" textAlign="center" sx={{ mt: 7 }}>
        Sign Up
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"50%"}
        sx={{ mt: 3 }}
      >
        <Typography>Email Address</Typography>
        <TextField
          size="small"
          required
          error={email !== "" && !isEmailValid}
          value={email}
          onChange={handleEmailChange}
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
        width={"50%"}
        sx={{ mt: 2 }}
      >
        <Typography>First Name</Typography>
        <TextField
          size="small"
          required
          error={firstName !== "" && !isFirstNameValid}
          onChange={(e) => {
            setFirstName(e.target.value);
            setIsFirstNameValid(e.target.value !== "");
          }}
        ></TextField>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignContent={"left"}
        width={"50%"}
        sx={{ mt: 2 }}
      >
        <Typography>Last Name</Typography>
        <TextField
          size="small"
          required
          error={lastName !== "" && !isLastNameValid}
          onChange={(e) => {
            setLastName(e.target.value);
            setIsLastNameValid(e.target.value !== "");
          }}
        ></TextField>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignContent={"left"}
        width={"50%"}
        sx={{ mt: 2 }}
      >
        <Typography>Password</Typography>
        <TextField
          size="small"
          required
          error={password !== "" && !isPasswordValid}
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
            setIsPasswordValid(e.target.value !== "");
            // validatePasswordMatch();
          }}
        ></TextField>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignContent={"left"}
        width={"50%"}
        sx={{ mt: 2 }}
      >
        <Typography>Confirm Password</Typography>
        <TextField
          size="small"
          required
          error={
            confirmPassword !== "" &&
            (!isConfirmPasswordValid || !isPasswordMatch)
          }
          type="password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setIsConfirmPasswordValid(e.target.value !== "");
            // validatePasswordMatch();
          }}
          helperText={
            confirmPassword !== "" && !isPasswordMatch
              ? "Passwords do not match"
              : null
          }
        ></TextField>
      </Box>
      <Box sx={{ mt: 4 }}></Box>
      <SignUpButton title={"Sign Up"} onClick={handleSignUpClick} />
    </Box>
  );
}

export default SignUp;
