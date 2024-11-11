<script lang="ts">
	import LinkButton from './LinkButton.svelte';

	interface Props {
		hideRandomButton?: boolean;
	}
	let { hideRandomButton = false }: Props = $props();
</script>

<div class="speech-arrow"></div>
<div class="little-guy">
	<div class="flex-grow text-center">
		<img src="/stick-person.gif" alt="" />
	</div>
	<div class="flex-grow">
		{#if !hideRandomButton}
			<LinkButton href="/random">New</LinkButton>
		{/if}
	</div>
</div>

<style lang="postcss">
	.speech-arrow {
		width: 10px;
		border-top: 20px solid theme(colors.cream);
		border-left: 20px solid transparent;
		border-right: 20px solid transparent;
		@apply m-auto;
	}

	img {
		max-width: 15rem;
		@apply inline-block;
	}

	.little-guy {
		@apply mb-4 flex flex-col items-center justify-center;
	}

	@media screen(sm) {
		.little-guy {
			@apply flex-row;

			.flex-grow {
				@apply w-1/2;
			}
		}

		.speech-arrow {
			@apply ml-48;
		}
	}
</style>
