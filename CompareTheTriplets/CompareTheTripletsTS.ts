function compareTriplets(a:number[], b:number[]):number[]
{
	let aSum:number = 0;
	let bSum:number = 0;

	(a).forEach((value:number, index:number) => {
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
