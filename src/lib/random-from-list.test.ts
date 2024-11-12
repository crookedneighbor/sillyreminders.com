import { randomFromList } from './random-from-list';

describe('randomFromList', () => {
	it('returns a random value from array', () => {
		const list = ['a', 'b', 'c', 'd'];
		const spy = vi.spyOn(Math, 'random').mockReturnValue(0);

		expect(randomFromList(list)).toEqual('a');

		spy.mockReturnValue(0.3);
		expect(randomFromList(list)).toEqual('b');

		spy.mockReturnValue(0.6);
		expect(randomFromList(list)).toEqual('c');

		spy.mockReturnValue(0.9);
		expect(randomFromList(list)).toEqual('d');
	});

	it('returns undefined if there are no values in array', () => {
		expect(randomFromList([])).toBeUndefined();
	});
});
