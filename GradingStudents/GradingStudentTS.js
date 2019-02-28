"use strict";
function gradingStudents(grades) {
    grades.forEach(function (item, i) {
        var r = item % 10;
        var diff = r < 5 ? 5 - r : 10 - r;
        grades[i] += (diff < 3 && diff + item >= 40) ? diff : 0;
    });
    return grades;
}
console.log(gradingStudents([73, 67, 38, 33])); // 75 67 40 33
// console.log(gradingStudents([33, 39, 40])); // 33 40 40
