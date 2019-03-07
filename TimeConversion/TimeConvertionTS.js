"use strict";
function timeConversion(s) {
    var ampm = s.slice(-2);
    var newTimeString = s.substr(0, s.length - 2);
    var newTime = newTimeString.split(':');
    var newHour = parseInt(newTime[0]);
    if (ampm === 'AM') {
        newHour = newHour === 12 ? 0 : newHour;
    }
    else {
        newHour = newHour === 12 ? 12 : newHour + 12;
    }
    newTime[0] = newHour / 10 < 1 ? '0' + newHour.toString() : newHour.toString();
    return newTime.join(':');
}
// timeConversion("07:05:45PM");
console.log(timeConversion("12:45:54AM"));
