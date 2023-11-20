import Workout from "../../models/Workout";
import BaseLoggingOverlay from "./BaseLoggingOverlay";
import { EditHistoryOverlayProps, FieldTypeProps, OverlayProps } from "./BaseLoggingOverlay.types";
import { manualLoggingFields } from "./Overlay.fields";

export function ManualLoggingOverlay({ isOpen, handleClose }: OverlayProps) {
  return (
    <BaseLoggingOverlay
      isOpen={isOpen}
      handleClose={handleClose}
      title={"Manually Log Workout"}
      fields={manualLoggingFields}
      submitText={"Log Workout"}
      confirmationText={"Workout Logged"}
    />
  );
}

export function EditHistoryOverlay( { isOpen, handleClose, workout } : EditHistoryOverlayProps ) {
  
  function getLoadedEditWorkoutFields(workout : Workout)
  {
    const fieldProps : FieldTypeProps[] =
    [
      {
        fieldTitle: "Workout Title",
        defaultData: workout.title,
        type: "text",
        placeholder: "Enter Workout Title...",
      },
      {
        fieldTitle: "Date",
        defaultData: workout.date,
        type: "date",
      },
      {
        fieldTitle: "Duration",
        defaultData: workout.duration?.toString(),
        type: "time",
      }
    ];

    console.log(fieldProps);

    return fieldProps;
  }
  
  return (
    <BaseLoggingOverlay
      isOpen={isOpen}
      handleClose={handleClose}
      title={"Edit Workout"}
      fields={getLoadedEditWorkoutFields(workout)}
      submitText={"Save Changes"}
      confirmationText={"Workout History Modified"}
    />
  );
}

export function FoodLogging({ isOpen, handleClose }: OverlayProps) {
  // TODO
}
