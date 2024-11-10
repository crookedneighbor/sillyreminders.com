<script lang="ts">
	import { page } from '$app/stores';
	import random from '$lib/random.js';

	let { children } = $props();

	function goToRandom() {
		random([$page.url.pathname]);
	}
</script>

{@render children()}

<button onclick={goToRandom}>New</button>

<style lang="postcss">
	h1 {
		@apply m-auto my-4 text-center text-3xl;
	}
	button {
		@apply m-auto block rounded bg-blue px-16 py-4 text-8xl text-cream transition-colors;
	}
	button:hover {
		@apply bg-red;
	}
</style>
