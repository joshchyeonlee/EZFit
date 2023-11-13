class Workout
{
    title: string;
    date: Date;
    duration: any;
    exercises: any;

    constructor(title: string, date: Date, duration: any)
    {
        this.title = title;
        this.date = date;
        this.duration = duration;
    }
}

export default Workout;