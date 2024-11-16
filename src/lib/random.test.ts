import { goto } from '$app/navigation';
import { readable } from 'svelte/store';
import random from './random';
import { randomFromList } from './random-from-list';

vi.mock('$app/navigation');
vi.mock('./random-from-list');
vi.mock('./page-paths', () => ({
	pagePaths: ['/a/b/c', '/d/e/f', '/a/h/i']
}));

vi.mock('$app/stores', () => {
	return {
		page: readable({ url: new URL('https://sillyreminders.com/a/x/z') })
	};
});

describe('random', () => {
	afterEach(() => {
		localStorage.removeItem('used-paths');
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

	it('determines eligible paths via list of page paths, filtered by local storage', () => {
		localStorage.setItem('used-paths', '/d/e/f,/a/h/i');
		vi.mocked(randomFromList).mockReturnValue('');

		random();

		expect(randomFromList).toHaveBeenNthCalledWith(2, ['/a/b/c']);
	});

	it('determines optimal paths by filtering out elligbile paths with the same params as the page url', () => {
		vi.mocked(randomFromList).mockReturnValue('');

		random();

		expect(randomFromList).toHaveBeenNthCalledWith(1, ['/d/e/f']);
	});

	it('updates local storage with new path', () => {
		vi.mocked(randomFromList).mockReturnValue('/new-path');

		random();
		expect(localStorage.getItem('used-paths')).toEqual('/new-path');

		vi.mocked(randomFromList).mockReturnValue('/new-path-2');

		random();
		expect(localStorage.getItem('used-paths')).toEqual('/new-path,/new-path-2');
	});

	it('does not update local storage if no new path is found', () => {
		vi.mocked(randomFromList).mockReturnValue('');

		random();
		expect(localStorage.getItem('used-paths')).toBeNull();

		localStorage.setItem('used-paths', '/path');

		random();
		expect(localStorage.getItem('used-paths')).toEqual('/path');
	});
});
