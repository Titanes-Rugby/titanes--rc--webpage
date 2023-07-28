import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
	cleanup();
});

// https://stackblitz.com/edit/vitejs-vite-w46jsw?file=test%2Ffs.test.ts
// https://github.com/marcosdiasdev/react-vitejs-template/blob/main/.prettierrc
