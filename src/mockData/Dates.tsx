const moment = require("moment");

const daysArray: moment.Moment[] = [];
for (var i = 15; i >= 0; i--) {
    const d = new moment().startOf("day").subtract(i, "days");
    daysArray.push(d);
}

export default daysArray;
