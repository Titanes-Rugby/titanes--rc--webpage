/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				titanes: {
					100: '#DAF5DF',
					200: '#B8ECC7',
					300: '#85C69E',
					400: '#538D6F',
					500: '#1E4233',
					600: '#15382D',
					700: '#0F2F28',
					800: '#092622',
					900: '#051F1F',
				},
			},
			backgroundImage: {
				try: 'url(/images/background/1103840.jpg)',
				rhino: 'url(/images/background/1103841.jpg)',
			},
		},
	},
	plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
