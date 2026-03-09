import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function dateFormat(date: string, format: string = 'MM-DD-YYYY hh:mm a') {
  return dayjs(date).format(format);
}

export function timeAgo(date: string) {
  return dayjs(date).fromNow();
}
