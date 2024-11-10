<script lang="ts">
	import { onMount } from 'svelte';

	let list: string[] = $state([]);

	onMount(() => {
		const paths = (localStorage.getItem('used-paths') || '').split(',');
		list = paths;
	});
</script>

<div class="page">
	<h2 class="text-center">Pages You've Visited</h2>
	<ul>
		{#each list as item}
			<li><a href={item}>{item}</a></li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	.page {
		background-color: theme(colors.cream);
		@apply rounded p-4 pt-6;
	}

	h2 {
		@apply my-8 text-3xl;
	}

	a {
		@apply text-blue;
		&:hover,
		&:focus {
			@apply text-red;
		}
	}

	button {
		@apply m-auto block rounded bg-blue px-16 py-4 text-8xl text-cream transition-colors;
	}
	button:hover {
		@apply bg-red;
	}
</style>
