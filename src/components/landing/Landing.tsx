import { Button, Box, Typography, Divider } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThirdPartySignIn from "../login/ThirdPartySignIn";
import Logo from "../../imgs/EZFitLogo.png";

interface LandingButtonProps {
  title: string;
  onClick?: () => void;
}

const LandingButton = ({ title, onClick }: LandingButtonProps) => {
  return (
    <Box textAlign={"center"} width={"70%"} padding={"0px 8px"}>
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

function Landing() {
  const [isThirdPartyModalOpen, setIsThirdPartyModalOpen] = useState(false);

  const handleOpenThirdPartyModal = () => {
    setIsThirdPartyModalOpen(true);
  };

  const navigateSignUp = useNavigate();

  const handleSignUpClick = () => {
    navigateSignUp("/SignUp");
  };

  const navigateLogin = useNavigate();

  const handleLoginClick = () => {
    navigateLogin("/Login");
  };

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      sx={{ mt: 7 }}
    >
      <Box maxWidth={"300px"} minWidth={"200px"}>
        <img src={Logo} alt="EZFit Logo" width={"100%"} height={"auto"} />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"40%"}
        sx={{ mt: 17 }}
      >
        <LandingButton title={"Sign Up"} onClick={handleSignUpClick} />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"40%"}
        sx={{ mt: 4 }}
      >
        <LandingButton title={"Log In"} onClick={handleLoginClick} />
      </Box>
      <Link to={"/ForgotPassword"}>
        {" "}
        <Typography sx={{ mt: 2 }} color={"black"}>
          Forgot Password?
        </Typography>
      </Link>
      <Divider sx={{ width: "50%", borderColor: "black", mt: 5 }} />
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"40%"}
        sx={{ mt: 5 }}
      >
        <ThirdPartySignIn
          open={isThirdPartyModalOpen}
          setOpen={setIsThirdPartyModalOpen}
        />
        <LandingButton
          title={"3rd Party Sign In"}
          onClick={() => handleOpenThirdPartyModal()}
        />
      </Box>
    </Box>
  );
}

export default Landing;
