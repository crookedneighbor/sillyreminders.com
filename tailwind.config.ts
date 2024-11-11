import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			yellow: '#DACC3E',
			purple: '#57467B',
			red: '#BC2C1A',
			blue: '#07A0C3',
			black: '#1F271B',
			cream: '#FAF0CA'
		},
		extend: {
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-20deg)' },
					'50%': { transform: 'rotate(20deg)' }
				}
			},
			animation: {
				wiggle: 'wiggle 1.5s ease-in-out infinite'
			}
		}
	}
} satisfies Config;
