<script lang="ts">
	interface Props {
		title: string;
		emojis: { emoji: string; animation?: string }[];
	}
	let { title, emojis }: Props = $props();
</script>

<h2 class="mt-8 text-center">{title}</h2>
<div class="mb-8 grid grid-cols-3 gap-3">
	{#each emojis as emoji}
		<div class="my-8 w-full text-center text-9xl">
			<div class={`emoji animate-${emoji.animation || 'wiggle'}`}>
				{emoji.emoji}
			</div>
		</div>
	{/each}
</div>

<style lang="postcss">
	h2 {
		@apply text-5xl;
	}

	@media (prefers-reduced-motion) {
		.emoji {
			@apply animate-none;
		}
	}
</style>
