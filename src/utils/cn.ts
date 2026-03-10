import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

type TemplateLike = TemplateStringsArray | ClassValue;
type ParamsLike = ClassValue[];

export const cx = (template: TemplateLike, ...params: ParamsLike): string => {
  if (typeof template === 'string') return clsx(template, ...params);

  template = Array.isArray(template) ? template : [template];

  let merged = template.join('') + params.join('');
  merged = merged.replace(/\s+/g, ' ').trim();

  return clsx(merged);
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
