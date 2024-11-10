import { actions } from '$lib/actions.js';
import { hows } from '$lib/hows.js';

export function load({ params }) {
	const action = actions[params.action];
	const how = hows[params.how];

	return {
		action,
		how
	};
}
