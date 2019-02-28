function plusMinus(arr)
{
	var arrLength = arr.length;
	var p = 0;
	var n = 0;
	for (var i = 0; i < arrLength; i++)
	{
		if (arr[i] > 0)
		{
			p++;
		} else if (arr[i] < 0)
		{
			n++;
		}
	}
	console.log((p / arrLength).toFixed(6));
	console.log((n / arrLength).toFixed(6));
	console.log(((arrLength - (p + n)) / arrLength).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
