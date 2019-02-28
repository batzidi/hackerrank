function miniMaxSum(arr: number[]): void {
	let sumMin: number = 0;
	let sumMax: number = 0;

	type arraySum = { sumElements: (a: number[], i: number) => number }

	let midSum: arraySum = {
		sumElements(arr: number[], i: number): number {
			return arr.reduce((sum: number, item: number, ind: number) =>
				sum + (ind !== i ? item : 0)
				, 0);
		}
	};

	arr.forEach((item: number, i: number) => {
		const sum = midSum.sumElements(arr, i);
		if (i === 0) {
			sumMin = sumMax = sum;
		} else {
			sumMin = sum < sumMin ? sum : sumMin;
			sumMax = sum > sumMax ? sum : sumMax;
		}
	});
	console.log(sumMin + ' ' + sumMax);

}

miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([5, 5, 5, 5, 5]);
