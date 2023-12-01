import WorkoutDuration from "./WorkoutDuration";

class Workout
{
    id: number;
    title: string;
    date: Date;
    duration: WorkoutDuration;
    exercises: any;

    constructor();
    constructor(title: string, date: Date, duration: WorkoutDuration);
    constructor(title?: string, date?: Date, duration?: WorkoutDuration)
    {
        this.id = Math.random() * 10;
        this.title = title ?? "";
        this.date = date ?? new Date();
        this.duration = duration ?? new WorkoutDuration();
    }

    toString()
    {
        return this.title;
    }

    getDurationAsDate(): Date {
        return new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDay(), this.duration.hours, this.duration.minutes, this.duration.seconds);
    }
}

export default Workout;