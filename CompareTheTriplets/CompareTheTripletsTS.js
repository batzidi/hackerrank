"use strict";
function compareTriplets(a, b) {
    var aSum = 0;
    var bSum = 0;
    (a).forEach(function (value, index) {
        if (value > b[index]) {
            aSum++;
        }
        else if (value < b[index]) {
            bSum++;
        }
    });
    return [aSum, bSum];
}
console.log(compareTriplets([1, 2, 3], [3, 2, 1]));
