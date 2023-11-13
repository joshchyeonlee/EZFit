class Duration
{
    hours = 1;
    minutes = 46;
    seconds = 40;

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
};

export default Duration;