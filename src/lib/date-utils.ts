export const formatDate = (isoString: string): string => {
	const date = new Date(isoString);
	return date.toLocaleString('en-US', {
		year: 'numeric', // e.g., "2025"
		month: 'short', // e.g., "Feb"
		day: 'numeric', // e.g., "21"
		hour: '2-digit', // e.g., "4 PM"
		minute: '2-digit', // e.g., "56"
		hour12: true, // 12-hour format with AM/PM
	});
};
