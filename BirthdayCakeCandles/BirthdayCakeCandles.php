<?php
/**
 * BirthdayCakeCandles.php
 *
 * @copyright 2019 batzidi
 */

function birthdayCakeCandles($ar)
{
	$arLength = count($ar);
	if ($arLength === 1) {
		return 1;
	}

	$max = $ar[0];
	$sum = 1;
	for ($i = 1; $i < $arLength; $i++) {
		if ($ar[$i] === $max) {
			$sum++;
		}
		elseif ($ar[$i] > $max) {
			$max = $ar[$i];
			$sum = 1;
		}
	}
	return $sum;
}

//echo birthdayCakeCandles([3, 2, 1, 3]);
echo birthdayCakeCandles([1,2,2,3,7,1,2,3]);
