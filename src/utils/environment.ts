function getEnvironment(): 'production' | 'staging' | 'dev' | 'local' {
  const hostname = import.meta.env?.VITE_API_HOST ?? process.env.VITE_API_HOST;

  if (hostname.includes('dev')) {
    return 'dev';
  }
  if (hostname.includes('staging')) {
    return 'staging';
  }
  if (/(localhost|127\.0\.0\.1)/.test(hostname)) {
    return 'local';
  }

  return 'production';
}

export const IS_NON_PRODUCTION = getEnvironment() !== 'production';

export const CURRENT_ENV = getEnvironment();
