import { Button } from "@mui/material";

const CancelButton = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <Button
      variant="contained"
      fullWidth
      onClick={handleClose}
      color="secondary"
    >
      Cancel
    </Button>
  );
};

export default CancelButton;
