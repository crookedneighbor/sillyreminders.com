import { render, screen } from '@testing-library/svelte';
import StickFigureFooter from './StickFigureFooter.svelte';

describe('StickFigureFooter', () => {
	it('can hide button', async () => {
		const { rerender } = render(StickFigureFooter);

		expect(screen.getByRole('link', { name: 'New' })).toBeInTheDocument();

		await rerender({
			hideRandomButton: true
		});

		expect(screen.queryByRole('link', { name: 'New' })).not.toBeInTheDocument();
	});
});
