import { actionParams, actions } from '$lib/actions';
import { thingParams, things } from '$lib/things';
import { howParams, hows } from '$lib/hows';

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

interface Entry {
	action: string;
	thing: string;
	how: string;
}

export function entries() {
	return actionParams.reduce((paths, action) => {
		thingParams.forEach((thing) => {
			howParams.forEach((how) => {
				paths.push({
					action,
					thing,
					how
				});
			});
		});
		return paths;
	}, [] as Entry[]);
}
