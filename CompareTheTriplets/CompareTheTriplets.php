<?php
/**
 * CompareTheTriplets.php
 *
 * @copyright 2019 batzidi
 */
function compareTriplets($a, $b)
{
	$aSum = 0;
	$bSum = 0;
	for ($i = 0; $i <= 2; $i++) {
		if ($a[$i] > $b[$i]) {
			$aSum++;
		}
		elseif ($b[$i] > $a[$i]) {
			$bSum++;
		}
	}
	return [$aSum, $bSum];
}
