<script lang="ts">
	import { onMount } from 'svelte';

	let list: string[] = $state([]);

	onMount(() => {
		const paths = (localStorage.getItem('used-paths') || '').split(',');
		list = paths;
	});
</script>

<div class="page">
	<h2 class="text-center">Reminders You've Gotten</h2>
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

	ul {
		@apply grid grid-cols-3 justify-between gap-4 text-center;
	}
</style>
