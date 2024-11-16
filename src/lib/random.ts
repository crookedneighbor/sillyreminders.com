import { goto } from '$app/navigation';
import { get } from 'svelte/store';
import { pagePaths } from './page-paths';
import { page } from '$app/stores';
import { randomFromList } from './random-from-list';

function randomPath() {
	const pathName = get(page).url.pathname;
	const pageParams = pathName.split('/').filter((val) => val);
	const usedPaths = localStorage.getItem('used-paths') || '';

	const elligiblePaths = pagePaths.filter((path) => {
		return !usedPaths.includes(path);
	});
	const optimalPaths = elligiblePaths.filter((path) => {
		return !path.split('/').find((subPath) => pageParams.includes(subPath));
	});

	const newPath = randomFromList(optimalPaths) || randomFromList(elligiblePaths);

	if (!newPath) {
		return '/sorry';
	}

	if (!usedPaths) {
		localStorage.setItem('used-paths', newPath);
	} else {
		localStorage.setItem('used-paths', `${usedPaths},${newPath}`);
	}

	return newPath;
}

export default function random() {
	goto(randomPath());
}
