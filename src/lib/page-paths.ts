import { actionParams } from './actions';
import { thingParams } from './things';
import { howParams } from './hows';

export const pagePaths = actionParams.reduce((paths, action) => {
	thingParams.forEach((thing) => {
		howParams.forEach((how) => {
			paths.push(`/${action}/${thing}/${how}`);
		});
	});
	return paths;
}, [] as string[]);
