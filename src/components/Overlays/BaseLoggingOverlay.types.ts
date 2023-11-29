import Workout from "../../models/Workout";

export interface FieldTypeProps {
  fieldTitle: string;
  type: "text" | "dropdown" | "date" | "time" | "decimal" | "integer";
  dropdownFields?: string[];
  defaultData?: string | Date | number;
  placeholder?: string;
}

export interface LoggingFieldProps extends FieldTypeProps {
  handleFieldChange: (fieldName: string, value: any) => void;
}

export interface OverlayProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSubmit: (data: {}) => void;
  title: string;
  existingData?: {};
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
  readOnlyFields?: [{ title: string }];
}
