import { Button, Box, Typography, TextField, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router";

interface SignUpButtonProps {
  title: string;
  onClick?: () => void;
}

const SignUpButton = ({ title, onClick }: SignUpButtonProps) => {
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

function SignUp() {
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
        <img
          src="/EZFitLogo.png"
          alt="EZFit Logo"
          width={"100%"}
          height={"auto"}
        />
      </Box>
      <Box display="flex" position={"absolute"} top={"30px"} left={"30px"}>
        <IconButton size="large" onClick={handleBackArrowClick}>
          <ArrowBackIcon color="primary" />
        </IconButton>
      </Box>
      <Typography variant="h5" sx={{ mt: 7 }}>
        Sign Up
      </Typography>
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"50%"}
        sx={{ mt: 3 }}
      >
        <Typography>Email Address</Typography>
        <TextField size="small"></TextField>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignContent={"left"}
        width={"50%"}
        sx={{ mt: 2 }}
      >
        <Typography>First Name</Typography>
        <TextField size="small"></TextField>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignContent={"left"}
        width={"50%"}
        sx={{ mt: 2 }}
      >
        <Typography>Last Name</Typography>
        <TextField size="small"></TextField>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignContent={"left"}
        width={"50%"}
        sx={{ mt: 2 }}
      >
        <Typography>Password</Typography>
        <TextField size="small"></TextField>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignContent={"left"}
        width={"50%"}
        sx={{ mt: 2 }}
      >
        <Typography>Confirm Password</Typography>
        <TextField size="small"></TextField>
      </Box>
      <Box sx={{ mt: 4 }}></Box>
      <SignUpButton title={"Sign Up"} onClick={handleSignUpClick} />
    </Box>
  );
}

export default SignUp;
