import { goto } from '$app/navigation';
import { get } from 'svelte/store';
import { pagePaths } from './page-paths';
import { page } from '$app/stores';

function randomFromList(list: string[]) {
	const randomIndex = Math.floor(Math.random() * list.length);
	return list[randomIndex];
}

function randomPath() {
	const path = get(page).url.pathname;
	const pageParams = path.split('/').filter((val) => val);
	const alreadyUsedPaths = localStorage.getItem('used-paths') || '';
	let usedPaths = alreadyUsedPaths;
	if (path !== '/') {
		if (!alreadyUsedPaths) {
			localStorage.setItem('used-paths', path);
		} else if (alreadyUsedPaths.indexOf(path) === -1) {
			usedPaths = `${usedPaths},${path}`;
			localStorage.setItem('used-paths', usedPaths);
		}
	}
	const elligiblePaths = pagePaths.filter((path) => {
		return !usedPaths.includes(path);
	});
	const optimalPaths = elligiblePaths.filter((path) => {
		return !pageParams.includes(path);
	});

	if (optimalPaths.length > 0) {
		return randomFromList(optimalPaths);
	}
	if (elligiblePaths.length === 0) {
		return `/sorry`;
	}
	return randomFromList(elligiblePaths);
}

export default function random() {
	goto(randomPath());
}
