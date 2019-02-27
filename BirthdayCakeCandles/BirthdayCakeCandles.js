function birthdayCakeCandles(ar)
{
	var max;
	var candles = [];
	var arLength = ar.length;
	if (arLength === 1)
	{
		return 1;
	}

	max = ar[0];
	candles = [max];
	for (var i = 1; i < arLength; i++)
	{
		if (ar[i] === max)
		{
			candles.push(i);
		} else if (ar[i] > max)
		{
			max = ar[i];
			candles = [ar[i]];
		}
	}
	return candles.length;
}

//console.log(birthdayCakeCandles_v2([3, 2, 1, 3]));
console.log(birthdayCakeCandles([1, 2, 2, 3, 7, 1, 2, 3]));
