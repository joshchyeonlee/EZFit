import { Close } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Grid,
  MenuItem,
  Modal,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import {
  BaseLoggingOverlayProps,
  LoggingFieldProps,
} from "./BaseLoggingOverlay.types";
import { string } from "prop-types";

const moment = require("moment");

const LoggingField = ({
  fieldTitle,
  type,
  dropdownFields,
  defaultData,
  placeholder,
  handleFieldChange,
}: LoggingFieldProps) => {
  console.log(defaultData);
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
        {type === "text" || type === "decimal" || type === "integer" ? (
          <TextField
            type={type === "text" ? type : "number"}
            inputProps={{ step: type === "decimal" ? 0.25 : 1 }}
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
            defaultValue={defaultData ?? null}
            size="small"
            placeholder={placeholder}
            fullWidth
            onChange={(e) =>
              handleFieldChange(
                fieldTitle,

                type === "integer"
                  ? Math.floor(parseInt(e.target.value))
                    ? parseInt(e.target.value)
                    : null
                  : e.target.value
              )
            }
            required
          ></TextField>
        ) : null}
        {type === "date" ? (
          <DatePicker
            defaultValue={defaultData ? moment(defaultData) : moment()}
            slotProps={{ openPickerButton: { color: "primary" } }}
            sx={{
              backgroundColor: (theme) => theme.palette.textFieldBkg,
              borderRadius: "10px",
              width: "100%",
              "& .MuiInputBase-input": {
                padding: "5px",
                textAlign: "center",
                paddingLeft: "42px",
              },
              "& .MuiInputBase-root": {
                borderRadius: "10px",
              },
            }}
            format="MMMM DD, YYYY"
            maxDate={moment()}
            onChange={(e) => handleFieldChange(fieldTitle, e)}
          />
        ) : null}
        {type === "time" ? (
          <TimePicker
            views={["hours", "minutes", "seconds"]}
            format="HH:mm:ss"
            defaultValue={moment(defaultData) ?? null}
            ampm={false}
            slotProps={{ openPickerButton: { color: "primary" } }}
            sx={{
              backgroundColor: (theme) => theme.palette.textFieldBkg,
              borderRadius: "10px",
              width: "100%",
              "& .MuiInputBase-input": {
                padding: "5px",
                textAlign: "right",
                paddingRight: "54px",
              },
              "& .MuiInputBase-root": {
                borderRadius: "10px",
              },
            }}
            onChange={(e) => handleFieldChange(fieldTitle, e)}
          />
        ) : null}
        {type === "dropdown" ? (
          <>
            <Select
              defaultValue={dropdownFields ? dropdownFields[0] : ""}
              fullWidth
              sx={{
                backgroundColor: (theme) => theme.palette.textFieldBkg,
                "& .MuiInputBase-input": {
                  padding: "5px",
                  textAlign: "Center",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderRadius: "10px",
                },
                "& .MuiOutlinedInput-input": {
                  paddingRight: "5px !important",
                },

                borderRadius: "10px",
              }}
              onChange={(e) => handleFieldChange(fieldTitle, e.target.value)}
            >
              {dropdownFields?.map((field) => (
                <MenuItem key={field} value={field}>
                  {field}
                </MenuItem>
              ))}
            </Select>
          </>
        ) : null}
      </Grid>
    </Grid>
  );
};

function BaseLoggingOverlay({
  isOpen,
  handleClose,
  handleSubmit,
  title,
  fields,
  submitText,
  confirmationText,
  readOnlyFields,
}: BaseLoggingOverlayProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const setEmptyState = () => {
    const initialState = {} as any;
    fields.forEach((field) => {
      initialState[field.fieldTitle] = field.defaultData || "";
    });
    return initialState;
  };

  const [formData, setFormData] = useState(setEmptyState());

  const handleFieldChange = (fieldName: string, value: any) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmitOverlay = () => {
    handleClose();
    setFormData(setEmptyState());
    setShowConfirmation(true);
    handleSubmit(formData);
  };

  const handleCloseOverlay = () => {
    handleClose();
    setFormData(setEmptyState());
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
            width={"550px"}
            height={"500px"}
            bgcolor={"primaryBkg"}
            borderRadius={"50px"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            component={"form"}
            onSubmit={handleSubmitOverlay}
          >
            <Grid
              textAlign={"right"}
              width={"100%"}
              padding={"10px"}
              height={"10%"}
            >
              <Button onClick={handleCloseOverlay}>
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
              paddingTop={"8%"}
            >
              {fields.map((field) => (
                <LoggingField
                  fieldTitle={field.fieldTitle}
                  type={field.type}
                  defaultData={field.defaultData}
                  placeholder={field.placeholder}
                  key={field.fieldTitle}
                  handleFieldChange={handleFieldChange}
                  dropdownFields={field.dropdownFields}
                />
              ))}
              {readOnlyFields?.map((field) => (
                <Typography
                  fontWeight={"bold"}
                  textAlign={"center"}
                  paddingTop={"20px"}
                >
                  {field.title}:{" "}
                  {Math.floor(
                    formData["Calories/Serving"] * formData["Servings Eaten"]
                  )}
                </Typography>
              ))}
            </Grid>
            <Grid height={"20%"} width={"60%"}>
              <Button variant="contained" fullWidth type="submit">
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
