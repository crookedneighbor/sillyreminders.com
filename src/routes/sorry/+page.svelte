<script lang="ts">
	import { goto } from '$app/navigation';

	function reset() {
		localStorage.setItem('used-paths', '');
		goto('/random');
	}
</script>

<div class="page">
	<h2 class="text-center">Whoops! Looks like you are out of reminders!</h2>
	<button onclick={reset}>Reset!</button>
</div>

<style lang="postcss">
	.page {
		background-color: theme(colors.cream);
		@apply rounded p-4 pt-6;
	}

	h2 {
		@apply my-8 text-3xl;
	}

	button {
		@apply m-auto block rounded bg-blue px-16 py-4 text-8xl text-cream transition-colors;
	}
	button:hover {
		@apply bg-red;
	}
</style>
