import { actionParams } from './actions';
import { howParams } from './hows';

export const pagePaths = actionParams.reduce((paths, action) => {
	howParams.forEach((how) => {
		paths.push(`/${action}/${how}`);
	});
	return paths;
}, [] as string[]);
