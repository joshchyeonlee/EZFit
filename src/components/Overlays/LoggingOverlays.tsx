import moment from "moment";
import Workout from "../../models/Workout";
import BaseLoggingOverlay from "./BaseLoggingOverlay";
import {
  EditHistoryOverlayProps,
  FieldTypeProps,
  OverlayProps,
} from "./BaseLoggingOverlay.types";
import { foodLoggingFields, manualLoggingFields } from "./Overlay.fields";

export function ManualLoggingOverlay({
  isOpen,
  handleClose,
  handleSubmit,
}: OverlayProps) {
  return (
    <BaseLoggingOverlay
      isOpen={isOpen}
      handleClose={handleClose}
      handleSubmit={handleSubmit}
      title={"Manually Log Workout"}
      fields={manualLoggingFields}
      submitText={"Log Workout"}
      confirmationText={"Workout Logged"}
    />
  );
}

export function EditHistoryOverlay({
  isOpen,
  handleClose,
  workout,
}: EditHistoryOverlayProps) {
  function getLoadedEditWorkoutFields(workout: Workout) {
    const fieldProps: FieldTypeProps[] = [
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
        defaultData: workout.getDurationAsDate(),
        type: "time",
      },
    ];

    return fieldProps;
  }

  return (
    <BaseLoggingOverlay
      isOpen={isOpen}
      handleSubmit={() => {}}
      handleClose={handleClose}
      title={"Edit Workout"}
      fields={getLoadedEditWorkoutFields(workout)}
      submitText={"Save Changes"}
      confirmationText={"Workout History Modified"}
    />
  );
}

export function FoodLogging({
  isOpen,
  handleClose,
  handleSubmit,
  title,
  existingData,
}: OverlayProps) {
  let fields = foodLoggingFields;

  if (title === "Edit Food" && isOpen) {
    fields = foodLoggingFields.map((field) => ({
      ...field,
      defaultData: (existingData as any)[field.fieldTitle],
    }));
  }

  return (
    <BaseLoggingOverlay
      isOpen={isOpen}
      handleClose={handleClose}
      handleSubmit={handleSubmit}
      title={title}
      fields={fields}
      submitText={title}
      confirmationText={"Food Logged "}
      readOnlyFields={[{ title: "Total Calories" }]}
    />
  );
}
