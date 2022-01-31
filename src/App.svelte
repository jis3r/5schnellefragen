<script>
	import { onMount } from "svelte";

	import Router from 'svelte-spa-router';
	import { push } from 'svelte-spa-router';

	import Header from './components/Header.svelte';	

	import { syncLocalStorage } from './utils/questions';
	import routes from './routes.js';

	onMount(() => {
		syncLocalStorage();
    }); 

</script>

<main>
	<div class="container">
		<Header/>
		<Router {routes}/>
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}
</style>