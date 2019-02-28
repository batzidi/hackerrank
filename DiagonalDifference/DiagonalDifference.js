function diagonalDifference(arr)
{
	var arrLength = arr.length;
	var sum = 0;

	for (var i = 0; i < arrLength; i++)
	{
		sum += (arr[i][i] - arr[i][arrLength - 1 - i])
	}
	return Math.abs(sum);
}

// console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]])); // 15
console.log(diagonalDifference([[6, 7, 11], [14, 0, -6], [1, 4, -2]])); // 8
