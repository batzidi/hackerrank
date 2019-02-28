function staircase(n)
{
	for (var i = 0; i < n; i++)
	{
		var spaces = '';
		for (var y = 0; y < n - i - 1; y++)
		{
			spaces += ' ';
		}

		var hashes = '';
		for (y = 0; y < i + 1; y++)
		{
			hashes += '#';
		}

		console.log(spaces + hashes);
	}
}

staircase(6);
