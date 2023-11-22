import BaseLoggingOverlay from "./BaseLoggingOverlay";
import { OverlayProps } from "./BaseLoggingOverlay.types";
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

export function EditHistoryOverlay({ isOpen, handleClose }: OverlayProps) {
  // TODO
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
