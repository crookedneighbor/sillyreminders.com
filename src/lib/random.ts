import { goto } from '$app/navigation';
import { pagePaths } from './page-paths';

function randomPath(denyList: string[]) {
	const elligiblePaths = pagePaths.filter((path) => {
		return !denyList.includes(path);
	});
	if (elligiblePaths.length === 0) {
		return `/sorry`;
	}
	const randomIndex = Math.floor(Math.random() * elligiblePaths.length);
	return elligiblePaths[randomIndex];
}

export default function random(denyList: string[]) {
	goto(randomPath(denyList));
}
