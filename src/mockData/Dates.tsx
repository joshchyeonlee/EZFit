const moment = require("moment");

const sevenDaysArray: moment.Moment[] = [];
for (var i = 6; i >= 0; i--) {
    sevenDaysArray.push(moment().subtract(i, "days"));
}
console.log(sevenDaysArray);

export default sevenDaysArray;