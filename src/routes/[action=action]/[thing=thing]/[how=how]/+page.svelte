<script lang="ts">
	let { data } = $props();
	let title = $derived(
		`Reminder, ${data.action.message} ${data.thing.message} ${data.how.message}!`
	);
</script>

<h1>{title}</h1>
<div class="reminder">
	<div class="action">
		{data.action.emoji}
	</div>
	<div class="thing">
		{data.thing.emoji}
	</div>
	<div class="how">
		{data.how.emoji}
	</div>
</div>

<style lang="postcss">
	h1 {
		@apply m-auto my-4 text-center text-3xl;
	}
	.reminder {
		@apply my-8 flex justify-center text-9xl;
	}
	.action,
	.thing,
	.how {
		@apply shrink animate-wiggle px-8;
	}
</style>
