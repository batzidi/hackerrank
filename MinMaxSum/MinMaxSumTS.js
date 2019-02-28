"use strict";
function miniMaxSum(arr) {
    var sumMin = 0;
    var sumMax = 0;
    var midSum = {
        sumElements: function (arr, i) {
            return arr.reduce(function (sum, item, ind) {
                return sum + (ind !== i ? item : 0);
            }, 0);
        }
    };
    arr.forEach(function (item, i) {
        var sum = midSum.sumElements(arr, i);
        if (i === 0) {
            sumMin = sumMax = sum;
        }
        else {
            sumMin = sum < sumMin ? sum : sumMin;
            sumMax = sum > sumMax ? sum : sumMax;
        }
    });
    console.log(sumMin + ' ' + sumMax);
}
miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([5, 5, 5, 5, 5]);
