<script lang="ts">
	import LinkButton from './LinkButton.svelte';

	interface Props {
		hideRandomButton?: boolean;
	}
	let { hideRandomButton = false }: Props = $props();
</script>

<div class="arrows">
	<div class="speech-arrow"></div>
	<div class="speech-arrow"></div>
</div>
<div class="little-guy">
	<div class="flex-grow text-center">
		<img src="/hat-stick-person.gif" alt="" />
		<img src="/stick-person.gif" alt="" />
	</div>
	<div class="button-container flex-grow">
		{#if !hideRandomButton}
			<LinkButton href="/random">New</LinkButton>
		{/if}
	</div>
</div>

<style lang="postcss">
	.arrows {
		@apply flex;
	}
	.speech-arrow {
		width: 10px;
		border-top: 20px solid theme(colors.cream);
		border-left: 20px solid transparent;
		border-right: 20px solid transparent;
		@apply hidden;
	}

	img {
		max-width: 10rem;
		@apply inline-block;
	}

	.little-guy {
		@apply mb-4 flex flex-col items-center justify-center;
	}

	@media screen(sm) {
		.little-guy {
			@apply flex-row;
		}

		img {
			max-width: 10rem;
		}
	}

	@media screen(md) {
		.speech-arrow {
			@apply ml-32 inline-block;
		}

		.speech-arrow:nth-child(2) {
			@apply ml-44;
		}

		img {
			max-width: 13.5rem;
		}
		.button-container {
			@apply w-1/3;
		}
	}
</style>
