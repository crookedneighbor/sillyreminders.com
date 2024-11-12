import { actionParams, actions } from './actions';
import { howParams, hows } from './hows';
import { thingParams, things } from './things';

interface ParamConfig {
	message: string;
	emoji: string;
}

function toEmoji(map: Record<string, ParamConfig>) {
	return (key: string) => {
		return map[key].emoji;
	};
}

describe('params data integrity checks', () => {
	it('does not repeat any keys', () => {
		const allParams = [...actionParams, ...thingParams, ...howParams];

		expect(allParams.length).toEqual(new Set(allParams).size);
	});

	it('does not repeat any emojis', () => {
		const actionEmojis = actionParams.map(toEmoji(actions));
		const thingEmojis = thingParams.map(toEmoji(things));
		const howEmojis = howParams.map(toEmoji(hows));

		const allEmojis = [...actionEmojis, ...thingEmojis, ...howEmojis];
		expect(allEmojis.length).toEqual(new Set(allEmojis).size);
	});
});
