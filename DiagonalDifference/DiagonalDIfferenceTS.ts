function diagonalDifference(arr: number[][]): number {
	const arrLength: number = arr.length;
	return Math.abs(arr.reduce((sum: number, value: number[], ind: number) => {
		return sum += (value[ind] - value[arrLength - 1 - ind]);
	}, 0));
}

// console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])); // 15
console.log(diagonalDifference([[6, 7, 11], [14, 0, -6], [1, 4, -2]])); // 8
