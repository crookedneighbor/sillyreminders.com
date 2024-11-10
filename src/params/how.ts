import { howParams } from '$lib/hows';

export function match(param) {
	return howParams.includes(param);
}
