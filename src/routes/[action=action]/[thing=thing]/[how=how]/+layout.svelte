<script lang="ts">
	import random from '$lib/random.js';

	let { children } = $props();

	function goToRandom() {
		random();
	}
</script>

<div class="page">
	{@render children()}
</div>
<div class="speech-arrow"></div>

<div class="flex">
	<img src="/stick-person.gif" alt="" />
	<button onclick={goToRandom}>New</button>
</div>
<p class="p-4 text-center">
	See <a href="/list">all the reminders</a> you've already gotten.
</p>

<style lang="postcss">
	h1 {
		@apply m-auto my-4 text-center text-3xl;
	}

	.page {
		background-color: theme(colors.cream);
		@apply rounded p-4 pt-6;
	}

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
