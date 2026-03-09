export const encodeState = (data: Record<string, any>) => btoa(encodeURIComponent(JSON.stringify(data)));

export const decodeState = (encoded: string) => {
  try {
    return JSON.parse(decodeURIComponent(atob(encoded)));
  } catch {
    return {};
  }
};
