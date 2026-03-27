export const toBackgroundUrl = (value: string) =>
	value.startsWith('url(') ? value : `url(${value.startsWith('/') ? value : `/${value}`})`;
