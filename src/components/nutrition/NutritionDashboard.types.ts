import { AppGlobalProps } from "../../App";

export interface FoodIntakeProps {
  id: string;
  foodName: string;
  servingSize: number;
  calories: number;
}

export interface FoodEntryProps extends FoodIntakeProps, AppGlobalProps {
  meal: string;
  nutritionData: NutritionDashboardProps;
  handleEdit: (data: any, meal: string, index: number) => void;
  handleDelete: (meal: string, index: number) => void;
}

export interface NutritionDashboardProps {
  date: Date;
  caloriesOut: number;
  meals: {
    breakfast: FoodIntakeProps[];
    lunch: FoodIntakeProps[];
    dinner: FoodIntakeProps[];
    snacks: FoodIntakeProps[];
  };
}

export interface NutritionSectionsProps extends AppGlobalProps {
  title: "Breakfast" | "Lunch" | "Dinner" | "Snacks";
  foodIntake: FoodIntakeProps[];
  nutritionData: NutritionDashboardProps;
  handleEdit: (data: any, meal: string, index: number) => void;
  handleDelete: (meal: string, index: number) => void;
}
