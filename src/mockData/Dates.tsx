const moment = require("moment");

const sevenDaysArray: moment.Moment[] = [];
for (var i = 6; i >= 0; i--) {
    const d = new moment().startOf("day").subtract(i, "days");
    sevenDaysArray.push(d);
}
console.log(sevenDaysArray);

export default sevenDaysArray;