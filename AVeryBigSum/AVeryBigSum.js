function aVeryBigSum(ar)
{
	var bigSum = 0;
	var arLength = ar.length;

	for (var i = 0; i < arLength; i++)
	{
		bigSum += ar[i];
	}

	return bigSum;
}

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));
