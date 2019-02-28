function plusMinus(arr)
{
	const arrLength = arr.length;
	let p = 0;
	let n = 0;
	arr.forEach((item) => {
		if (item > 0)
		{
			p++;
		} else if (item < 0)
		{
			n++;
		}
	});
	console.log((p / arrLength).toFixed(6));
	console.log((n / arrLength).toFixed(6));
	console.log(((arrLength - (p + n)) / arrLength).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
