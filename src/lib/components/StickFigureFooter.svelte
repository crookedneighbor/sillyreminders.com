<script lang="ts">
	interface Props {
		hideRandomButton?: boolean;
	}
	let { hideRandomButton = false }: Props = $props();
</script>

<div class="speech-arrow"></div>
<div class="flex">
	<img src="/stick-person.gif" alt="" />
	{#if !hideRandomButton}
		<a class="button" href="/random">New</a>
	{/if}
</div>
<p class="p-4 text-center">
	See <a href="/list">all the reminders</a> you've already gotten.
</p>

<style lang="postcss">
	.speech-arrow {
		width: 10px;
		border-top: 20px solid theme(colors.cream);
		border-left: 20px solid transparent;
		border-right: 20px solid transparent;
		@apply ml-24;
	}

	img {
		max-width: 15rem;
	}
</style>
