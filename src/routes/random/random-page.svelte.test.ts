import { render } from '@testing-library/svelte';
import RandomPage from './+page.svelte';
import random from '$lib/random';

vi.mock('$lib/random');

describe('Random Page', () => {
	beforeEach(() => {
		vi.useFakeTimers();
	});

	afterEach(() => {
		vi.runAllTimers();
		vi.useRealTimers();
	});

	it('calls random 1 second after mounting', () => {
		render(RandomPage);

		expect(random).not.toBeCalled();

		vi.advanceTimersByTime(999);
		expect(random).not.toBeCalled();

		vi.advanceTimersByTime(2);
		expect(random).toBeCalledTimes(1);
	});
});
