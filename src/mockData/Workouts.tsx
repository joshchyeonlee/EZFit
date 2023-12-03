import WorkoutDuration from "../models/WorkoutDuration";
import Workout from "../models/Workout";

const workoutData = [
    new Workout("Running", new Date("2023-11-09"), new WorkoutDuration(1, 15, 0)),
    new Workout("Yoga", new Date("2023-11-11"), new WorkoutDuration(0, 45, 0)),
    new Workout("Strength Training", new Date("2023-11-12"), new WorkoutDuration(1, 15, 0)),
    new Workout("Strength Training", new Date("2023-11-13"), new WorkoutDuration(1, 15, 0)),
    new Workout("Yoga", new Date("2023-11-14"), new WorkoutDuration(0, 45, 0)),
    new Workout("Strength Training", new Date("2023-11-13"), new WorkoutDuration(1, 15, 0)),
    new Workout("Yoga", new Date("2023-11-11"), new WorkoutDuration(0, 45, 0)),
    new Workout("Stretching", new Date("2023-11-12"), new WorkoutDuration(0, 40, 0)),
    new Workout("Strength Training", new Date("2023-11-13"), new WorkoutDuration(1, 15, 0)),
    new Workout("Cycling", new Date("2023-11-14"), new WorkoutDuration(2, 0, 0)),
    new Workout("Cycling", new Date("2023-11-15"), new WorkoutDuration(2, 0, 0)),
    new Workout("Stretching", new Date("2023-11-15"), new WorkoutDuration(0, 40, 0)),
    new Workout("Stretching", new Date("2023-11-17"), new WorkoutDuration(2, 40, 0)),
    
    new Workout("Yoga", new Date("2023-11-18"), new WorkoutDuration(0, 45, 0)),
    new Workout("Strength Training", new Date("2023-11-19"), new WorkoutDuration(1, 15, 0)),
    new Workout("Strength Training", new Date("2023-11-20"), new WorkoutDuration(1, 15, 0)),
    new Workout("Yoga", new Date("2023-11-21"), new WorkoutDuration(0, 45, 0)),
    new Workout("Strength Training", new Date("2023-11-22"), new WorkoutDuration(1, 15, 0)),
    new Workout("Yoga", new Date("2023-11-18"), new WorkoutDuration(0, 45, 0)),
    new Workout("Stretching", new Date("2023-11-21"), new WorkoutDuration(0, 40, 0)),
    new Workout("Strength Training", new Date("2023-11-22"), new WorkoutDuration(1, 15, 0)),
    new Workout("Cycling", new Date("2023-11-20"), new WorkoutDuration(2, 0, 0)),
    new Workout("Cycling", new Date("2023-11-23"), new WorkoutDuration(2, 0, 0)),
    new Workout("Stretching", new Date("2023-11-24"), new WorkoutDuration(0, 40, 0)),

    new Workout("Stretching", new Date("2023-12-01"), new WorkoutDuration(2, 40, 0)),
    new Workout("Yoga", new Date("2023-11-30"), new WorkoutDuration(0, 45, 0)),
    new Workout("Strength Training", new Date("2023-11-26"), new WorkoutDuration(1, 15, 0)),
    new Workout("Strength Training", new Date("2023-11-27"), new WorkoutDuration(1, 15, 0)),
    new Workout("Yoga", new Date("2023-11-30"), new WorkoutDuration(0, 45, 0)),
    new Workout("Strength Training", new Date("2023-11-28"), new WorkoutDuration(1, 15, 0)),
    new Workout("Yoga", new Date("2023-11-27"), new WorkoutDuration(0, 45, 0)),
    new Workout("Stretching", new Date("2023-11-28"), new WorkoutDuration(0, 40, 0)),
    new Workout("Strength Training", new Date("2023-11-29"), new WorkoutDuration(1, 15, 0)),
    new Workout("Cycling", new Date("2023-11-30"), new WorkoutDuration(2, 0, 0)),
    new Workout("Cycling", new Date("2023-11-25"), new WorkoutDuration(2, 0, 0)),
    new Workout("Stretching", new Date("2023-11-26"), new WorkoutDuration(0, 40, 0)),
];
export default workoutData;