function plusMinus(arr: number[]): void {
	const arrLength: number = arr.length;
	let p: number = 0;
	let n: number = 0;
	arr.forEach((item) => {
		if (item > 0) {
			p++;
		} else if (item < 0) {
			n++;
		}
	});
	console.log((p / arrLength).toFixed(6));
	console.log((n / arrLength).toFixed(6));
	console.log(((arrLength - (p + n)) / arrLength).toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1]);
