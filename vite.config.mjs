import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

const SRC = 'C:/Users/deept/titanes--rc--webpage/src';

export default defineConfig({
	resolve: {
		alias: {
			'@': SRC,
			'@assets': `${SRC}/assets`,
			'@configs': `${SRC}/configs`,
			'@components': `${SRC}/components`,
			'@contexts': `${SRC}/contexts`,
			'@shared': `${SRC}/shared`,
			'@hocs': `${SRC}/hocs`,
			'@hooks': `${SRC}/hooks`,
			'@ui': `${SRC}/components/ui`,
			'@data': `${SRC}/data`,
			'@utils': `${SRC}/utils`,
		},
	},
	plugins: [svgr(), react()],
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './tests/setup.ts',
		watch: false,
	},
});
