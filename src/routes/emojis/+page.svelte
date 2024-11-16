<script lang="ts">
	import { actions } from '$lib/actions';
	import EmojiList from '$lib/components/EmojiList.svelte';
	import { hows } from '$lib/hows';
	import { things } from '$lib/things';

	const actionEmojis = $derived(Object.values(actions));
	const howEmojis = $derived(Object.values(hows));
	const thingEmojis = $derived(Object.values(things));
</script>

<EmojiList emojis={actionEmojis} title="Actions" />
<EmojiList emojis={howEmojis} title="Hows" />
<EmojiList emojis={thingEmojis} title="Things" />
