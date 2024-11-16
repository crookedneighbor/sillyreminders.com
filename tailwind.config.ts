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
				walkright: {
					'0%,100%': { transform: 'translate(-6vw)' },
					'50%': { transform: 'translate(6vw)' },
					'55%': { transform: 'translate(6vw) scale(-1, 1)' },
					'95%': { transform: 'translate(-6vw) scale(-1, 1)' }
				},
				walkleft: {
					'0%,100%': { transform: 'translate(6vw)' },
					'50%': { transform: 'translate(-6vw)' },
					'55%': { transform: 'translate(-6vw) scale(-1, 1)' },
					'95%': { transform: 'translate(6vw) scale(-1, 1)' }
				},
				movingbounce: {
					'0%, 100%': { transform: 'translatex(-6vw) translatey(0)' },
					'25%': { transform: 'translatey(-6vw)' },
					'50%': { transform: 'translatey(0vw) translatex(6vw)' },
					'75%': { transform: 'translatey(-6vw)' }
				},
				headshake: {
					'0%': { transform: 'translateX(0)' },
					'6.5%': {
						transform: 'translateX(-6px) rotateY(-9deg)'
					},
					'18.5%': {
						transform: 'translateX(5px) rotateY(7deg)'
					},
					'31.5%': {
						transform: 'translateX(-3px) rotateY(-5deg)'
					},
					'43.5%': {
						transform: 'translateX(2px) rotateY(3deg)'
					},
					'50%': {
						transform: 'translateX(0)'
					}
				},
				tada: {
					from: {
						transform: 'scale3d(1, 1, 1)'
					},
					'10%, 20%': {
						transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)'
					},
					'30%, 50%, 70%, 90%': {
						transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)'
					},
					'40%, 60%, 80%': {
						transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)'
					},
					to: {
						transform: 'scale3d(1, 1, 1)'
					}
				}
			},
			animation: {
				movingbounce: 'movingbounce 2.5s ease-in-out infinite',
				walkright: 'walkright 2.5s ease-in-out infinite',
				walkleft: 'walkleft 2.5s ease-in-out infinite',
				rollaround: 'rollaround 2.5s ease-in-out infinite',
				wiggle: 'wiggle 1.5s ease-in-out infinite',
				headshake: 'headshake 1s ease-in-out infinite',
				tada: 'tada 1s ease-in-out infinite'
			}
		}
	}
} satisfies Config;
