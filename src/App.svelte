<script>
	import Header from './components/Header.svelte';	
	import Landing from './components/Landing.svelte';
	import Game from './components/Game.svelte';


	let asking = false;
	let mode = "random";
	let filter = [];

	const startNewest = () => {
		mode = "newest";
		toggleView();
    }	

	const startFiltered = (e) => {
		mode = "filtered";
		filter = e.detail;
		toggleView();
    }
	const startRandom = () => {
		mode = "random";
		toggleView();
    }

	const toggleView = () => {
		asking = !asking;
    }

</script>

<main>
	<div class="container" style="overflow: auto;">
		<Header/>
		{#if asking}
			<Game on:back={toggleView} mode={mode} filter={filter}/>
		{:else}
			<Landing on:startNewest={startNewest} on:startFiltered={startFiltered} on:startRandom={startRandom}/>
		{/if}
	  </div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}
</style>