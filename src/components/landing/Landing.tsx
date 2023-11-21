import { Button, Box, Typography, Divider } from "@mui/material";

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
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      flexDirection={"column"}
      sx={{ mt: 7 }}
    >
      <img src="/EZFitLogo.png" alt="EZFit Logo" />
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"40%"}
        sx={{ mt: 17 }}
      >
        <LandingButton title={"Sign Up"} />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"40%"}
        sx={{ mt: 4 }}
      >
        <LandingButton title={"Log In"} />
      </Box>
      <Typography sx={{ mt: 2 }}>Forgot Password?</Typography>
      <Divider sx={{ width: "70%", borderColor: "black", mt: 5 }} />
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"40%"}
        sx={{ mt: 5 }}
      >
        <LandingButton title={"3rd Party Sign In"} />
      </Box>
    </Box>
  );
}

export default Landing;
