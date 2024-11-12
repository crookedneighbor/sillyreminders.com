import { goto } from '$app/navigation';
import { readable } from 'svelte/store';
import random from './random';
import { randomFromList } from './random-from-list';
import type { MockInstance } from 'vitest';

vi.mock('$app/navigation');
vi.mock('./random-from-list');
vi.mock('./page-paths', () => ({
	pagePaths: ['/a/b/c', '/d/e/f', '/a/h/i']
}));

vi.mock('$app/stores', () => {
	return {
		page: readable({ url: new URL('https://sillyreminders.com') })
	};
});

describe('random', () => {
	let setItem: MockInstance;
	let getItem: MockInstance;

	beforeEach(() => {
		getItem = vi.spyOn(localStorage, 'getItem').mockReturnValue('');
		setItem = vi.spyOn(localStorage, 'setItem').mockReturnValue();
	});

	it('returns /sorry if no elligible paths are passed', () => {
		vi.mocked(randomFromList).mockReturnValue('');

		random();

		expect(goto).toBeCalledWith('/sorry');
	});

	it('prefers a random path from the optimal paths', () => {
		vi.mocked(randomFromList).mockReturnValueOnce('/optimal');
		vi.mocked(randomFromList).mockReturnValueOnce('/elligible');

		random();

		expect(goto).toBeCalledWith('/optimal');
	});

	it('uses an eligible path if optimal path is not availabel', () => {
		vi.mocked(randomFromList).mockReturnValueOnce('');
		vi.mocked(randomFromList).mockReturnValueOnce('/elligible');

		random();

		expect(goto).toBeCalledWith('/elligible');
	});
});
