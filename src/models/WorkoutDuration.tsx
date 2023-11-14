class WorkoutDuration
{
    hours : number = 1;
    minutes : number  = 46;
    seconds : number  = 40;

    constructor(hours : number, minutes : number, seconds : number)
    {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
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