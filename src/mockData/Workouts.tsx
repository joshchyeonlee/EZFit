import WorkoutDuration from "../models/WorkoutDuration";
import Workout from "../models/Workout";

const workouts = [
    new Workout("Yoga", new Date("2023-11-10"), new WorkoutDuration(0, 45, 0)),
    new Workout("Strength Training", new Date("2023-11-12"), new WorkoutDuration(1, 15, 0)),
    new Workout("Yoga", new Date("2023-11-11"), new WorkoutDuration(0, 45, 0)),
    new Workout("Strength Training", new Date("2023-11-12"), new WorkoutDuration(1, 15, 0)),
    new Workout("Yoga", new Date("2023-11-10"), new WorkoutDuration(0, 45, 0)),
    new Workout("Strength Training", new Date("2023-11-12"), new WorkoutDuration(1, 15, 0)),
];
export default workouts;