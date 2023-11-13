import Duration from "../models/Duration";
import Workout from "../models/Workout";

const workouts = [
    new Workout("Yoga", new Date("2023-10-10"), new Duration(0, 45, 0)),
    new Workout("Strength Training", new Date("2023-10-12"), new Duration(1, 15, 0)),
    new Workout("Yoga", new Date("2023-10-10"), new Duration(0, 45, 0)),
    new Workout("Strength Training", new Date("2023-10-12"), new Duration(1, 15, 0)),
    new Workout("Yoga", new Date("2023-10-10"), new Duration(0, 45, 0)),
    new Workout("Strength Training", new Date("2023-10-12"), new Duration(1, 15, 0)),
];
export default workouts;