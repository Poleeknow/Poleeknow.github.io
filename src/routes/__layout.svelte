<script lang="ts">
	import Header from '../lib/Header.svelte';
	import Links from "../lib/Links.svelte";
</script>

<Header />

<main>
	<slot />
</main>

<Links/>