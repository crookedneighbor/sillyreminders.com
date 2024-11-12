export const actions = {
	read: {
		message: 'read',
		emoji: '📖'
	},
	draw: {
		message: 'draw',
		emoji: '️✍'
	},
	eat: {
		message: 'eat',
		emoji: '😋',
		animation: 'rollaround'
	},
	ride: {
		message: 'ride',
		emoji: '🎢'
	},
	walk: {
		message: 'walk',
		emoji: '🚶‍♀️‍➡️',
		animation: 'preamble'
	}
};

export const actionParams = Object.keys(actions);
