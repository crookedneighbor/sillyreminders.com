<script lang="ts">
	let { data } = $props();
	let title = $derived(`${data.action} ${data.how}`);
</script>

<h1>{title}</h1>

<button>New</button>
