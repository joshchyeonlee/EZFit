export interface fieldTypeProps {
  fieldTitle: string;
  type: "text" | "dropdown" | "date" | "time";
  defaultData?: string | Date;
  placeholder?: string;
}

export interface OverlayProps {
  isOpen: boolean;
  handleClose: () => void;
}

export interface BaseLoggingOverlayProps extends OverlayProps {
  title: string;
  fields: fieldTypeProps[];
  submitText: string;
  confirmationText: string;
}
