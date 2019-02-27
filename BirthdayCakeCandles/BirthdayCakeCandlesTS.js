"use strict";
function birthdayCakeCandles(ar) {
    var arLength = ar.length;
    if (arLength === 1) {
        return 1;
    }
    var max = 0;
    return ar.reduce(function (sum, value) {
        if (value === max) {
            sum++;
        }
        else if (value > max) {
            max = value;
            sum = 1;
        }
        return sum;
    }, 0);
}
console.log(birthdayCakeCandles([3, 2, 1, 3]));
// console.log(birthdayCakeCandles([1,2,2,3,7,1,2,3]));
