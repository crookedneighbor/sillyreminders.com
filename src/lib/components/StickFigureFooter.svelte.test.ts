import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import StickFigureFooter from './StickFigureFooter.svelte';
import random from '$lib/random';

vi.mock('$lib/random');

describe('StickFigureFooter', () => {
	it('calls random when button is clicked', async () => {
		const user = userEvent.setup();
		render(StickFigureFooter);

		await user.click(screen.getByRole('button'));

		expect(random).toBeCalledTimes(1);
	});
});
