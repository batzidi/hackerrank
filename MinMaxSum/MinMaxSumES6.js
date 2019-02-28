function miniMaxSum(arr)
{
	let sumMin, sumMax;

	arr.forEach((item, i) => {
		const sum = arr.reduce((sum, item, ind) =>
			sum + (ind !== i ? item : 0)
			, 0);
		if (i === 0)
		{
			sumMin = sumMax = sum;
		} else
		{
			sumMin = sum < sumMin ? sum : sumMin;
			sumMax = sum > sumMax ? sum : sumMax;
		}
	});
	console.log(sumMin + ' ' + sumMax);

}

miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([5, 5, 5, 5, 5]);
