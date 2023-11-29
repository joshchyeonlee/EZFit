import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router";

export default function AccountManagementMenuItem(props: {
  children: any;
  buttonLink: string;
}) {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(props.buttonLink);
  };

  return (
    <Box>
      <Button
        fullWidth
        sx={{
          borderRadius: 0,
          paddingBottom: 3,
          paddingTop: 3,
          borderColor: "#808080",
        }}
        onClick={handleOnClick}
      >
        <Typography
          variant="h6"
          textAlign="left"
          color="black"
          fontWeight="300"
        >
          {props.children}
        </Typography>
      </Button>
    </Box>
  );
}
