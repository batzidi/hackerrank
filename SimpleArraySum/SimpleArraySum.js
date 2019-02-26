function simpleArraySum(ar)
{
	var total = 0;
	var arLength = ar.length;
	for (var i = 0; i < arLength; i++)
	{
		total += ar[i];
	}

	return total;
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));
