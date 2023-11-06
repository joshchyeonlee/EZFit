import { fieldTypeProps } from "./BaseLoggingOverlay.types";

const moment = require("moment");

export const manualLoggingFields: fieldTypeProps[] = [
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

export const foodLoggingFields: fieldTypeProps[] = [
  //TODO
];

export const editHistoryFields: fieldTypeProps[] = [
  //TODO
];
