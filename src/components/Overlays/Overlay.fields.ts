import { FieldTypeProps } from "./BaseLoggingOverlay.types";

const moment = require("moment");

export const manualLoggingFields: FieldTypeProps[] = [
  {
    fieldTitle: "Workout Title",
    type: "text",
    placeholder: "Enter Workout Title",
  },
  {
    fieldTitle: "Date",
    type: "date",
    defaultData: moment().format("MMMM DD, YYYY"),
  },
  { fieldTitle: "Duration", type: "time" },
];

export const foodLoggingFields: FieldTypeProps[] = [
  {
    fieldTitle: "Food",
    type: "text",
    placeholder: "Enter Food Name",
  },
  {
    fieldTitle: "Meal",
    type: "dropdown",
    dropdownFields: ["Breakfast", "Lunch", "Dinner", "Snacks"],
    defaultData: "Breakfast",
  },
  { fieldTitle: "Calories/Serving", type: "integer", defaultData: 100 },
  { fieldTitle: "Servings Eaten", type: "decimal", defaultData: 1 },
];

export const editHistoryFields: FieldTypeProps[] = [
  //TODO
];
