// https://stackoverflow.com/questions/22850929/most-efficient-way-to-get-the-dates-for-the-past-7-days

const sevenDaysArray: string[] = [];
for (var i = 6; i >= 0; i--) {
    var d = new Date();
    d.setDate(d.getDate() - i);
    const month = d.toLocaleString('default', {month: 'short'});
    const date = d.getDate();
    const formattedDate = `${month} ${date}`
    sevenDaysArray.push(formattedDate);
    console.log(formattedDate);
}

export default sevenDaysArray;