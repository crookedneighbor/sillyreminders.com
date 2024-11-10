import { thingParams } from '$lib/things';

export function match(param) {
	return thingParams.includes(param);
}
