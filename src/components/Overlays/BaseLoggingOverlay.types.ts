import Workout from "../../models/Workout";

export interface FieldTypeProps {
  fieldTitle: string;
  type: "text" | "dropdown" | "date" | "time";
  defaultData?: string | Date;
  placeholder?: string;
}

export interface OverlayProps {
  isOpen: boolean;
  handleClose: () => void;
}

export interface EditHistoryOverlayProps {
  isOpen: boolean;
  handleClose: () => void;
  workout: Workout;
}

export interface BaseLoggingOverlayProps extends OverlayProps {
  title: string;
  fields: FieldTypeProps[];
  submitText: string;
  confirmationText: string;
}
