function staircase(n)
{
	for (let i = 0; i < n; i++)
	{
		const stair = ' '.repeat(n - i - 1) + '#'.repeat(i + 1);
		console.log(stair);
	}
}

staircase(6);
