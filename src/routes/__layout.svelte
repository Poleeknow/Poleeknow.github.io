<script lang="ts">
	import Header from '../lib/Header.svelte';
	import Links from "../lib/Links.svelte";
	import '../main.css';
</script>

<Header />

<main>
	<slot />
</main>

<Links/>