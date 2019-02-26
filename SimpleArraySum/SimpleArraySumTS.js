"use strict";
function simpleArraySum(ar) {
    return ar.reduce(function (sum, item) { return sum + item; }, 0);
}
console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));
