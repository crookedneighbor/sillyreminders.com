<script lang="ts">
	import random from '$lib/random';
	import { onMount } from 'svelte';

	onMount(() => {
		setTimeout(() => {
			random();
		}, 1000);
	});
</script>

<h2>Loading...</h2>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"
	><path
		fill="none"
		stroke="#07A0C3"
		stroke-width="15"
		stroke-linecap="round"
		stroke-dasharray="300 385"
		stroke-dashoffset="0"
		d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
		><animate
			attributeName="stroke-dashoffset"
			calcMode="spline"
			dur="2"
			values="685;-685"
			keySplines="0 0 1 1"
			repeatCount="indefinite"
		></animate></path
	></svg
>

<style lang="postcss">
	h2 {
		@apply hidden pt-16 text-center text-8xl;
	}
	@media screen(sm) {
		svg,
		h2 {
			/* hard-coded to match the typical height of a reminder */
			height: 244px;
			@apply m-auto;
		}
	}

	@media (prefers-reduced-motion) {
		svg {
			@apply hidden;
		}
		h2 {
			@apply block;
		}
	}
</style>
