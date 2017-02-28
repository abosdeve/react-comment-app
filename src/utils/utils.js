export function formatDate(date) {
	const { day, hours, minutes, month, seconds, year } = date;
	const digitString = (number) => number > 9 ? number : `0${number}`;
	const formattedDate = `${day}-${month}-${year} ${hours}:${digitString(minutes)}:${digitString(seconds)}`;

	return formattedDate;
}

export function checkEmailFormat(value) {
  const filter = /^([a-zA-Z0-9_\.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  return filter.test(value);
}
