/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@configs': path.resolve(__dirname, './src/configs'),
			'@components': path.resolve(__dirname, './src/components'),
			'@contexts': path.resolve(__dirname, './src/contexts'),
			'@shared': path.resolve(__dirname, './src/shared'),
			'@hocs': path.resolve(__dirname, './src/hocs'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@ui': path.resolve(__dirname, './src/components/ui'),
			'@data': path.resolve(__dirname, './src/data'),
			'@utils': path.resolve(__dirname, './src/utils'),
		},
	},
	plugins: [svgr(), react()],
	test: {
		globals: true,
		environment: 'jsdom',
		// reporters: ['html'],
		setupFiles: './tests/setup.ts',
		coverage: {
			provider: 'v8',
			reporter: ['text', 'html'],
			reportsDirectory: './coverage',
			all: true,
			include: ['src/**/*.{ts,tsx}'],
			exclude: ['src/**/*.d.ts', 'src/**/__mocks__/**', 'src/**/*.test.{ts,tsx}', 'src/**/*.stories.{ts,tsx}'],
			thresholds: {
				statements: 97,
				branches: 97,
				functions: 97,
				lines: 97,
			},
		},
		watch: false,
	},
});
