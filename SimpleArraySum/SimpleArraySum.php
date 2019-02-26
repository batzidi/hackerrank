<?php
/**
 * SimpleArraySum.php
 *
 * @copyright 2019 batzidi
 */
function simpleArraySum($ar)
{
	$total = 0;
	foreach ($ar as $item) {
		$total += $item;
	}
	return $total;
}

echo simpleArraySum([1, 2, 3, 4, 10, 11]);
