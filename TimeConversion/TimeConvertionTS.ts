function timeConversion(s:string):string
{
	let ampm:string = s.slice(-2);

	let newTimeString:string = s.substr(0, s.length - 2);
	let newTime:string[] = newTimeString.split(':');
	let newHour:number = parseInt(newTime[0]);


	if (ampm === 'AM')
	{
		newHour = newHour === 12 ? 0 : newHour;
	} else
	{
		newHour = newHour === 12 ? 12 : newHour + 12;
	}

	newTime[0] = newHour / 10 < 1 ? '0' + newHour.toString() : newHour.toString();

	return newTime.join(':');
}

// timeConversion("07:05:45PM");
console.log(timeConversion("12:45:54AM"));
