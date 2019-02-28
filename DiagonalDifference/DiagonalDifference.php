<?php
/**
 * DiagonalDifference.php
 *
 * @copyright 2019 batzidi
 */

function diagonalDifference($arr)
{
	$arrLength = count($arr);
	$sum       = 0;

	for ($i = 0; $i < $arrLength; $i++) {
		$sum += ($arr[$i][$i] - $arr[$i][$arrLength - 1 - $i]);
	}
	return abs($sum);
}

echo diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]);
