<?php
/**
 * AVeryBigSum.php
 *
 * @copyright 2019 batzidi
 */

function aVeryBigSum($ar)
{
	$bigSum   = 0;
	$arLength = count($ar);
	for ($i = 0; $i < $arLength; $i++) {
		$bigSum += $ar[$i];
	}

	return $bigSum;

}

echo aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
