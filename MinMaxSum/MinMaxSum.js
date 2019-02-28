function miniMaxSum(arr) {
	var sumMin, sumMax;
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		for (var y = 0; y < arr.length; y++) {
			if (y !== i) {
				sum += arr[y];
			}
		}
		if (i === 0) {
			sumMin = sumMax = sum;
		}
		else {
			sumMin = sum < sumMin ? sum : sumMin;
			sumMax = sum > sumMax ? sum : sumMax;
		}
		sum = 0;
	}
	console.log(sumMin + ' ' + sumMax);

}

miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([5, 5, 5, 5, 5]);
