import { Close } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Grid,
  Modal,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import {
  BaseLoggingOverlayProps,
  FieldTypeProps,
} from "./BaseLoggingOverlay.types";

const moment = require("moment");

const LoggingField = ({
  fieldTitle,
  type,
  defaultData,
  placeholder,
}: FieldTypeProps) => {
  return (
    <Grid
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      margin={"8px 0px"}
    >
      <Typography
        paddingRight={"8px"}
        width={"30%"}
        textAlign={"right"}
        fontWeight={"bold"}
      >
        {fieldTitle}:
      </Typography>
      <Grid width={"60%"}>
        {type === "text" ? (
          <TextField
            hiddenLabel
            sx={{
              backgroundColor: (theme) => theme.palette.textFieldBkg,
              borderRadius: "10px",
              padding: "0px",
              "& .MuiInputBase-root": {
                paddingRight: "0px",
              },
              "& .MuiInputBase-input": {
                padding: "5px",
                textAlign: "center",
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderRadius: "10px",
              },
            }}
            defaultValue={defaultData}
            size="small"
            placeholder={placeholder}
            fullWidth
          ></TextField>
        ) : null}
        {type === "date" ? (
          <DatePicker
            value={moment()}
            slotProps={{ openPickerButton: { color: "primary" } }}
            sx={{
              backgroundColor: (theme) => theme.palette.textFieldBkg,
              borderRadius: "10px",
              width: "100%",
              "& .MuiInputBase-input": {
                padding: "5px",
                textAlign: "center",
              },
              "& .MuiInputBase-root": {
                borderRadius: "10px",
              },
            }}
          />
        ) : null}
        {type === "time" ? (
          <TimePicker
            views={["hours", "minutes", "seconds"]}
            format="hh:mm:ss"
            ampm={false}
            slotProps={{ openPickerButton: { color: "primary" } }}
            sx={{
              backgroundColor: (theme) => theme.palette.textFieldBkg,
              borderRadius: "10px",
              width: "100%",
              "& .MuiInputBase-input": {
                padding: "5px",
                textAlign: "center",
              },
              "& .MuiInputBase-root": {
                borderRadius: "10px",
              },
            }}
          />
        ) : null}
        {type === "dropdown" ? <>{/* TODO */}</> : null}
      </Grid>
    </Grid>
  );
};

function BaseLoggingOverlay({
  isOpen,
  handleClose,
  title,
  fields,
  submitText,
  confirmationText,
}: BaseLoggingOverlayProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = () => {
    handleClose();
    setShowConfirmation(true);
  };

  return (
    <>
      <Snackbar
        open={showConfirmation}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={10000}
        onClose={() => setShowConfirmation(false)}
      >
        <Alert onClose={() => setShowConfirmation(false)}>
          {confirmationText}
        </Alert>
      </Snackbar>
      <Modal open={isOpen}>
        <Grid
          width={"100%"}
          height={"100%"}
          alignItems={"center"}
          display={"flex"}
          justifyContent={"center"}
        >
          <Box
            width={"500px"}
            height={"500px"}
            bgcolor={"primaryBkg"}
            borderRadius={"50px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Grid
              textAlign={"right"}
              width={"100%"}
              padding={"10px"}
              height={"10%"}
            >
              <Button onClick={handleClose}>
                <Close />
              </Button>
            </Grid>
            <Typography fontSize="18px" fontWeight={"bold"} height={"5%"}>
              {title}
            </Typography>
            <Grid
              width={"80%"}
              height={"70%"}
              display={"flex"}
              flexDirection={"column"}
              paddingTop={"60px"}
            >
              {fields.map((field) => (
                <LoggingField
                  fieldTitle={field.fieldTitle}
                  type={field.type}
                  defaultData={field.defaultData}
                  placeholder={field.placeholder}
                  key={field.fieldTitle}
                />
              ))}
            </Grid>
            <Grid height={"20%"} width={"60%"}>
              <Button variant="contained" onClick={handleSubmit} fullWidth>
                {submitText}
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Modal>
    </>
  );
}

export default BaseLoggingOverlay;
