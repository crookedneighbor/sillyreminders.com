<script lang="ts">
	import Emoji from '$lib/components/Emoji.svelte';

	let { data } = $props();
	let title = $derived(
		`Reminder, ${data.action.message} ${data.thing.message} ${data.how.message}!`
	);
</script>

<h1>{title}</h1>
<div class="reminder">
	<div class="emoji">
		<Emoji emoji={data.action.emoji} animation={data.action.animation} />
	</div>
	<div class="emoji">
		<Emoji emoji={data.thing.emoji} animation={data.thing.animation} />
	</div>
	<div class="emoji">
		<Emoji emoji={data.how.emoji} animation={data.how.animation} />
	</div>
</div>

<style lang="postcss">
	h1 {
		@apply m-auto my-4 text-center text-3xl;
	}
	.reminder {
		@apply my-8 flex justify-center text-5xl;
	}
	.emoji {
		@apply shrink px-2;
	}

	@media screen(sm) {
		.reminder {
			@apply text-9xl;
		}

		.emoji {
			@apply px-8;
		}
	}
</style>
