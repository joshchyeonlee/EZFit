import BaseLoggingOverlay from "./BaseLoggingOverlay";
import { OverlayProps } from "./BaseLoggingOverlay.types";
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

export function EditHistoryOverlay({ isOpen, handleClose }: OverlayProps) {
  // TODO
}

export function FoodLogging({ isOpen, handleClose }: OverlayProps) {
  // TODO
}
