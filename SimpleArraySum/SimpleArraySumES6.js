function simpleArraySum(ar)
{
	return ar.reduce((sum, item) => sum + item, 0);
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));
