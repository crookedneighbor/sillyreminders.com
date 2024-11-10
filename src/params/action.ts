import { actionParams } from '$lib/actions';

export function match(param) {
	return actionParams.includes(param);
}
