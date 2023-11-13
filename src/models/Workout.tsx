class Workout
{
    title: string;
    date: Date;
    duration: Duration;
    exercises: any;

    constructor(title: string, date: Date, duration: Duration)
    {
        this.title = title;
        this.date = date;
        this.duration = duration;
    }
}

export default Workout;