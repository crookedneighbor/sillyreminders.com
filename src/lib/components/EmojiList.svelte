<script lang="ts">
	import Emoji from './Emoji.svelte';

	interface Props {
		title: string;
		emojis: { emoji: string; animation?: string }[];
	}
	let { title, emojis }: Props = $props();
</script>

<h2 class="mt-8 text-center">{title}</h2>
<div class="mb-8 grid grid-cols-3 gap-3">
	{#each emojis as config}
		<div class="my-8 w-full text-center text-9xl">
			<Emoji {...config} />
		</div>
	{/each}
</div>

<style lang="postcss">
	h2 {
		@apply text-5xl;
	}
</style>
