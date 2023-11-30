import { WorkoutRowProps } from "./WorkoutRow";

export let workoutRowMockData: WorkoutRowProps[] = [
  {
    title: "Workout #1",
    lastRun: "October 10, 2023",
    exercises: 
    [{
      name: 'Leg Press',
    },
    {
      name: 'Push-Ups',
    },
    {
      name: 'Inclined Dumbbell Chest Press',
    },
    {
      name: 'Dumbbell Shoulder Press',
    },
    {
      name: 'Burpees',
    }]
  },
  {
    title: "Push Day Workout",
    exercises: 
    [{
      name: 'Leg Press',
    },
    {
      name: 'Push-Ups',
    },
    {
      name: 'Inclined Dumbbell Chest Press',
    },
    {
      name: 'Dumbbell Shoulder Press',
    },
    {
      name: 'Burpees',
    }]
  },
  {
    title: "Pull Day Workout",
    lastRun: "September 10, 2023",
    exercises: 
    [{
      name: 'Leg Press',
    },
    {
      name: 'Push-Ups',
    },
    {
      name: 'Inclined Dumbbell Chest Press',
    },
    {
      name: 'Dumbbell Shoulder Press',
    },
    {
      name: 'Burpees',
    }]
  },
];
