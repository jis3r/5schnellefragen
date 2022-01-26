<script>
    import { beforeUpdate } from "svelte";
    import { scale } from "svelte/transition";
    import { changeBackground } from '../utils/animation';
    export let details = {  id: "-1", 
                            question: "Frage",
                            episode: "169",
                            year: "2000",
                            author: "dump",
                            count: 0
                        }
    export let current;
    export let amount;

    beforeUpdate(() => {
        if(amount !== 0) changeBackground(parseInt(details.episode));
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
                <span class="author">Von {details.author}</span>
                <span class="year">Jahr {details.year}</span>
                <span class="episode">Folge {details.episode}</span>
                <span class="count">count {details.count}</span>
                <span class="count">id {details.id}</span>
        {/if}
    </div>
</div>

<style>
    .current {
        margin-bottom: 0%;
    }
    .card {
        min-height: 229px;
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