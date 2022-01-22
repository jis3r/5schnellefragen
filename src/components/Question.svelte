<script>
    import { onMount, afterUpdate } from "svelte";
    import { scale } from "svelte/transition";
    import { changeBackground } from '../utils/animation';
    export let details = {  id: "-1", 
                            question: "Frage",
                            episode: "169",
                            year: "2000",
                            author: "dump"
                        }
    export let current;
    export let amount;
    
    onMount(() => {
        changeBackground(parseInt(details.episode));
    });

    afterUpdate(() => {
        changeBackground(parseInt(details.episode));
    });
</script>

<div class="row" style="margin-top: 25%" in:scale>
    <div class="twelve columns">
        {#if amount === 0}
            <div class="card">
                <h3 class="question">Für diesen Filter gibt es leider keine Fragen.</h3>
            </div>
        {:else}
            <div class="card">
                <p class="current">{current}/{amount}</p>
                <h3 class="question">{details.question}</h3>
            </div>
                <span class="author">von {details.author}</span>
                <span class="year">Jahr {details.year}</span>
                <span class="episode">Folge {details.episode}</span>
        {/if}
    </div>
</div>

<style>
    .current {
        margin-bottom: 0%;
    }
    .card {
        /*width: 320px;
        height: 320px;
        padding: .5rem;
        border-radius: 1rem;
        box-shadow: 0 2px 7px 0 rgb(0 0 0 / 20%);*/
        min-height: 195px;
        vertical-align: bottom;
    }
span { 
    color: #d9d9d9/*#33C3F0 /*#006C73*/;
    background-color: rgba(217, 217, 217, 0.25);
    border-radius: 0.25rem;
    min-width: 9rem;
    padding: 0.125rem 0.625rem;
    margin: 0 0.25rem;
    line-height: 1;
    font-weight: 500;
    vertical-align: middle;
}
</style>