import { NutritionDashboardProps } from "./NutritionDashboard.types";

const moment = require("moment");

export let nutritionMockData: NutritionDashboardProps[] = [
  {
    date: moment().format("DD/MM/YYYY"),
    caloriesOut: 100,
    meals: {
      breakfast: [
        {
          id: Math.random().toString(36).substring(2, 9),
          foodName: "Pancakes",
          servingSize: 1.25,
          calories: 146,
        },
        {
          id: Math.random().toString(36).substring(2, 9),
          foodName: "Maple Syrup",
          servingSize: 0.75,
          calories: 70,
        },
      ],
      lunch: [
        {
          id: Math.random().toString(36).substring(2, 9),
          foodName: "Garden Salad",
          servingSize: 2,
          calories: 128,
        },
      ],
      dinner: [],
      snacks: [],
    },
  },
  {
    date: moment().subtract(1, "days").format("DD/MM/YYYY"),
    caloriesOut: 300,
    meals: {
      breakfast: [
        {
          id: Math.random().toString(36).substring(2, 9),
          foodName: "Strawberries",
          servingSize: 2,
          calories: 50,
        },
        {
          id: Math.random().toString(36).substring(2, 9),
          foodName: "Oatmeal",
          servingSize: 1.25,
          calories: 130,
        },
      ],
      lunch: [],
      dinner: [
        {
          id: Math.random().toString(36).substring(2, 9),
          foodName: "Pizza",
          servingSize: 1.75,
          calories: 370,
        },
      ],
      snacks: [],
    },
  },
];
