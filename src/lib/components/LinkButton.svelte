<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		children: Snippet;
		onclick?: () => void;
	}
	let { href, children, onclick }: Props = $props();
</script>

<a class="button" {href} {onclick}>
	{@render children()}
</a>

<style lang="postcss">
	/* button 74 here https://getcssscan.com/css-buttons-examples */
	.button {
		height: fit-content;
		background-color: theme(colors.blue);
		color: theme(colors.cream);
		border: 2px solid #422800;
		border-radius: 30px;
		box-shadow: #422800 4px 4px 0 0;
		font-weight: 600;
		line-height: 50px;
		text-decoration: none;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
		@apply inline-block cursor-pointer p-16 py-8 text-center text-7xl;
	}

	.button:hover {
		filter: brightness(90%);
	}

	.button:active {
		box-shadow: #422800 2px 2px 0 0;
		transform: translate(2px, 2px);
		filter: brightness(100%);
	}
</style>
