function compareTriplets(a, b)
{
	var aSum = 0;
	var bSum = 0;

	for (var i = 0; i < 3; i++)
	{
		if (a[i] > b[i])
		{
			aSum++;
		} else if (b[i] > a[i])
		{
			bSum++;
		}
	}

	return [aSum, bSum];
}
