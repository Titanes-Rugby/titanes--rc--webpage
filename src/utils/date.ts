import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function dateFormat(date: string, format: string = 'MM-DD-YYYY hh:mm a') {
	return dayjs(date).format(format);
}

export function timeAgo(date: string) {
	return dayjs(date).fromNow();
}

export const getAgeFromBirthDate = (birthDate?: string): string => {
	if (!birthDate) return '--';

	const parsed = dayjs(birthDate, 'YYYY-MM-DD', true);
	if (!parsed.isValid()) return '--';

	const years = dayjs().diff(parsed, 'year');
	return years >= 0 ? `${years}` : '--';
};
