"use strict";
function staircase(n) {
    for (var i = 0; i < n; i++) {
        // in order to work needs to change tsconfig.json: es5 -> es6
        // otherwise needs a for loop
        var stair = ' '.repeat(n - i - 1) + '#'.repeat(i + 1);
        console.log(stair);
    }
}
staircase(6);
