<script lang="ts">
	import Header from '../lib/Header.svelte';
	import Links from "../lib/Links.svelte";
	import 'app.css';
</script>

<Header />

<main>
	<slot />
</main>

<Links/>
