import type { PlayerCardBuilderFormValues } from '../types';

const shareKeys: (keyof PlayerCardBuilderFormValues)[] = [
  'id',
  'position',
  'name',
  'nickname',
  'imageSrc',
  'height',
  'weight',
  'speed',
  'birthYear',
  'reach',
  'power',
  'yearsInTeam',
  'teamName',
];

const isShareableImage = (value: string) => {
  return Boolean(value && !value.startsWith('blob:'));
};

export const valuesFromSearch = (search: string): Partial<PlayerCardBuilderFormValues> => {
  const params = new URLSearchParams(search);
  return shareKeys.reduce<Partial<PlayerCardBuilderFormValues>>((acc, key) => {
    const value = params.get(key);
    if (value) acc[key] = value;
    return acc;
  }, {});
};

export const searchFromValues = (values: PlayerCardBuilderFormValues): string => {
  const params = new URLSearchParams();
  shareKeys.forEach((key) => {
    const value = values[key];
    if (!value) return;
    if (key === 'imageSrc' && !isShareableImage(value)) return;
    params.set(key, value);
  });
  return params.toString();
};
