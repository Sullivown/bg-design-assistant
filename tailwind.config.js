/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			white: '#ffffff',
			light: 'whitesmoke',
			'light-grey': '#e8e8e8',
			pink: '#ff176b',
			'pink-dark': '#cf1358',
			'medium-dark': '#777',
			dark: '#242526',
		},
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'main-background': "url('/images/main-background.jpg')",
			},
		},
	},
	plugins: [],
};
