import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: [
		{
			pattern: /animate-.*/
		}
	],

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
				},
				rollaround: {
					'0%, 100%': { transform: 'translate(-6vw) rotate(0deg)' },
					'50%': { transform: 'translate(6vw) rotate(360deg)' }
				},
				preamble: {
					'0%, 100%': { transform: 'translate(-6vw) rotate(0deg)' },
					'50%': { transform: 'translate(6vw)' }
				},
				movingbounce: {
					'0%, 100%': { transform: 'translatex(-6vw) translatey(0)' },
					'25%': { transform: 'translatey(-6vw)' },
					'50%': { transform: 'translatey(0vw) translatex(6vw)' },
					'75%': { transform: 'translatey(-6vw)' }
				}
			},
			animation: {
				movingbounce: 'movingbounce 2.5s ease-in-out infinite',
				preamble: 'preamble 2.5s ease-in-out infinite',
				rollaround: 'rollaround 2.5s ease-in-out infinite',
				wiggle: 'wiggle 1.5s ease-in-out infinite'
			}
		}
	}
} satisfies Config;
