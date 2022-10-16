/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			body: ['HK Grotesk', 'sans-serif'],
			display: ['Chivo', 'sans-serif'],
		},
		maxWidth: {
			form: '80ch',
		},
		fontSize: {
			'xs': 'clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)',
			'sm': 'clamp(0.86rem, 0.24vw + 0.82rem, 0.97rem)',
			'md': 'clamp(1rem, 0.34vw + 0.91rem, 1.19rem)',
			'lg': 'clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)',
			'xl': 'clamp(1.56rem, 1vw + 1.31rem, 2.11rem)',
			'2xl': 'clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)',
			'3xl': 'clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)',
			'4xl': 'clamp(3.05rem, 3.54vw + 2.17rem, 5rem)',
		},
		extend: {
		},
	},
	plugins: [],
}
