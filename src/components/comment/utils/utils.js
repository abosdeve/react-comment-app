export function formatDate(timestamp) {
	const date = new Date(timestamp);
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	const hour = date.getHours();
	const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
	const formattedDate = `${day}-${month}-${year} ${hour}:${minutes}`;

	return formattedDate;
}
