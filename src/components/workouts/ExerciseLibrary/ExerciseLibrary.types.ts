export interface Exercise {
  name: string;
  muscles: muscleGroup[];
  equipment: string;
  execution: string[];
  instruction: string;
  rest: string;
  gif: string;
}

export type muscleGroup =
  | "Back"
  | "Biceps"
  | "Chest"
  | "Core"
  | "Glutes"
  | "Hamstrings"
  | "Shoulders"
  | "Triceps"
  | "Quadriceps";
