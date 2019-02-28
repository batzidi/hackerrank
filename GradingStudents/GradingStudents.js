function gradingStudents(grades)
{
	var gradesLength = grades.length;

	for (var i = 0; i < gradesLength; i++)
	{
		var r = grades[i] % 10;

		var diff = r < 5 ? 5 - r : 10 - r;

		if (diff < 3 && diff + grades[i] >= 40)
		{
			grades[i] += diff;
		}
	}
	return grades;
}

console.log(gradingStudents([73, 67, 38, 33])); // 75 67 40 33
// console.log(gradingStudents([33, 39, 40])); // 33 40 40
