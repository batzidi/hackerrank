<?php
/**
 * GradingStudents.php
 *
 * @copyright 2019 batzidi
 */

function gradingStudents($grades)
{
	$gradesLength = count($grades);

	for ($i = 0; $i < $gradesLength; $i++) {
		$r = $grades[$i] % 10;

		$diff = $r < 5 ? 5 - $r : 10 - $r;

		if ($diff < 3 && $diff + $grades[$i] >= 40) {
			$grades[$i] += $diff;
		}
	}
	return $grades;
}

// print_r(gradingStudents([73, 67, 38, 33]));
print_r(gradingStudents([33, 39, 40]));
