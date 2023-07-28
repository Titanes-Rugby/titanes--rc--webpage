/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
			'@contexts': path.resolve(__dirname, './src/contexts'),
			'@shared': path.resolve(__dirname, './src/shared'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@widgets': path.resolve(__dirname, './src/widgets'),
			'@data': path.resolve(__dirname, './src/data'),
		},
	},
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom',
		reporters: ['html'],
		setupFiles: './tests/setup.ts',
		watch: false,
	},
});
