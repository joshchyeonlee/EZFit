import {
  Button,
  Box,
  Typography,
  TextField,
  IconButton,
  Snackbar,
  Alert,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";
import { ChangeEvent, useState } from "react";
import Logo from "../../imgs/EZFitLogo.png";

interface ResetPasswordProps {
  title: string;
  onClick?: () => void;
}

function ForgotPassword() {
  const [textFieldValue, setTextFieldValue] = useState("");
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);

  const validateEmail = () => {
    const emailRegex = /^([a-zA-Z0-9-.]+)@([a-zA-Z0-9-.]+)\.([a-zA-Z]{1,5})$/;
    const isValid = emailRegex.test(textFieldValue);
    setIsEmailValid(isValid);
    return isValid;
  };

  const ResetPasswordButton = ({ title, onClick }: ResetPasswordProps) => {
    return (
      <Box textAlign={"center"} width={"30%"} padding={"0px 8px"}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ minHeight: "28px" }}
          onClick={onClick}
          disabled={!isEmailValid}
        >
          <Typography color={"primaryBkg"}>{title}</Typography>
        </Button>
      </Box>
    );
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleResetPasswordClick = () => {
    setOpen(true);
  };

  const navigate = useNavigate();

  const handleBackArrowClick = () => {
    navigate(-1);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTextFieldValue(event.target.value);
    validateEmail();
  };

  const checkInput = (): string => {
    let text: string = textFieldValue
      ? `New password sent to ${textFieldValue}!`
      : "Email cannot be empty!";
    return text;
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      sx={{ mt: 6 }}
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
        Forgot Password?
      </Typography>
      <Box sx={{ mt: 2 }}></Box>
      <Typography>Please enter your account email address.</Typography>
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"50%"}
        sx={{ mt: 7 }}
      >
        <Typography>Email Address</Typography>
        <TextField
          size="small"
          sx={{ mt: 1 }}
          value={textFieldValue}
          error={email !== "" && !isEmailValid}
          onChange={handleInputChange}
          helperText={
            email !== "" && !isEmailValid
              ? "Please enter valid email address"
              : null
          }
        ></TextField>
      </Box>
      <Box sx={{ mt: 9 }}></Box>
      <ResetPasswordButton
        title={"Reset Password"}
        onClick={handleResetPasswordClick}
      />
      <Box sx={{ mt: 3 }}></Box>
      <Box width={"30%"}>
        <Typography textAlign={"center"}>
          If the email is registered to a user account, a link to reset your
          password will be sent to the email above.
        </Typography>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={textFieldValue ? "success" : "error"}
        >
          {checkInput()}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default ForgotPassword;
