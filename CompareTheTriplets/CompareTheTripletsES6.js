function compareTriplets(a, b)
{
	let aSum = 0;
	let bSum = 0;

	(a).forEach((value, index) => {
		if (value > b[index])
		{
			aSum++;
		} else if (value < b[index])
		{
			bSum++;
		}
	});

	return [aSum, bSum];
}

console.log(compareTriplets([1, 2, 3], [3, 2, 1]));
