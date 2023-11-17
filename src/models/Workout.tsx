import WorkoutDuration from "./WorkoutDuration";

class Workout
{
    title: string;
    date: Date;
    duration: WorkoutDuration;
    exercises: any;

    constructor();
    constructor(title: string, date: Date, duration: WorkoutDuration);
    constructor(title?: string, date?: Date, duration?: WorkoutDuration)
    {
        this.title = title ?? "";
        this.date = date ?? new Date();
        this.duration = duration ?? new WorkoutDuration();
    }

    toString()
    {
        return this.title;
    }
}

export default Workout;