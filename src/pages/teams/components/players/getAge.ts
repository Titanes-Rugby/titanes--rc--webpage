import dayjs from 'dayjs';

export const getAgeFromBirthDate = (birthDate?: string): string => {
  if (!birthDate) return '--';

  const parsed = dayjs(birthDate, 'YYYY-MM-DD', true);
  if (!parsed.isValid()) return '--';

  const years = dayjs().diff(parsed, 'year');
  return years >= 0 ? `${years}` : '--';
};
