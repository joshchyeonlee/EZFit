class WorkoutDuration
{
    hours : number = 1;
    minutes : number  = 46;
    seconds : number  = 40;

    constructor();
    constructor(hours : number, minutes : number, seconds : number);
    constructor(hours? : number, minutes? : number, seconds? : number)
    {
        this.hours = hours ?? 0;
        this.minutes = minutes ?? 0;
        this.seconds = seconds ?? 0;
    }

    toString() : string
    {
        return "" + String(this.hours).padStart(2, '0') + ":" + String(this.minutes).padStart(2, '0') + ":" +  String(this.seconds).padStart(2, '0');
    }

    getSeconds() : number
    {
        return this.hours * 3600 + this.minutes * 60 + this.seconds;
    }
};

export default WorkoutDuration;