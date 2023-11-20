import { FieldTypeProps } from "./BaseLoggingOverlay.types";

const moment = require("moment");

export const manualLoggingFields: FieldTypeProps[] = [
  {
    fieldTitle: "Workout Title",
    type: "text",
    placeholder: "Enter Workout Title...",
  },
  {
    fieldTitle: "Date",
    type: "date",
    defaultData: moment().format("MMMM DD, YYYY"),
  },
  { fieldTitle: "Duration", type: "time" },
];

export const foodLoggingFields: FieldTypeProps[] = [
  //TODO
];

export const editHistoryFields: FieldTypeProps[] = [ 
  {
    fieldTitle: "Workout Title",
    type: "text",
    placeholder: "Enter Workout Title...",
  },
  {
    fieldTitle: "Date",
    type: "date",
    defaultData: moment().format("MMMM DD, YYYY"),
  },
  { fieldTitle: "Duration", type: "time" },
];
