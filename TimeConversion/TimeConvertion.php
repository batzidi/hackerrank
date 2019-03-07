<?php
/**
 * TimeConvertion.php
 *
 * @copyright 2019 batzidi
 */

function timeConversion($s)
{
	$ampm = substr($s, -2);

	$newTimeString = substr($s, 0, -2);
	$newTime       = explode(':', $newTimeString);
	$newHour       = (int)$newTime[0];

	if ($ampm === 'AM') {
		$newHour = $newHour === 12 ? 0 : $newHour;
	}
	else {
		$newHour = $newHour === 12 ? 12 : $newHour + 12;
	}

	$newTime[0] = $newHour / 10 < 1 ? '0' . $newHour : $newHour;

	return implode(':', $newTime);
}

//echo timeConversion("07:05:45PM");
echo timeConversion("12:45:54AM");
