"use strict";
function aVeryBigSum(ar) {
    return ar.reduce(function (bigSum, value) { return bigSum + value; }, 0);
}
console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));