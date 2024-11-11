<script lang="ts">
	import { goto } from '$app/navigation';
	import LinkButton from '$lib/components/LinkButton.svelte';

	function reset() {
		localStorage.setItem('used-paths', '');
		goto('/random');
	}
</script>

<h2 class="text-center">Whoops! Looks like you are out of reminders!</h2>
<div class="my-4 flex justify-center">
	<LinkButton href="/random" onclick={reset}>Reset!</LinkButton>
</div>

<style lang="postcss">
	h2 {
		@apply my-8 text-2xl;
	}
</style>
