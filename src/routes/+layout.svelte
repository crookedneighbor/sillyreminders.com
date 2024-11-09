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

	.wrapper {
		background-color: theme(colors.yellow);
		@apply prose m-4 mx-auto p-4;
	}

	h1 {
		@apply text-center;
	}

	@media screen(sm) {
		.wrapper {
			@apply prose-xl;
		}
	}
</style>
