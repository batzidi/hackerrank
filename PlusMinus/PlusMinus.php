<?php
/**
 * PlusMinus.php
 *
 * @copyright 2019 batzidi
 */

function plusMinus($arr)
{
	$arrLength = count($arr);
	$p         = 0;
	$n         = 0;
	forEach ($arr as $item) {
		if ($item > 0) {
			$p++;
		}
		else {
			if ($item < 0) {
				$n++;
			}
		}
	};
	echo number_format($p / $arrLength, 6), "\n";
	echo number_format($n / $arrLength, 6), "\n";
	echo number_format(($arrLength - ($p + $n)) / $arrLength, 6);
}

plusMinus([-4, 3, -9, 0, 4, 1]);
