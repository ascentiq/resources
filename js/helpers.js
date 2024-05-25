function toDateTimeString(Date, format = 'd/m/Y, g:i:s a', timeZone = 'Asia/Singapore') {

	let formatted_minute = Date.toLocaleString('en-US', {timeZone: timeZone, minute: 'numeric'});
	
	let regexPattern = /d|D|j|l|F|m|M|n|Y|y|a|A|g|G|h|H|i|s/g;
	
	let timeString = Date.toLocaleString('en-SG', {timeZone: timeZone, hour: 'numeric', hour12: true});
	let [hours, period] = timeString.split(' ');
	
	// Replace placeholders with variables
	return format.replace(regexPattern, match => {
	    switch (match) {
			case 'd': // Day of the month, 2 digits with leading zeros
				return ('0' + Date.toLocaleString('en-SG', {timeZone: timeZone, day: '2-digit'})).slice(-2);
			case 'D': // Day of the month, 2 digits with leading zeros
				return Date.toLocaleString('en-SG', {timeZone: timeZone, weekday: 'short'});
			case 'j': // Day of the month without leading zeros
				return Date.toLocaleString('en-SG', {timeZone: timeZone, day: 'numeric'});
			case 'l': // Day of the month, 2 digits with leading zeros
				return Date.toLocaleString('en-SG', {timeZone: timeZone, weekday: 'long'});
			case 'F': // A full textual representation of a month, such as January or March
				return Date.toLocaleString('en-SG', {timeZone: timeZone, month: 'long'});
			case 'm': // Numeric representation of a month, with leading zeros
				return Date.toLocaleString('en-SG', {timeZone: timeZone, month: '2-digit'});
			case 'M': // A short textual representation of a month, three letters
				return Date.toLocaleString('en-SG', {timeZone: timeZone, month: 'short'});
			case 'n': // Numeric representation of a month, without leading zeros
				return Date.toLocaleString('en-SG', {timeZone: timeZone, month: 'numeric'});
			case 'Y': // A full numeric representation of a year, at least 4 digits
				return Date.toLocaleString('en-SG', {timeZone: timeZone, year: 'numeric'});
			case 'y': // A two digit representation of a year
				return Date.toLocaleString('en-SG', {timeZone: timeZone, year: '2-digit'});
			case 'g': // 12-hour format of an hour without leading zeros
				return hours;
			case 'a': // Lowercase Ante meridiem and Post meridiem
				return period;
			case 'A': // Uppercase Ante meridiem and Post meridiem
				return period.toUpperCase();
			case 'G': // 24-hour format of an hour without leading zeros
				return Date.toLocaleString('en-SG', {timeZone: timeZone, hour: 'numeric', hour12: false});
			case 'h': // 12-hour format of an hour with leading zeros
				return Date.toLocaleString('en-SG', {timeZone: timeZone, hour: '2-digit', hour12: true});
			case 'H': // 24-hour format of an hour with leading zeros
				return Date.toLocaleString('en-SG', {timeZone: timeZone, hour: '2-digit', hour12: false});
			case 'i': // Minutes with leading zeros
				return ('0' + Date.toLocaleString('en-SG', {timeZone: timeZone, minute: '2-digit'})).slice(-2);
			case 's': // Seconds with leading zeros
				return ('0' + Date.toLocaleString('en-SG', {timeZone: timeZone, second: '2-digit'})).slice(-2);
			default:
				return match; // return the match as is if no replacement needed
	    }
	});
}
