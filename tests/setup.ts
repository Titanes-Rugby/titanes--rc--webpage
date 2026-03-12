import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
	cleanup();
});

class MockIntersectionObserver implements IntersectionObserver {
	readonly root: Element | Document | null = null;
	readonly rootMargin: string = '';
	readonly thresholds: ReadonlyArray<number> = [];
	disconnect() {}
	observe() {}
	takeRecords(): IntersectionObserverEntry[] {
		return [];
	}
	unobserve() {}
}

class MockResizeObserver {
	disconnect() {}
	observe() {}
	unobserve() {}
}

Object.defineProperty(window, 'IntersectionObserver', {
	writable: true,
	value: MockIntersectionObserver,
});

Object.defineProperty(window, 'ResizeObserver', {
	writable: true,
	value: MockResizeObserver,
});

// https://stackblitz.com/edit/vitejs-vite-w46jsw?file=test%2Ffs.test.ts
// https://github.com/marcosdiasdev/react-vitejs-template/blob/main/.prettierrc
