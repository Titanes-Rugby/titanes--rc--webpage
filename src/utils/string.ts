import slugifyFn from 'slugify';

export const slugify = (s: string) => slugifyFn(s);

export function capitalize(s?: string) {
  if (!s) return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function formatStatus(s?: string) {
  if (!s) return '';
  return s.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export function toCamelCase(str: string) {
  return str
    .split(' ')
    .map(function (word, index) {
      if (index == 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

export function formatMessage(template: string, values: Record<string, string | number | undefined | null>): string {
  return template.replace(/<([^>]+)>/g, (match, key) => {
    const value = values[key];

    return value !== undefined && value !== null ? String(value) : match;
  });
}

export function pluralize(count: number | undefined | null, singular: string, plural?: string) {
  const safeCount = count ?? 0;
  if (safeCount === 1) return `${safeCount} ${singular}`;
  return `${safeCount} ${plural || singular + 's'}`;
}
