const isObject = (data: object) => !!data && typeof data === 'object' && !Array.isArray(data);

const cleanObject = (data: object) => Object.fromEntries(Object.entries(data).filter(([, value]) => value !== undefined));

export const removeEmptyValues = (data: object) => (isObject(data) ? cleanObject(data) : data);
