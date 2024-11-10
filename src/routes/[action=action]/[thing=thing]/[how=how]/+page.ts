import { actions } from '$lib/actions';
import { things } from '$lib/things';
import { hows } from '$lib/hows';

export function load({ params }) {
	const action = actions[params.action];
	const thing = things[params.thing];
	const how = hows[params.how];

	return {
		action,
		thing,
		how
	};
}
