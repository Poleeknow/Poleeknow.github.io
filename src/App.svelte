<script lang="ts">
	export let name: string;
	import { Router, Link, Route } from "svelte-routing";
	import Heder from "./HeaderAndFooter/Heder.svelte";
	import Main from "./routes/Main.svelte";
	import Links from "./HeaderAndFooter/Links.svelte";
	import AboutMe from "./routes/AboutMe.svelte";
	import Projects from "./routes/Projects.svelte";
	export let url = "";
</script>

<Router url="{url}" style = "margin: 0; padding: 0">
	<Heder/>

	<div>
		<Route path="/"><Main /></Route>
		<Route path="about_me"><AboutMe /></Route>
		<Route path="project"><Projects /></Route>
	</div>

	<Links/>
</Router>

<style>
	html {
		margin: 0;
		padding: 0;
	}
	main {
		text-align: center;
		padding: 0;
		max-width: 240px;
		margin: 0;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>