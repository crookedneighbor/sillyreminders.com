<script lang="ts">
	interface Props {
		emoji: string;
		animation?: string;
	}
	let { emoji, animation = 'wiggle' }: Props = $props();
</script>

<div class={`emoji animate-${animation}`}>
	{emoji}
</div>

<style lang="postcss">
	@media (prefers-reduced-motion) {
		.emoji {
			@apply animate-none;
		}
	}
</style>
