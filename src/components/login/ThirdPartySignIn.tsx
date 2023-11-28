import { Button, Box, Typography, Modal, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

interface ThirdPartySignInButtonProps {
  title: string;
  onClick?: () => void;
}

const ThirdPartySignInButton = ({
  title,
  onClick,
}: ThirdPartySignInButtonProps) => {
  return (
    <Box textAlign={"center"} width={"60%"} padding={"0px 8px"}>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ minHeight: "40px" }}
        onClick={onClick}
      >
        <Typography color={"primaryBkg"}>{title}</Typography>
      </Button>
    </Box>
  );
};

function ThirdPartySignIn(props: { open: boolean; setOpen: any }) {
  const handleClose = () => {
    props.setOpen(false);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "primaryBkg",
    border: "2px solid #000",
    borderRadius: "50px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal open={props.open} onClose={handleClose}>
      <Box sx={style} justifyContent="center" width={600} height={400}>
        <Box
          position="absolute"
          display="flex"
          justifyContent="flex-end"
          right="10px"
          top="10px"
          padding="10px"
        >
          <IconButton size="large" onClick={() => handleClose()}>
            <Close />
          </IconButton>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Box sx={{ mt: 2 }}></Box>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Third Party Sign In
          </Typography>
          <Box sx={{ mt: 14 }}></Box>
          <ThirdPartySignInButton title={"Sign in with Google"} />
          <Box sx={{ mt: 3 }}></Box>
          <ThirdPartySignInButton title={"Sign in with Apple ID"} />
        </Box>
      </Box>
    </Modal>
  );
}

export default ThirdPartySignIn;
