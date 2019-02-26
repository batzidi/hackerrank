function simpleArraySum(ar:number[]):number
{
	return ar.reduce((sum:number, item:number) => sum + item, 0);
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));
