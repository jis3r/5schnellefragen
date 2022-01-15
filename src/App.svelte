<script>
	import Header from './components/Header.svelte';	
	import Landing from './components/Landing.svelte';
	import Game from './components/Game.svelte';


	let asking = false;

	const toggleView = () => {
		asking = !asking;
    }

</script>

<main>
	<Header/>
	<div class="container">
		<div class="row" style="margin-top: 25%">
			{#if asking}
				<Game on:back={toggleView}/>
			{:else}
				<Landing on:start={toggleView}/>
			{/if}
		</div>
	  </div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}
</style>