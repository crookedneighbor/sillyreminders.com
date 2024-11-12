<script lang="ts">
	let { data } = $props();
	let title = $derived(
		`Reminder, ${data.action.message} ${data.thing.message} ${data.how.message}!`
	);
	let actionClass = $derived('action animate-' + (data.action.animation || 'wiggle'));
	let thingClass = $derived('thing animate-' + (data.thing.animation || 'wiggle'));
	let howClass = $derived('how animate-' + (data.how.animation || 'wiggle'));
</script>

<h1>{title}</h1>
<div class="reminder">
	<div class={actionClass}>
		{data.action.emoji}
	</div>
	<div class={thingClass}>
		{data.thing.emoji}
	</div>
	<div class={howClass}>
		{data.how.emoji}
	</div>
</div>

<style lang="postcss">
	h1 {
		@apply m-auto my-4 text-center text-3xl;
	}
	.reminder {
		@apply my-8 flex justify-center text-5xl;
	}
	.action,
	.thing,
	.how {
		@apply shrink px-2;
	}

	@media screen(sm) {
		.reminder {
			@apply text-9xl;
		}
		.action,
		.thing,
		.how {
			@apply px-8;
		}
	}
</style>
