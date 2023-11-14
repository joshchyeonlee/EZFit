import WorkoutDuration from "./WorkoutDuration";

class Workout
{
    title: string;
    date: Date;
    duration: WorkoutDuration;
    exercises: any;

    constructor(title: string, date: Date, duration: WorkoutDuration)
    {
        this.title = title;
        this.date = date;
        this.duration = duration;
    }

    toString()
    {
        return this.title;
    }
}

export default Workout;