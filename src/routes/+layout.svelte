<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="wrapper">
	<h1>SillyReminders.com</h1>

	{@render children()}
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.purple);
	}

	:global(a) {
		@apply text-blue;
		&:hover,
		&:focus {
			@apply text-red;
		}
	}

	:global(button) {
		@apply m-auto block rounded bg-blue px-16 py-4 text-8xl text-cream transition-colors;
		&:hover {
			@apply bg-red;
		}
	}

	.wrapper {
		background-color: theme(colors.yellow);
		@apply prose m-4 rounded-xl p-4;
	}

	h1 {
		background-color: theme(colors.cream);
		/* counteract default by prose class */
		margin-bottom: -1rem !important;
		@apply m-auto w-min rounded-t-xl px-8 pb-0 pt-2 text-center;
	}

	@media screen(sm) {
		.wrapper {
			@apply prose-xl mx-auto mt-16;
		}
	}
</style>
